package com.PASSIT.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.TreeMap;
import java.util.Map;


@Entity
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

    @ManyToOne()
    @JoinColumn(name = "game_id", nullable = false)
    private Game game_id;

    @ManyToOne()
    @JoinColumn(name = "player_id", nullable = false)
    private Player player_id;

    @Column(name = "minutes_played")
    private int minutes_played = 0;

    @ElementCollection
    @CollectionTable(name = "bpm_values")
    @MapKeyColumn(name = "bpm_time")
    @Column(name = "bpm")
    private Map<Double, Double> bpm = new TreeMap<>();

    @ElementCollection
    @CollectionTable(name = "breathing_rate_values")
    @MapKeyColumn(name = "breathing_rate_time")
    @Column(name = "breathing_rate")
    private Map<Double, Double> breathing_rate = new TreeMap<>();

    @ElementCollection
    @CollectionTable(name = "ecg_values")
    @MapKeyColumn(name = "ecg_time")
    @Column(name = "ecg")
    private Map<Double, Double> ecg = new TreeMap<>();

    @ElementCollection
    @CollectionTable(name = "speed_values")
    @MapKeyColumn(name = "speed_time")
    @Column(name = "speed")
    private Map<Double, Double> speed = new TreeMap<>();


    public void setBpm(TreeMap<Double, Double> bpm_map) {
        this.bpm.putAll(bpm_map);
    }

    public void setBreathing_rate(TreeMap<Double, Double> breathing_rate_map) {
        this.breathing_rate.putAll(breathing_rate_map);
    }

    public void setEcg(TreeMap<Double, Double> ecg_map) {
        this.ecg.putAll(ecg_map);
    }

    public void setSpeed(TreeMap<Double, Double> speed_map) {
        this.speed.putAll(speed_map);
    }

    public Double getAvgBpm() {
        Double sum = 0.0;
        for (Double bpm : this.bpm.values())
            sum += bpm;
        return sum / this.bpm.size();
    }

    public Double getAvgBreathingRate() {
        Double sum = 0.0;
        for (Double breathing_rate : this.breathing_rate.values())
            sum += breathing_rate;
        return sum / this.breathing_rate.size();
    }

    public Double getAvgSpeed() {
        Double sum = 0.0;
        for (Double ecg : this.speed.values())
            sum += ecg;
        return sum / this.speed.size();
    }

    public Map<String, Map<Double,Double>> getAllStats() {
        Map<String, Map<Double,Double>> allStats = new TreeMap<>();
        allStats.put("bpm", this.bpm);
        allStats.put("breathing_rate", this.breathing_rate);
        allStats.put("ecg", this.ecg);
        allStats.put("speed", this.speed);
        return allStats;
    }
}
