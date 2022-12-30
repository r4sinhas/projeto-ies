package com.PASSIT.repository;
import com.PASSIT.model.StatsByGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatsByGameRepository extends JpaRepository<StatsByGame, Long> {
}
