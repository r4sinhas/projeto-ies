package com.PASSIT.services;

import com.PASSIT.model.Player;
import com.PASSIT.repository.PlayerRepository;
import com.PASSIT.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;
    private final TeamRepository teamRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository,
                         TeamRepository teamRepository) {
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
    }

    public Player savePlayer(Player player) {
        player.setTeam_id(teamRepository.findById(player.getTeam_id().getId()).get());
        player.getTeam_id().getPlayers_list().add(player);
        return playerRepository.save(player);
    }

    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    public Player getPlayerById(Long id) {
        return playerRepository.findById(id).orElse(null);
    }

}
