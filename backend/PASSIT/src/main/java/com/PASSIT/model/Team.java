package com.PASSIT.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.*;

import javax.persistence.*;

@Entity
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

    // connect team to coach
    @OneToOne(mappedBy = "team_id")
    private Coach coach_id;

    // connect team to players
    @JsonManagedReference
    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "players_list")
    private List<Player> players_list = new ArrayList<>();

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "games_list", referencedColumnName = "id")
    private List<Game> games_list = new ArrayList<>();

    public void addPlayer(Player player) {
        players_list.add(player);
    }

    public void addGame(Game game) {
        games_list.add(game);
    }

}
