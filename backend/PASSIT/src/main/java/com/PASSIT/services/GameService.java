package com.PASSIT.services;

import com.PASSIT.model.Game;
import com.PASSIT.model.Team;
import com.PASSIT.repository.GameRepository;
import com.PASSIT.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;
    private final TeamRepository teamRepository;

    @Autowired
    public GameService(GameRepository gameRepository, TeamRepository teamRepository) {
        this.gameRepository = gameRepository;
        this.teamRepository = teamRepository;
    }

    public Game addGame(Game game) {
        for (Team team : game.getTeams_list()) {
            Team team2 = teamRepository.findById(team.getId()).orElse(null);
            team2.addGame(game);
        }
        return gameRepository.save(game);
    }

    public Game getGameById(Long id) {
        return gameRepository.findById(id).orElse(null);
    }

    public List<Game> getGames() {
        return gameRepository.findAll();
    }

}
