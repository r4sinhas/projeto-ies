package com.PASSIT.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.List;

import java.util.ArrayList;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
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
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "role")
    private String role="FAN";

    @ManyToMany(cascade = {CascadeType.ALL, CascadeType.DETACH})
    @JoinTable(name = "fav_players", joinColumns = @JoinColumn(name = "fan_id"), inverseJoinColumns = @JoinColumn(name = "player_id"))
    private List<Player>fav_players = new ArrayList<>();

    public String getPassword() {
        return null;
    }

    public String password() {
        return password;
    }
}