package com.PASSIT.controller;

import com.PASSIT.model.Coach;
import com.PASSIT.services.CoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/coach")
public class CoachController {
    private final CoachService coachService;

    @Autowired
    public CoachController(CoachService coachService) {
        this.coachService = coachService;
    }

    @PostMapping("/add")
    public String add(@RequestBody Coach coach) {
        coachService.saveCoach(coach);
        return "New coach ADDED!";
    }

    @GetMapping("/{id}")
    public Coach getCoach(@PathVariable Long id) {
        return coachService.getCoach(id);
    }

    @GetMapping("/all")
    public List<Coach> getCoaches() {
        return coachService.getCoaches();
    }
}
