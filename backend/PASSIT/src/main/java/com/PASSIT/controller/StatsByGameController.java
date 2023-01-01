package com.PASSIT.controller;
import com.PASSIT.model.*;
import com.PASSIT.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/statsbygame")
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

    @PutMapping("/addstat/{id}")
    public String addStat(@PathVariable("id") Long id, @RequestParam("bpm") List<Double> bpm,
            @RequestParam("breathing_rate") List<Double> breathing_rate, @RequestParam("speed") List<Double> speed,
            @RequestParam("ecg") List<Double> ecg, @RequestParam("t") List<Double> t) {

        TreeMap<Double, Double> bpmMap = new TreeMap<>();
        TreeMap<Double, Double> breathing_rateMap = new TreeMap<>();
        TreeMap<Double, Double> speedMap = new TreeMap<>();
        TreeMap<Double, Double> ecgMap = new TreeMap<>();

        for (int i = 0; i < bpm.size(); i++)
            bpmMap.put((double) i, bpm.get(i));

        for (int i = 0; i < breathing_rate.size(); i++)
            breathing_rateMap.put((double) i, breathing_rate.get(i));

        for (int i = 0; i < speed.size(); i++)
            speedMap.put((double) i, speed.get(i));

        for (int i = 0; i < ecg.size(); i++)
            ecgMap.put(t.get(i), ecg.get(i));

        List<TreeMap<Double,Double>> stats = new ArrayList<>();
        stats.add(bpmMap);
        stats.add(breathing_rateMap);
        stats.add(speedMap);
        stats.add(ecgMap);

        statsByGameService.addStats(id, stats);
        
        return "New stat ADDED!";
    }
    
    @PutMapping("/minutesplayed/{id}")
    public String setMinutesPlayed(@PathVariable("id") Long id, @RequestParam("minutes_played") int minutes_played) {
        statsByGameService.setMinutesPlayed(id, minutes_played);
        return "Minutes played UPDATED!";
    }

}
