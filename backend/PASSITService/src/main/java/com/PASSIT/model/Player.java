package com.PASSIT.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
