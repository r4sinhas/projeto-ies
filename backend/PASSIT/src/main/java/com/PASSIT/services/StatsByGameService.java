package com.PASSIT.services;

import com.PASSIT.model.StatsByGame;
import com.PASSIT.repository.GameRepository;
import com.PASSIT.repository.StatsByGameRepository;

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

    @Autowired
    public StatsByGameService(StatsByGameRepository statsByGameRepository) {
        this.statsByGameRepository = statsByGameRepository;
    }

    public StatsByGame saveStatsByGame(StatsByGame statsByGame) {
        statsByGame.getGame_id().getStats_list().add(statsByGame);
        statsByGame.getPlayer_id().getStats_list().add(statsByGame);
        return statsByGameRepository.save(statsByGame);
    }

    public Iterable<StatsByGame> getStatsByGames() {
        return statsByGameRepository.findAll();
    }

    public void addBPM(Long id, TreeMap<Double, Double> bpm) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setBpm(bpm);
        statsByGameRepository.save(statsByGame);
    }

    public void addBreathingRate(Long id, TreeMap<Double, Double> breathing_rate) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setBreathing_rate(breathing_rate);
        statsByGameRepository.save(statsByGame);
    }

    public void addSpeed(Long id, TreeMap<Double, Double> speed) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setSpeed(speed);
        statsByGameRepository.save(statsByGame);
    }

    public void addEcg(Long id, TreeMap<Double, Double> ecg) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setEcg(ecg);
        statsByGameRepository.save(statsByGame);
    }
    
    public void setMinutesPlayed(Long id, int minutesPlayed) {
        StatsByGame statsByGame = statsByGameRepository.findById(id).get();
        statsByGame.setMinutes_played(minutesPlayed);
        statsByGameRepository.save(statsByGame);
    }

}
