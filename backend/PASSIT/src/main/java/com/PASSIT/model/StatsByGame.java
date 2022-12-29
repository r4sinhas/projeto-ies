package com.PASSIT.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
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

    @OneToOne()
    @JoinColumn(name = "player_id", nullable = false)
    private Player player_id;

    //map with keys heart_rate,breathing_rate,wgc,speed... and values are a list with a map with time:value
    @ElementCollection
    @CollectionTable(name = "stats", joinColumns = @JoinColumn(name = "id"))
    @MapKeyColumn(name = "stat_name")
    @Column(name = "stat_value")
    private Map<String, ArrayList<Map<String, Double>>> stats = new HashMap<>();

    @Column(name = "minutes_played")
    private int minutesPlayed=0;

}
