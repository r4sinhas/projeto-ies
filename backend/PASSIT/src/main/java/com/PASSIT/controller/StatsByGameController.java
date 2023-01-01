package com.PASSIT.controller;
import com.PASSIT.model.*;
import com.PASSIT.services.*;
import com.sun.source.tree.Tree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

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

    @PutMapping("/addstats/{id}")
    public void addStat(@PathVariable("id") Long id, @RequestParam("bpm") List<Float> bpm,
            @RequestParam("breathing_rate") List<Float> breathing_rate, @RequestParam("speed") List<Float> speed,
            @RequestParam("ecg") List<Float> ecg, @RequestParam("t") List<Float> t, @RequestParam("minutes_played") int minutes_played) {

        statsByGameService.addStats(id, new TreeMap[] {
                new TreeMap<>(IntStream.range(0, bpm.size()).boxed().collect(Collectors.toMap(i -> (float) i, bpm::get))),
                new TreeMap<>(IntStream.range(0, breathing_rate.size()).boxed().collect(Collectors.toMap(i -> (float) i, breathing_rate::get))),
                new TreeMap<>(IntStream.range(0, speed.size()).boxed().collect(Collectors.toMap(i -> (float) i, speed::get))),
                IntStream.range(0, t.size()).boxed().collect(Collectors.toMap(t::get, ecg::get, (k, v) -> v, TreeMap::new))
        }, minutes_played);
        
        System.out.println("Stats ADDED!");
    }

    @GetMapping("/getstats/{id}")
    public Map<String, Map<Float, Float>> getStatsByGame(@PathVariable("id") Long id) {
        return statsByGameService.getStatsByGame(id);
    }

    @PutMapping("/minutesplayed/{id}")
    public void setMinutesPlayed(@PathVariable("id") Long id, @RequestParam("minutes_played") int minutes_played) {
        statsByGameService.setMinutesPlayed(id, minutes_played);
        System.out.println("Minutes played UPDATED!");
    }

    @GetMapping("/live/getstats/{id}")
    public Map<String, TreeMap<Float, Float>> getStatsByGameLive(@PathVariable("id") Long id) {
        return statsByGameService.getStatsByGameLive(id);
    }

    @PutMapping("/live/addstats/{id}")
    public void addStatsLive(@PathVariable("id") Long id, @RequestParam("bpm") float bpm,
            @RequestParam("breathing_rate") float breathing_rate, @RequestParam("speed") float speed,
            @RequestParam("ecg") List<Float> ecg, @RequestParam("t") List<Float> t, @RequestParam("time") float time) {
        TreeMap<Float, Float> ecgMap = new TreeMap<>();
        for (int i = 0; i < t.size(); i++) {
            ecgMap.put(t.get(i), ecg.get(i));
        }
        statsByGameService.addStatsLive(id, bpm, breathing_rate, speed, ecgMap, time);
        System.out.println("Stats Live ADDED!");
    }
}
