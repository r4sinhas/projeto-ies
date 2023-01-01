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
    //id do jogo
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "date")
    private Date date;

    @ManyToMany(mappedBy ="games_list")
    private List<Team> teams_list = new ArrayList<>();

    @OneToMany(cascade = {CascadeType.MERGE, CascadeType.REMOVE}, mappedBy = "game_id")
    private List<StatsByGame> stats_list;

    public void addStatsByGame(StatsByGame stats) {
        this.stats_list.add(stats);
    }

}

