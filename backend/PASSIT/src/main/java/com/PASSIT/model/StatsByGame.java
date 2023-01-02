package com.PASSIT.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "stats_by_game")
public class StatsByGame {

    // Connect statsByGame to a Player
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "player", nullable = false)
    private long player;

    @Column(name = "game", nullable = false)
    private long game;

    @ManyToOne
    @JoinColumn(name = "game_id")
    @JsonIdentityReference(alwaysAsId = true)
    private Game game_id;

    @ManyToOne
    @JoinColumn(name = "player_id")
    @JsonIdentityReference(alwaysAsId = true)
    private Player player_id;

    @Column(name = "minutes_played", nullable = false)
    private int minutes_played;

    @ElementCollection
    @CollectionTable(name = "bpm_values")
    @MapKeyColumn(name = "bpm_time")
    @Column(name = "bpm")
    private Map<Float, Float> bpm = new HashMap<>();

    @ElementCollection
    @CollectionTable(name = "speed_values")
    @MapKeyColumn(name = "speed_time")
    @Column(name = "speed")
    private Map<Float, Float> speed = new HashMap<>();

    @ElementCollection
    @CollectionTable(name = "breathing_rate_values")
    @MapKeyColumn(name = "breathing_rate_time")
    @Column(name = "breathing_rate")
    private Map<Float, Float> breathing_rate = new HashMap<>();

    @ElementCollection
    @CollectionTable(name = "ecg_values")
    @MapKeyColumn(name = "ecg_time")
    @Column(name = "ecg")
    private Map<Float, Float> ecg = new HashMap<>();


    public float avgBpm() {
        float sum = 0;
        for (float bpm : this.bpm.values())
            sum += bpm;
        return Math.round(sum / this.bpm.keySet().size()*10)/10.0f;
    }

    public float avgBreathingRate() {
        float sum = 0;
        for (float breathing_rate : this.breathing_rate.values())
            sum += breathing_rate;
        return Math.round(sum / this.breathing_rate.keySet().size()*10)/10.0f;
    }

    public float avgSpeed() {
        float sum = 0;
        for (float ecg : this.speed.values())
            sum += ecg;
        return Math.round(sum / this.speed.keySet().size()*10)/10.0f;
    }

    public Map<String, Map<Float,Float>> allStats() {
        Map<String, Map<Float,Float>> allStats = new TreeMap<>();
        allStats.put("bpm", this.bpm);
        allStats.put("breathing_rate", this.breathing_rate);
        allStats.put("ecg", this.ecg);
        allStats.put("speed", this.speed);
        return allStats;
    }

    public Map<Float,Float> getLastBpm(float last_sec) {
        return new HashMap<>() {{put(last_sec,bpm.get(last_sec));}};
    }

    public Map<Float,Float> getLastBreathingRate(float last_sec) {
        return new HashMap<>() {{put(last_sec,breathing_rate.get(last_sec));}};
    }

    public Map<Float,Float> getLastSpeed(float last_sec) {
        return new HashMap<>() {{put(last_sec,speed.get(last_sec));}};
    }

    public Map<Float,Float> getLastEcg(float last_sec) {
        return new HashMap<>(ecg.entrySet().stream().filter(e -> e.getKey() >= last_sec).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue)));
    }

}
