package com.PASSIT.services;

import com.PASSIT.model.StatsByGame;
import com.PASSIT.repository.StatsByGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatsByGameService {


    private  StatsByGameRepository statsByGameRepository;

    @Autowired
    public StatsByGameService(StatsByGameRepository statsByGameRepository) {
        this.statsByGameRepository = statsByGameRepository;
    }

    public void saveStatsByGame(StatsByGame statsByGame) {
        statsByGameRepository.save(statsByGame);
    }

    public Iterable<StatsByGame> getStatsByGames() {
        return statsByGameRepository.findAll();
    }



}
