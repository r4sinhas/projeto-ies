package com.PASSIT.model;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;


@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "game")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "date")
    private Date date;

    @Column(name = "flagLive")
    private boolean flagLive = false;

    @ManyToMany(mappedBy ="games_list")
    private List<Team> teams_list = new ArrayList<>();

    @OneToMany(cascade = {CascadeType.MERGE, CascadeType.REMOVE}, mappedBy = "game_id")
    private List<StatsByGame> stats_list;

    public void addStatsByGame(StatsByGame stats) {
        this.stats_list.add(stats);
    }

    @JsonIgnore
    public List<StatsByGame> getStats_list() {
        return stats_list;
    }

    public boolean getFlagLive() {
        return flagLive;
    }

    public float getAvgBpm() {
        float sum = 0;
        for (StatsByGame stat : stats_list) {
            sum += stat.avgBpm();
        }
        return sum / stats_list.size();
    }

    public float getAvgBreathingRate() {
        float sum = 0;
        for (StatsByGame stat : stats_list) {
            sum += stat.avgBreathingRate();
        }
        return sum / stats_list.size();
    }

    public float getAvgSpeed() {
        float sum = 0;
        for (StatsByGame stat : stats_list) {
            sum += stat.avgSpeed();
        }
        return sum / stats_list.size();
    }

}

