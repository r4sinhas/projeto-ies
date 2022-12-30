package com.PASSIT.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "player")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "role")
    private String role = "player";

    @Column(name = "position", nullable = false)
    private String position;

    @Column(name = "age", nullable = false)
    private int age;

    @Column(name = "height", nullable = false)
    private int height;

    @Column(name = "weight", nullable = false)
    private Double weight;

    @Column(name = "number", nullable = false)
    private int number;

    // Connect player to a Team
    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team_id;

    @Column(name = "last_stamina", nullable = false)
    private float last_stamina;

    @Column(name = "img_url")
    private String img_url = "https://img.a.transfermarkt.technology/portrait/header/default.jpg";

}
