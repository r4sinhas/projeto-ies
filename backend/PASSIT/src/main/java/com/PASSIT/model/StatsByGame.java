package com.PASSIT.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;


@Entity
@Data
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
    @CollectionTable(name="stats_values", joinColumns=@JoinColumn(name="stats_by_game_id"))
    @MapKeyColumn(name="stat_name")
    @Column(name="stat_values")
    private Map<String, TreeMap<Double, Double>> stats_values = new HashMap<>() {{
        put("bpm", new TreeMap<>());
        put("breathing_rate", new TreeMap<>());
        put("egc", new TreeMap<>());
        put("speed", new TreeMap<>());
      }};

    public void setStats_values(HashMap<String, TreeMap<Double, Double>> stats_values) {
        for (String key : stats_values.keySet())
            this.stats_values.get(key).putAll(stats_values.get(key));
    }

}
