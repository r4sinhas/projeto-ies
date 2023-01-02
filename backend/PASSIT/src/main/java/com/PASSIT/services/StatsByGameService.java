package com.PASSIT.services;

import com.PASSIT.model.Player;
import com.PASSIT.model.Game;
import com.PASSIT.model.StatsByGame;
import com.PASSIT.repository.GameRepository;
import com.PASSIT.repository.StatsByGameRepository;
import com.PASSIT.repository.PlayerRepository;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatsByGameService {

    private final StatsByGameRepository statsByGameRepository;
    private final PlayerRepository playerRepository;
    private final GameRepository gameRepository;

    private static float last_sec;


    @Autowired
    public StatsByGameService(StatsByGameRepository statsByGameRepository, PlayerRepository playerRepository, GameRepository gameRepository) {
        this.statsByGameRepository = statsByGameRepository;
        this.playerRepository = playerRepository;
        this.gameRepository = gameRepository;
    }

    public StatsByGame saveStatsByGame(StatsByGame statsByGame) {
        Game game = gameRepository.findById(statsByGame.getGame()).orElse(null);
        Player player = playerRepository.findById(statsByGame.getPlayer()).orElse(null);
        statsByGame.setGame_id(game);
        statsByGame.setPlayer_id(player);
        game.addStatsByGame(statsByGame);
        player.addStatsByGame(statsByGame);
        return statsByGameRepository.save(statsByGame);
    }

    public Iterable<StatsByGame> getStatsByGames() {
        return statsByGameRepository.findAll();
    }

    public StatsByGame addStats(Long id, Map<Float,Float>[] stats, int minutes_played) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setBpm(stats[0]);
        statsByGame.setSpeed(stats[1]);
        statsByGame.setBreathing_rate(stats[2]);
        statsByGame.setEcg(stats[3]);
        statsByGame.setMinutes_played(minutes_played);
        return statsByGameRepository.save(statsByGame);
    }

    public StatsByGame addStatsLive(Long id, Float bpm, Float breathing_rate, Float speed, HashMap<Float,Float> ecg, Float time) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        Game game = gameRepository.findById(statsByGame.getGame()).orElse(null);
        if (!game.flagLive()){
            game.setFlagLive(true);
            gameRepository.save(game);
        }
        if (time > 0)
            this.last_sec = time-1;
        statsByGame.getBpm().put(time,bpm);
        statsByGame.getBreathing_rate().put(time,breathing_rate);
        statsByGame.getSpeed().put(time,speed);
        statsByGame.getEcg().putAll(ecg);
        return statsByGameRepository.save(statsByGame);
    }


    public Map<String,List<float[]>> statsByGameLive(Long id, Long game_id) {
        StatsByGame statsByGame = statsByGameRepository.findAll().stream().filter(s -> s.getPlayer() == id && s.getGame() == game_id).findFirst().orElse(null);
        if (statsByGame.getGame_id().flagLive()) {
            return Map.of(
                    "bpm", List.of(new float[]{last_sec, statsByGame.lastBpm(last_sec)}),
                    "breathing_rate", List.of(new float[]{last_sec, statsByGame.lastBreathingRate(last_sec)}),
                    "speed", List.of(new float[]{last_sec, statsByGame.lastSpeed(last_sec)}),
                    "ecg", statsByGame.lastEcg(last_sec).entrySet().stream()
                            .map(entry -> new float[]{entry.getKey(), entry.getValue()})
                            .collect(Collectors.toList())
            );
        } else
            return null;

    }

    public Map<Integer,List<float[]>> statsByPlayer(Long id) {
        HashMap<Integer,List<float[]>> stats = new HashMap<>();
        int i = 1;
        for (StatsByGame statsByGame : statsByGameRepository.findAll()) {
            if (statsByGame.getPlayer() == id)
                stats.put(i++, List.of(
                        new float[]{statsByGame.avgBpm(), statsByGame.getGame_id().avgBpm()},
                        new float[]{statsByGame.avgSpeed(), statsByGame.getGame_id().avgSpeed()},
                        new float[]{statsByGame.avgBreathingRate(), statsByGame.getGame_id().avgBreathingRate()}
                ));
        }
        return stats;
    }

    public void setMinutesPlayed(Long id, int minutesPlayed) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        Game game = gameRepository.findById(statsByGame.getGame()).orElse(null);
        statsByGame.setMinutes_played(minutesPlayed);
        statsByGameRepository.save(statsByGame);
        if (game.flagLive()){
            game.setFlagLive(false);
            gameRepository.save(game);
        }
    }

}
