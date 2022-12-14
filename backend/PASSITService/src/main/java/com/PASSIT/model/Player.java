package com.PASSIT.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.MapKeyColumn;
import javax.persistence.MapKeyJoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "player")
public class Player extends User {
    private String position;

    @OneToOne
    @JoinColumn(name = "team_id")
    private int teamId;
    private int age;
    private int height;
    private int weight;
    private int number;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "statsByGame", joinColumns = @JoinColumn(name = "player_id"), inverseJoinColumns = @JoinColumn(name = "stats_id"))
    @MapKeyJoinColumn(name = "seller_id")
    private Map<Integer, ArrayList<TreeMap<String, ArrayList<TreeMap<Double, Double>>>>> stats = new HashMap<>();
    // jogoID ~ish (just a number to sort the games)
    // 1 : { ["heartRate" : [ { 0.0012 : 90 }, { 0.23 : 76 }, { 1.230 : 104 } ] }],
    // "o2 levels2 : [{ 0.01231 : 123123}]]},
    // 2 : { ["heartRate" : [ { 0.0 : 0.0 }, { 1.0 : 1.0 }, { 2.0 : 2.0 }], "o2
    // levels2 : [{ 0.01231 : 123123}], ...

    public Player() {
        super();
    }

    public Player(String name, String username, String password, String email, String role, String position,
            int teamId, int age, int height, int weight, int number) {
        super(name, username, password, email, role);
        this.position = position;
        this.teamId = teamId;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.number = number;
    }

    public String getName() {
        return super.getName();
    }

    public String getPosition() {
        return position;
    }

    public int getTeam() {
        return teamId;
    }

    public int getAge() {
        return age;
    }

    public int getHeight() {
        return height;
    }

    public int getWeight() {
        return weight;
    }

    public int getNumber() {
        return number;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setTeam(int teamId) {
        this.teamId = teamId;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + super.getId() +
                ", name='" + super.getName() + '\'' +
                ", position='" + position + '\'' +
                ", age=" + age +
                ", height=" + height +
                ", weight=" + weight +
                ", number=" + number +
                ", team='" + teamId + '\'' +
                '}';
    }
}
