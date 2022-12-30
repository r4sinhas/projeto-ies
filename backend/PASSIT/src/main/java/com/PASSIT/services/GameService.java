package com.PASSIT.services;

import com.PASSIT.model.Game;
import com.PASSIT.model.Team;
import com.PASSIT.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public Game addGame(Game game) {
        for (Team team : game.getTeams_list())
            team.getGames_list().add(game);
        return gameRepository.save(game);
    }

    public Game getGameById(Long id) {
        return gameRepository.findById(id).orElse(null);
    }

    public List<Game> getGames() {
        return gameRepository.findAll();
    }

}
