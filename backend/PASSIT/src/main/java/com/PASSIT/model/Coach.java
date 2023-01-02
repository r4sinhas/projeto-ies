package com.PASSIT.model;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

import javax.persistence.*;

@Entity
//@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "coach")
public class Coach {

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
    private String role="coach";

    @OneToOne(cascade = {CascadeType.ALL, CascadeType.DETACH})
    @JoinColumn(name = "team_id", nullable = false)
    @JsonIgnoreProperties({"coach_id", "players_list"})
    private Team team_id;

}
