package com.PASSIT.controller;

import com.PASSIT.model.Player;
import com.PASSIT.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/player")
public class StudentController {

    private final PlayerService playerService;

    @Autowired
    public StudentController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers() {
        return playerService.getPlayers();
     }
}
