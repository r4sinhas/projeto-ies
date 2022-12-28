package com.PASSIT.controller;
import com.PASSIT.model.*;
import com.PASSIT.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/statsByGame")
public class StatsByGameController {
    private final StatsByGameService statsByGameService;

    @Autowired
    public StatsByGameController(StatsByGameService statsByGameService) {
        this.statsByGameService = statsByGameService;
    }
    @PostMapping("/add")
    public String add(@RequestBody StatsByGame statsByGame) {
        statsByGameService.saveStatsByGame(statsByGame);
        return "New statsByGame ADDED!";
    }
    @GetMapping("/all")
    public List<StatsByGame> getStatsByGames() {
        return (List<StatsByGame>) statsByGameService.getStatsByGames();
    }

}
