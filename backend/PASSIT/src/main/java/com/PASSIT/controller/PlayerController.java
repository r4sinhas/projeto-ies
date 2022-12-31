package com.PASSIT.controller;

import com.PASSIT.model.Player;
import com.PASSIT.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/player")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @PostMapping("/add")
    public String add(@RequestBody Player player) {
        playerService.savePlayer(player);
        return "New player ADDED!";
    }

    @GetMapping("/all")
    public List<Player> getPlayers() {
        return playerService.getPlayers();
    }

    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable("id") Long id) {
        return playerService.getPlayerById(id);
    }

    @PutMapping("/remstamina/{id}")
    public String remStamina(@PathVariable("id") Long id, @RequestParam("stamina") Double stamina) {
        playerService.remStamina(id, stamina);
        return "Stamina UPDATED!";
    }

    @GetMapping("/lastgame/{id}")
    public Date getLastGame(@PathVariable("id") Long id) {
        return playerService.getLastGame(id);
    }

    @GetMapping("/stats_user_game/{id}/{game}")
    public Map<String, Double> getStatsUserGame(@PathVariable("id") Long id, @PathVariable("game") Long game) {
        return playerService.getStatsUserGame(id, game);
    }

    @GetMapping("/stats_user_game/{id}")
    public Map<String, Double> getStatsUserGame(@PathVariable("id") Long id) {
        return playerService.getStatsUserGame(id);
    }

}
