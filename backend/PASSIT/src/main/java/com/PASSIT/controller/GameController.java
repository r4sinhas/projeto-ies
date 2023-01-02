package com.PASSIT.controller;

import com.PASSIT.model.Game;
import com.PASSIT.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/game")
public class GameController {
    private final GameService gameService;
    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping("/add")
    public String add(@RequestBody Game game) {
        gameService.addGame(game);
        return "New Game ADDED!";
    }

    @GetMapping("{id}")
    public Game getGameById(@PathVariable Long id) {
        return gameService.getGameById(id);
    }

    @GetMapping("/all")
    public List<Game> getGames() {
        return gameService.getGames();
    }

}
