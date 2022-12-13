package com.PASSIT.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Team")
public class Team {

    private int id;
    private String teamName;

    public Team() {
    }

    public Team(int id, String teamName) {
        this.id = id;
        this.teamName = teamName;
    }

    public Team(String teamName) {
        this.teamName = teamName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", teamName='" + teamName + '\'' +
                '}';
    }

}
