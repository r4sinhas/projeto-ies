package com.PASSIT.controller;
import com.PASSIT.model.*;
import com.PASSIT.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.TreeMap;
import java.util.HashMap;

@RestController
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
    public String addStat(@PathVariable("id") Long id, @RequestParam("bpm") List<Double> bpm, @RequestParam("breathing_rate") List<Double> breathing_rate, @RequestParam("speed") List<Double> speed, @RequestParam("ecg") List<List<Double>> ecg, @RequestParam("day") Date day) {
        HashMap<String, TreeMap<Double, Double>> stats = new HashMap<>();
        for (int i = 0; i < bpm.size(); i++) {
            TreeMap<Double, Double> bpmMap = new TreeMap<>();
            bpmMap.put((double) i, bpm.get(i));
            stats.put("bpm", bpmMap);
        }
        for (int i = 0; i < breathing_rate.size(); i++) {
            TreeMap<Double, Double> breathing_rateMap = new TreeMap<>();
            breathing_rateMap.put((double) i, breathing_rate.get(i));
            stats.put("breathing_rate", breathing_rateMap);
        }
        for (int i = 0; i < speed.size(); i++) {
            TreeMap<Double, Double> speedMap = new TreeMap<>();
            speedMap.put((double) i, speed.get(i));
            stats.put("speed", speedMap);
        }
        for (int i = 0; i < ecg.get(0).size(); i++) {
            TreeMap<Double, Double> ecgMap = new TreeMap<>();
            ecgMap.put(ecg.get(0).get(i), ecg.get(1).get(i));
            stats.put("ecg", ecgMap);
        }

        statsByGameService.addToStats(id, stats,day);
        return "New stat ADDED!";
    }

}
