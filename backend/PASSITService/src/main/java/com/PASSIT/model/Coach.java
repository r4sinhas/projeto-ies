package com.PASSIT.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Coach")
public class Coach extends User {

    @OneToOne
    @JoinColumn(name = "team_id")
    private int teamId;

    public Coach() {
        super();
    }

    public Coach(long id, String name, String username, String password, String email, String role, int teamId) {
        super(id, name, username, password, email, role);
        this.teamId = teamId;
    }

    public Coach(String name, String username, String password, String email, String role, int teamId) {
        super(name, username, password, email, role);
        this.teamId = teamId;
    }

    public int getTeam() {
        return teamId;
    }

    public void setTeam(int teamId) {
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
