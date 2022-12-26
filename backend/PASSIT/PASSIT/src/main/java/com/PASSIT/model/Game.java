package com.PASSIT.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.annotation.Generated;
import javax.persistence.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Game")
public class Game {
    //id do jogo
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //id da equipa 1
    @ManyToOne()
    @JoinColumn(name = "team1", nullable = false)
    private Team team1;

    //id da equipa 2
    @ManyToOne()
    @JoinColumn(name = "team2", nullable = false)
    private Team team2;
}

