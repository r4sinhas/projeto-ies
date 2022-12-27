package com.PASSIT.services;

import com.PASSIT.model.Game;
import com.PASSIT.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService {

    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public void addGame(Game game) {
        gameRepository.save(game);
    }

    public Game getGameById(Long id) {
        return gameRepository.findById(id).orElse(null);
    }

}
