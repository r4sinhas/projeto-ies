package com.PASSIT.controller;

import com.PASSIT.model.Player;
import com.PASSIT.services.CoachService;
import com.PASSIT.services.FanService;
import com.PASSIT.services.GameService;
import com.PASSIT.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/system")
public class SystemController {
    private final PlayerService playerService;
    private final FanService fanService;
    private final CoachService coachService;

    @Autowired
    public SystemController(PlayerService playerService, FanService fanService, CoachService coachService) {
        this.playerService = playerService;
        this.fanService = fanService;
        this.coachService = coachService;
    }

    @GetMapping("/login/{username}/{password}")
    public String login(@PathVariable("username") String username, @PathVariable("password") String password) {
        if (playerService.login(username, password)) {
            return "Player";
        } else if (fanService.login(username, password)) {
            return "Fan";
        } else if (coachService.login(username, password)) {
            return "Coach";
        } else {
            return null;
        }
    }


}
