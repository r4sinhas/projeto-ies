package com.PASSIT.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Users")
public class User {
    @Id
    private long id;
    private String name;
    private String username;
    private String password;
    private String email;
    private String role;

    public User() {

    }

    public User(long id, String name, String username, String password, String email, String role) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public User(String name, String username, String password, String email, String role) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getRole() {
        return role;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
