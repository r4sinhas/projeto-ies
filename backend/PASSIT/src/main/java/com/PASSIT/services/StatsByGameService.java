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

    private StatsByGameRepository statsByGameRepository;

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

    public void addToStats(Long id, HashMap<String, TreeMap<Double, Double>> stats, Date day) {
        for (StatsByGame statsByGame : statsByGameRepository.findAll()) {
            if (statsByGame.getPlayer_id().getId() == id && statsByGame.getGame_id().getDate().compareTo(day) == 0) {
                statsByGame.setStats_values(stats);
                statsByGameRepository.save(statsByGame);
                break;
            }
        }
    }

    public Date getLastGame(Long id) {
        Date date = new Date(0);
        for (StatsByGame statsByGame : statsByGameRepository.findAll()) {
            if (statsByGame.getPlayer_id().getId() == id) {
                if (date.compareTo(statsByGame.getGame_id().getDate()) < 0)
                    date = statsByGame.getGame_id().getDate();
            }
        }
        return date;
    }

}
