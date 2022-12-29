package com.PASSIT.services;

import com.PASSIT.model.Coach;
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
    public CoachService(CoachRepository coachRepository,
                        TeamRepository teamRepository) {
        this.coachRepository = coachRepository;
        this.teamRepository = teamRepository;
    }


    public Coach saveCoach(Coach coach) {
        coach.setTeam_id(teamRepository.findById(coach.getTeam_id().getId()).get());
        coach.getTeam_id().setCoach_id(coach);
        return coachRepository.save(coach);
    }

    public List<Coach> getCoaches() {
        return coachRepository.findAll();
    }

    public Coach getCoachById(Long id) {
        return coachRepository.findById(id).orElse(null);
    }

}
