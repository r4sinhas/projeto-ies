package com.PASSIT.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.*;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
@Getter
@Setter
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

    @OneToOne(mappedBy="team_id")
    @JsonIdentityReference(alwaysAsId = true)
    private Coach coach_id;

    @ManyToMany(cascade = {CascadeType.ALL, CascadeType.DETACH})
    @JoinTable(name = "games_list", joinColumns = @JoinColumn(name = "team_id"), inverseJoinColumns = @JoinColumn(name = "game_id"))
    private List<Game> games_list = new ArrayList<>();

    @OneToMany(cascade = {CascadeType.ALL, CascadeType.DETACH}, mappedBy = "team_id")
    private List<Player> players_list = new ArrayList<>();

    public void addPlayer(Player player) {
        players_list.add(player);
    }

    public void addGame(Game game) {
        games_list.add(game);
    }

}
