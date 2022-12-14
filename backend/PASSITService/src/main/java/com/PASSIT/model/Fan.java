package com.PASSIT.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "fan")
public class Fan extends User {

    @OneToMany
    @JoinTable(name = "fan_player", joinColumns = @JoinColumn(name = "fan_id"), inverseJoinColumns = @JoinColumn(name = "player_id"))
    private ArrayList<Player> favoritePlayers;

    public Fan() {
        super();
    }
    
    public Fan(String name, String username, String password, String email, String role,
            ArrayList<Player> favoritePlayers) {
        super(name, username, password, email, role);
        this.favoritePlayers = favoritePlayers;
    }

    public ArrayList<Player> getFavoritePlayers() {
        return favoritePlayers;
    }

    public void setFavoritePlayers(ArrayList<Player> favoritePlayers) {
        this.favoritePlayers = favoritePlayers;
    }

    public void addFavoritePlayer(Player player) {
        this.favoritePlayers.add(player);
    }

    public void removeFavoritePlayer(Player player) {
        this.favoritePlayers.remove(player);
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