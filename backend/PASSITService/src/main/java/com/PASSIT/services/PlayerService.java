package com.PASSIT.services;

import com.PASSIT.model.Player;
import com.PASSIT.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }
}
