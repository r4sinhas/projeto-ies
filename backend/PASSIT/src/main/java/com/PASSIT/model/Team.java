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
    private Long id;

    @Column(name = "teamName", nullable = false)
    private String teamName;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "country", nullable = false)
    private String country;

    // connect team to coach
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "coach_id")
    private Coach coach_id;

    // connect team to players
    @JsonIgnore
    @OneToMany()
    @JoinColumn(name = "player_list")
    private List<Player> players = new ArrayList<>();

    @ManyToMany
    @JoinColumn(name = "games_list")
    private List<Game> game_id = new ArrayList<>();

}
