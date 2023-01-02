package com.PASSIT.model;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.List;

import java.util.ArrayList;

import javax.persistence.*;

@Entity
//@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "fan")
public class Fan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "role")
    private String role="FAN";

    @ManyToMany(cascade = {CascadeType.ALL, CascadeType.DETACH})
    @JoinTable(name = "fav_players", joinColumns = @JoinColumn(name = "fan_id"), inverseJoinColumns = @JoinColumn(name = "player_id"))
    @JsonIgnoreProperties({"stats_list","username","password","email","team_id","last_stamina"})
    private List<Player>fav_players = new ArrayList<>();

}