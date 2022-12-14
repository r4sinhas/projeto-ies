package com.PASSIT.model;

import java.lang.reflect.Array;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.MapKeyColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Team")
public class Team {

    private int teamId;
    private String name;
    private String city;
    private String country;
    private int coachId;
    private ArrayList<Integer> players;

   

    public Team() {
    }

    public Team(String name, String city, String country, int coachId,
            ArrayList<Integer> players) {
        this.name = name;
        this.city = city;
        this.country = country;
        this.coachId = coachId;
        this.players = players;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getTeamId() {
        return teamId;
    }

    @Column(name = "Team_name", nullable = false)
    public String getName() {
        return name;
    }

    @Column(name = "City", nullable = false)
    public String getCity() {
        return city;
    }

    @Column(name = "Country", nullable = false)
    public String getCountry() {
        return country;
    }

    @Column(name = "Coach_id", nullable = false)
    public int getCoachId() {
        return coachId;
    }

    @OneToMany
    @JoinTable(name = "Team_Player", joinColumns = @JoinColumn(name = "Team_id"), inverseJoinColumns = @JoinColumn(name = "Player_id"))
    public ArrayList<Integer> getPlayers() {
        return players;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setCoachId(int coachId) {
        this.coachId = coachId;
    }

    public void setPlayers(ArrayList<Integer> players) {
        this.players = players;
    }

    @Override
    public String toString() {
        return "Team{" +
                "teamId=" + teamId +
                ", name='" + name + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                ", coachId=" + coachId +
                ", players=" + players +
                '}';
    }

}
