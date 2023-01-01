package com.PASSIT.services;

import com.PASSIT.model.Player;
import com.PASSIT.model.Game;
import com.PASSIT.model.StatsByGame;
import com.PASSIT.repository.GameRepository;
import com.PASSIT.repository.StatsByGameRepository;
import com.PASSIT.repository.PlayerRepository;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatsByGameService {

    private final StatsByGameRepository statsByGameRepository;
    private final PlayerRepository playerRepository;
    private final GameRepository gameRepository;


    @Autowired
    public StatsByGameService(StatsByGameRepository statsByGameRepository, PlayerRepository playerRepository, GameRepository gameRepository) {
        this.statsByGameRepository = statsByGameRepository;
        this.playerRepository = playerRepository;
        this.gameRepository = gameRepository;
    }

    public StatsByGame saveStatsByGame(StatsByGame statsByGame) {
        gameRepository.findById(statsByGame.getGame_id().getId()).get().addStatsByGame(statsByGame);
        playerRepository.findById(statsByGame.getPlayer_id().getId()).get().addStatsByGame(statsByGame);
        return statsByGameRepository.save(statsByGame);
    }

    public Iterable<StatsByGame> getStatsByGames() {
        return statsByGameRepository.findAll();
    }

    public StatsByGame addStats(Long id, List<TreeMap<Double,Double>> stats) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setBpm(stats.get(0));
        statsByGame.setSpeed(stats.get(1));
        statsByGame.setBreathing_rate(stats.get(2));
        statsByGame.setEcg(stats.get(3));
        return statsByGameRepository.save(statsByGame);
    }
    
    public void setMinutesPlayed(Long id, int minutesPlayed) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setMinutes_played(minutesPlayed);
        statsByGameRepository.save(statsByGame);
    }

}
