package com.PASSIT.services;

import com.PASSIT.model.Fan;
import com.PASSIT.model.Player;
import com.PASSIT.repository.FanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FanService {


    private final FanRepository fanRepository;
    private final PlayerService playerService;

    @Autowired
    public FanService(FanRepository fanRepository, PlayerService playerService) {
        this.fanRepository = fanRepository;
        this.playerService = playerService;
    }
    public Fan addFan(Fan fan) {
        return fanRepository.save(fan);

    }
    public List<Fan> getFans() {
        return fanRepository.findAll();
    }

    public Fan getFan(Long id) {
        return fanRepository.findById(id).orElse(null);
    }

    public void addFavoritePlayer(Long id, Long idPlayer) {
        Fan fan = fanRepository.findById(id).orElse(null);
        Player player = playerService.getPlayerById(idPlayer);
        fan.getFav_players().add(player);
        fanRepository.save(fan);
    }

    public void removeFavoritePlayer(Long fan, Long player) {
        Fan fan1 = fanRepository.findById(fan).orElse(null);
        Player player1 = playerService.getPlayerById(player);
        fan1.getFav_players().remove(player1);
        fanRepository.save(fan1);
    }

    public boolean login(String username, String password) {
        for (Fan fan : fanRepository.findAll()) {
            if (fan.getUsername().equals(username) && fan.getPassword().equals(password))
                return true;
        }
        return false;
    }
}
