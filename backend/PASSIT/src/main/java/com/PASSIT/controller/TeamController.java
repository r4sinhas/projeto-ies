package com.PASSIT.controller;

import com.PASSIT.model.Player;
import com.PASSIT.model.Team;
import com.PASSIT.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/team")
public class TeamController {
    private final TeamService teamService;

    @Autowired
    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PostMapping("/add")
    public String add(@RequestBody Team team) {
        teamService.addTeam(team);
        return "New team ADDED!";
    }

    @GetMapping("/all")
    public List<Team> getTeams() {
        return teamService.getTeams();
    }

    @GetMapping("/{id}")
    public Team getTeamById(@PathVariable("id") Long id) {
        return teamService.getTeam(id);
    }

    @GetMapping("/{id}/players")
    public List<Player> getPlayers(@PathVariable("id") Long id) {
        return teamService.getPlayers(id);
    }
}