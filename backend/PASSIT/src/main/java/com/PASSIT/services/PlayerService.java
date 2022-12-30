package com.PASSIT.services;

import com.PASSIT.model.Player;
import com.PASSIT.model.StatsByGame;
import com.PASSIT.repository.PlayerRepository;
import com.PASSIT.repository.StatsByGameRepository;
import com.PASSIT.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;
    private final StatsByGameRepository statsByGameRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository,
                         TeamRepository teamRepository,
                         StatsByGameRepository statsByGameRepository) {
        this.playerRepository = playerRepository;
        this.statsByGameRepository = statsByGameRepository;
    }

    public Player savePlayer(Player player) {
        player.getTeam_id().getPlayers_list().add(player);
        return playerRepository.save(player);
    }

    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    public Player getPlayerById(Long id) {
        return playerRepository.findById(id).orElse(null);
    }

    public void remStamina(Long id, Double stamina) {
        Player player = playerRepository.findById(id).get();
        player.setStamina(stamina);
        playerRepository.save(player);
    }

    public void setMinutesPlayed(Long id, Date day, int minutesPlayed) {
        for (StatsByGame statsByGame : statsByGameRepository.findAll()) {
            if (statsByGame.getPlayer_id().getId() == id && statsByGame.getGame_id().getDate().compareTo(day) == 0) {
                statsByGame.setMinutes_played(minutesPlayed);
                statsByGameRepository.save(statsByGame);
                break;
            }
        }
    }

}
