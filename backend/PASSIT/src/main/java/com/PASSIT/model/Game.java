package com.PASSIT.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data
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
    private List<Team> teams;

    @OneToMany()
    @JoinColumn(name = "stats_list")
    private List<StatsByGame> stats = new ArrayList<>();
}

