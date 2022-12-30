package com.PASSIT.controller;



import com.PASSIT.model.Fan;
import com.PASSIT.services.FanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/fan")
public class FanController {

        private final FanService fanService;

        @Autowired
        public FanController(FanService fanService) {
            this.fanService = fanService;
        }

        @PostMapping("/add")
        public String add(@RequestBody Fan fan) {
            fanService.addFan(fan);
            return "New fan ADDED!";
        }

        @GetMapping("/all")
        public List<Fan> getFans() {
            return fanService.getFans();
        }

        @GetMapping("/{id}")
        public Fan getFanById(@PathVariable("id") Long id) {
            return fanService.getFan(id);
        }

        @PostMapping("/{id}/addFavoritePlayer/{idPlayer}")
        public String addFavoritePlayer(@PathVariable("id") Long id, @PathVariable("idPlayer") Long idPlayer) {
            fanService.addFavoritePlayer(id, idPlayer);
            return "New favorite player ADDED!";
        }

}
