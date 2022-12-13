package com.PASSIT.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "fan")
public class Fan extends User {
    private ArrayList<Integer> favoritePlayers;

    public Fan() {
        super();
    }

    public Fan(long id, String name, String username, String password, String email, String role,
            ArrayList<Integer> favoritePlayers) {
        super(id, name, username, password, email, role);
        this.favoritePlayers = favoritePlayers;
    }

    public Fan(String name, String username, String password, String email, String role,
            ArrayList<Integer> favoritePlayers) {
        super(name, username, password, email, role);
        this.favoritePlayers = favoritePlayers;
    }

    public ArrayList<Integer> getFavoritePlayers() {
        return favoritePlayers;
    }

    public void setFavoritePlayers(ArrayList<Integer> favoritePlayers) {
        this.favoritePlayers = favoritePlayers;
    }

    public void addFavoritePlayer(Integer id_player) {
        this.favoritePlayers.add(id_player);
    }

    public void removeFavoritePlayer(Integer id_player) {
        this.favoritePlayers.remove(id_player);
    }

    @Override
    public String toString() {
        return "Fan{" +
                "id=" + super.getId() +
                ", name=" + super.getName() +
                ", username=" + super.getUsername() +
                ", email=" + super.getEmail() +
                ", favoritePlayers=" + favoritePlayers +
                "}";
    }

}