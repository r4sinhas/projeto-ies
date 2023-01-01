package com.PASSIT.services;

import com.PASSIT.model.Player;
import com.PASSIT.model.Game;
import com.PASSIT.model.StatsByGame;
import com.PASSIT.repository.GameRepository;
import com.PASSIT.repository.StatsByGameRepository;
import com.PASSIT.repository.PlayerRepository;

import java.sql.Date;
import java.util.*;

import com.sun.source.tree.Tree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatsByGameService {

    private final StatsByGameRepository statsByGameRepository;
    private final PlayerRepository playerRepository;
    private final GameRepository gameRepository;

    private static float last_sec = 0;


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

    public StatsByGame addStats(Long id, TreeMap<Float,Float>[] stats) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setBpm(stats[0]);
        statsByGame.setSpeed(stats[1]);
        statsByGame.setBreathing_rate(stats[2]);
        statsByGame.setEcg(stats[3]);
        return statsByGameRepository.save(statsByGame);
    }

    public StatsByGame addStatsLive(Long id, Float bpm, Float breathing_rate, Float speed, TreeMap<Float,Float> ecg) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.getBpm().put(last_sec,bpm);
        statsByGame.getBreathing_rate().put(last_sec,breathing_rate);
        statsByGame.getSpeed().put(last_sec,speed);
        statsByGame.getEcg().putAll(ecg);
        this.last_sec += 1;
        return statsByGameRepository.save(statsByGame);
    }


    public List<TreeMap<Float,Float>> getStatsByGameLive(Long id) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        return Arrays.asList(statsByGame.getLastBpm(last_sec-1), statsByGame.getLastSpeed(last_sec-1), statsByGame.getLastBreathingRate(last_sec-1), statsByGame.getLastEcg(last_sec-1));
    }
    
    public void setMinutesPlayed(Long id, int minutesPlayed) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setMinutes_played(minutesPlayed);
        statsByGameRepository.save(statsByGame);
    }

}
