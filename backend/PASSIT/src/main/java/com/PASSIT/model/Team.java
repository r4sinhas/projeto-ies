package com.PASSIT.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "team")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "team_name", nullable = false)
    private String team_name;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "country", nullable = false)
    private String country;

    // connect team to coach

    @OneToOne
    @JoinColumn(name = "coach_id")
    private Coach coach_id;

    // connect team to players

    @OneToMany()
    @JoinColumn(name = "players_list")
    private List<Player> players_list = new ArrayList<>();

    @ManyToMany
    @JoinColumn(name = "games_list")
    private List<Game> games_list = new ArrayList<>();

}
