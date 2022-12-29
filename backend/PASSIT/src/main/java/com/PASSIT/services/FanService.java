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
}
