package com.PASSIT.model;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

// id de cada equipa
@Entity
@Table(name = "game")
public class Game {

    // Id do jogo

    private int id;
    // Id da equipa da casa
    private int homeTeamId;
    // Id da equipa visitante
    private int awayTeamId;

    public Game() {
    }

    public Game(int homeTeamId, int awayTeamId) {
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    @Column(name = "homeTeamId", nullable = false)
    public int getHomeTeamId() {
        return homeTeamId;
    }

    @Column(name = "awayTeamId", nullable = false)
    public int getAwayTeamId() {
        return awayTeamId;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setHomeTeamId(int homeTeamId) {
        this.homeTeamId = homeTeamId;
    }

    public void setAwayTeamId(int awayTeamId) {
        this.awayTeamId = awayTeamId;
    }

    @Override
    public String toString() {
        return "Game [id=" + id + ", homeTeamId=" + homeTeamId + ", awayTeamId=" + awayTeamId + "]";
    }

}
