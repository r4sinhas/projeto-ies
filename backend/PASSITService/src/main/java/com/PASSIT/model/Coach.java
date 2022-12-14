package com.PASSIT.model;

import java.lang.reflect.Array;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Coach")
public class Coach extends User {

    @OneToOne
    private int teamId;

    public Coach() {
        super();
    }

    public Coach(String name, String username, String password, String email, String role,
            int teamId) {
        super(name, username, password, email, role);
        this.teamId = teamId;
    }

    @Override
    public String toString() {
        return "Coach{" +
                "id=" + super.getId() +
                ", name=" + super.getName() +
                ", username=" + super.getUsername() +
                ", email=" + super.getEmail() +
                ", team=" + teamId +
                "}";
    }
}
