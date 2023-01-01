package com.PASSIT.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.source.tree.Tree;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.TreeMap;
import java.util.Map;
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
    private Game game_id;

    @ManyToOne
    @JoinColumn(name = "player_id")
    private Player player_id;

    @Column(name = "minutes_played", nullable = false)
    private int minutes_played;

    @ElementCollection
    @CollectionTable(name = "bpm_values")
    @MapKeyColumn(name = "bpm_time")
    @Column(name = "bpm")
    private Map<Float, Float> bpm = new TreeMap<>();

    @ElementCollection
    @CollectionTable(name = "speed_values")
    @MapKeyColumn(name = "speed_time")
    @Column(name = "speed")
    private Map<Float, Float> speed = new TreeMap<>();

    @ElementCollection
    @CollectionTable(name = "breathing_rate_values")
    @MapKeyColumn(name = "breathing_rate_time")
    @Column(name = "breathing_rate")
    private Map<Float, Float> breathing_rate = new TreeMap<>();

    @ElementCollection
    @CollectionTable(name = "ecg_values")
    @MapKeyColumn(name = "ecg_time")
    @Column(name = "ecg")
    private Map<Float, Float> ecg = new TreeMap<>();


    public float avgBpm() {
        float sum = 0;
        for (float bpm : this.bpm.values())
            sum += bpm;
        return sum / this.bpm.keySet().size();
    }

    public Float avgBreathingRate() {
        float sum = 0;
        for (Float breathing_rate : this.breathing_rate.values())
            sum += breathing_rate;
        return sum / this.breathing_rate.keySet().size();
    }

    public Float avgSpeed() {
        float sum = 0;
        for (Float ecg : this.speed.values())
            sum += ecg;
        return sum / this.speed.keySet().size();
    }

    public Map<String, Map<Float,Float>> allStats() {
        Map<String, Map<Float,Float>> allStats = new TreeMap<>();
        allStats.put("bpm", this.bpm);
        allStats.put("breathing_rate", this.breathing_rate);
        allStats.put("ecg", this.ecg);
        allStats.put("speed", this.speed);
        return allStats;
    }

    public TreeMap<Float,Float> getLastBpm(float last_sec) {
        return new TreeMap<>() {{put(last_sec,bpm.get(last_sec));}};
    }

    public TreeMap<Float,Float> getLastBreathingRate(float last_sec) {
        return new TreeMap<>() {{put(last_sec,breathing_rate.get(last_sec));}};
    }

    public TreeMap<Float,Float> getLastSpeed(float last_sec) {
        return new TreeMap<>() {{put(last_sec,speed.get(last_sec));}};
    }

    public TreeMap<Float,Float> getLastEcg(float last_sec) {
        return new TreeMap<>(ecg.entrySet().stream().filter(e -> e.getKey() >= last_sec).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue)));
    }


    @JsonIgnore
    public Player getPlayer_id() {
        return player_id;
    }

    @JsonIgnore
    public Game getGame_id() {
        return game_id;
    }
}
