package com.PASSIT.services;

import com.PASSIT.model.*;
import com.PASSIT.repository.GameRepository;
import com.PASSIT.repository.StatsByGameRepository;
import com.PASSIT.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class TeamService {
    private final TeamRepository teamRepository;
    private final GameRepository gameRepository;
    private final StatsByGameRepository statsByGameRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository, GameRepository gameRepository,
                       StatsByGameRepository statsByGameRepository) {
        this.teamRepository = teamRepository;
        this.gameRepository = gameRepository;
        this.statsByGameRepository = statsByGameRepository;
    }

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }

    public Team getTeam(Long id) {
        return teamRepository.findById(id).get();
    }

    public Team addTeam(Team team) {
        return teamRepository.save(team);
    }

    public List<Player> getPlayers(Long id) {
        return teamRepository.findById(id).get().getPlayers_list();
    }

    public Team findById(Long id) {
        return teamRepository.findById(id).orElse(null);
    }

    public Team updateTeam(Team team) {
        return teamRepository.save(team);
    }

    public void deleteTeam(Long id) {
        teamRepository.deleteById(id);
    }

    public Map<String, Double> statsTeamGame(Long id, Long game_id) {
        Game game = gameRepository.findById(game_id).get();
        Map<String, Double> statsMap = new HashMap<>();
        statsMap.put("bpm", 0.0);
        statsMap.put("speed", 0.0);
        statsMap.put("breathing_rate", 0.0);
        List<Player> players_list = teamRepository.findById(id).get().getPlayers_list();
        for (Player player : players_list) {
            StatsByGame statsByGame = player.getStatsByGame(game);
            statsMap.put("bpm", statsMap.get("bpm") + statsByGame.avgBpm());
            statsMap.put("speed", statsMap.get("speed") + statsByGame.avgSpeed());
            statsMap.put("breathing_rate", statsMap.get("breathing_rate") + statsByGame.avgBreathingRate());
        }
        System.out.println(statsMap);
        statsMap.put("bpm", statsMap.get("bpm") / players_list.size());
        statsMap.put("speed", statsMap.get("speed") / players_list.size());
        statsMap.put("breathing_rate", statsMap.get("breathing_rate") / players_list.size());
        return statsMap;
    }

    public Map<String, Map<Player, Float>> highestPlayerByStat(Long team_id, Long game_id) {
        Map<String, Map<Player, Float>> map = new HashMap<>();
        float bpm = 0;
        float speed = 0;
        Team team = teamRepository.findById(team_id).get();
        Game game = gameRepository.findById(game_id).get();
        List<Player> players_list = team.getPlayers_list();
        for (Player player : players_list) {
            StatsByGame statsByGame = player.getStatsByGame(game);
            if (statsByGame.avgBpm() > bpm) {
                bpm = statsByGame.avgBpm();
                map.put("bpm", Map.of(player, bpm));
            }
            if (statsByGame.avgSpeed() > speed) {
                speed = statsByGame.avgSpeed();
                map.put("speed", Map.of(player, speed));
            }
        }
        return map;
    }

}
