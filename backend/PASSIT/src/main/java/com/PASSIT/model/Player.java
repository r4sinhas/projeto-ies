package com.PASSIT.model;

import com.fasterxml.jackson.annotation.*;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
//@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
@Getter
@Setter
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
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
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

    @ManyToOne
    @JoinColumn(name = "team_id", nullable = false)
    @JsonIgnoreProperties({"games_list","players_list", "coach_id"})
    private Team team_id;

    @Column(name = "last_stamina", nullable = false)
    private Double last_stamina;

    @Column(name = "img_url")
    private String img_url = "https://img.a.transfermarkt.technology/portrait/header/default.jpg";

    @OneToMany(cascade = {CascadeType.MERGE, CascadeType.REMOVE}, mappedBy = "player_id")
    @JsonIgnoreProperties({"player_id", "bpm", "speed", "breathing_rate", "ecg", "game_id"})
    private List<StatsByGame> stats_list = new ArrayList<>();
    
    public void setStamina(Double stamina) {
        this.last_stamina = stamina;
    }

    public StatsByGame getStatsByGame(Game game) {
        for (StatsByGame stats : stats_list) {
            if (stats.getGame_id().getId() == game.getId()) {
                return stats;
            }
        }
        return null;
    }

    public void addStatsByGame(StatsByGame stats) {
        stats_list.add(stats);
    }

}
