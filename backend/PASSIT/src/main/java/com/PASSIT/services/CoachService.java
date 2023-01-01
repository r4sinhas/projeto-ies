package com.PASSIT.services;

import com.PASSIT.model.Coach;
import com.PASSIT.model.Team;
import com.PASSIT.repository.CoachRepository;
import com.PASSIT.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoachService {

    private final CoachRepository coachRepository;
    private final TeamRepository teamRepository;

    @Autowired
    public CoachService(CoachRepository coachRepository, TeamRepository teamRepository) {
        this.coachRepository = coachRepository;
        this.teamRepository = teamRepository;
    }

    public Coach saveCoach(Coach coach) {
        Team team = teamRepository.findById(coach.getTeam_id().getId()).orElse(null);
        coach.setTeam_id(team);
        return coachRepository.save(coach);
    }

    public Coach getCoach(Long id) {
        return coachRepository.findById(id).get();
    }

    public List<Coach> getCoaches() {
        return coachRepository.findAll();
    }

    public Coach getCoachById(Long id) {
        return coachRepository.findById(id).orElse(null);
    }

}
