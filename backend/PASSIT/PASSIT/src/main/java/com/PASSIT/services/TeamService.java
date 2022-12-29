package com.PASSIT.services;

import com.PASSIT.model.Player;
import com.PASSIT.model.Team;
import com.PASSIT.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TeamService {
    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }

    public Team getTeam(Long id) {
        return teamRepository.findById(id).orElse(null);
    }

    public Team addTeam(Team team) {
        return teamRepository.save(team);
    }

    public List<Player> getPlayers(Long id) {
        return teamRepository.findById(id).get().getPlayers();
    }

    public Team findById(Long id) {
        return teamRepository.findById(id).orElse(null);
    }

    public Team updateTeam(Team team) {
        return teamRepository.save(team);
    }

    public void deleteTeam(Long id) {
        teamRepository.deleteById(id);
    }

}
