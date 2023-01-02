package com.PASSIT.controller;

import com.PASSIT.model.Player;
import com.PASSIT.model.Team;
import com.PASSIT.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
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

    @GetMapping("/stats_team_game/{id}/{game}")
    public Map<String,Double> statsTeamGame(@PathVariable("id") Long id, @PathVariable("game") Long game) {
        return teamService.statsTeamGame(id, game);
    }

    @GetMapping("/highest_player_stat/{id}/{stat}")
    public Player highestPlayerByStat(@PathVariable("id") Long id, @PathVariable("stat") String stat) {
        return teamService.highestPlayerByStat(id, stat);
    }
}