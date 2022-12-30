package com.PASSIT.controller;

import com.PASSIT.model.Player;
import com.PASSIT.services.StatsByGameService;
import com.PASSIT.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("api/v1/player")
public class PlayerController {

    private final PlayerService playerService;
    private final StatsByGameService statsByGameService;

    @Autowired
    public PlayerController(PlayerService playerService,
                            StatsByGameService statsByGameService) {
        this.playerService = playerService;
        this.statsByGameService = statsByGameService;
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
    public String remStamina(@PathVariable("id") Long id, @RequestParam("val") double stamina, @RequestParam("day") Date day, @RequestParam("minutes_played") int minutes_played) {
        playerService.remStamina(id, stamina);
        playerService.setMinutesPlayed(id, day, minutes_played);
        
        return "Stamina UPDATED!";
    }

    @GetMapping("/lastgame/{id}")
    public Date getLastGame(@PathVariable("id") Long id) {
        Date d = statsByGameService.getLastGame(id);
        return d;
    }
}
