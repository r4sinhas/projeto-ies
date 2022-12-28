package com.PASSIT.repository;

import com.PASSIT.model.Coach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoachRepository  extends JpaRepository<Coach, Long> {
    
}
