package com.PASSIT.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;


@Entity
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

    @ManyToMany()
    @JoinColumn(name = "teams_list", nullable = false)
    private List<Team> teams_list;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "stats_list")
    private List<StatsByGame> stats_list = new ArrayList<>();

    public void addStatsByGame(StatsByGame stats) {
        this.stats_list.add(stats);
    }
}

