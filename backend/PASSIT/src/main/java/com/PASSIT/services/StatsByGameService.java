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

    public void addStats(Long id, TreeMap<Float,Float>[] stats, int minutes_played) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setBpm(stats[0]);
        statsByGame.setSpeed(stats[1]);
        statsByGame.setBreathing_rate(stats[2]);
        statsByGame.setEcg(stats[3]);
        statsByGame.setMinutes_played(minutes_played);
        statsByGameRepository.save(statsByGame);
    }

    public StatsByGame addStatsLive(Long id, Float bpm, Float breathing_rate, Float speed, TreeMap<Float,Float> ecg, Float time) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        if (time > 0)
            this.last_sec = time-1;
        statsByGame.getBpm().put(time,bpm);
        statsByGame.getBreathing_rate().put(time,breathing_rate);
        statsByGame.getSpeed().put(time,speed);
        statsByGame.getEcg().putAll(ecg);
        return statsByGameRepository.save(statsByGame);
    }


    public Map<String,TreeMap<Float,Float>> getStatsByGameLive(Long id) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        System.out.println("Last sec: "+this.last_sec+"\nBPM: "+statsByGame.getBpm().get(this.last_sec)+ "\nBreathing Rate: "+statsByGame.getBreathing_rate().get(this.last_sec)+ "\nSpeed: "+statsByGame.getSpeed().get(this.last_sec));
        return Map.of("bpm",statsByGame.getLastBpm(last_sec), "speed",statsByGame.getLastSpeed(last_sec), "breathing_rate", statsByGame.getLastBreathingRate(last_sec), "ecg", statsByGame.getLastEcg(last_sec));
    }

    public Map<String, Map<Float,Float>> getStatsByGame(Long id) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        return Map.of("bpm",statsByGame.getBpm(), "speed",statsByGame.getSpeed(), "breathing_rate", statsByGame.getBreathing_rate(), "ecg", statsByGame.getEcg());
    }

    public void setMinutesPlayed(Long id, int minutesPlayed) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setMinutes_played(minutesPlayed);
        statsByGameRepository.save(statsByGame);
    }

}
