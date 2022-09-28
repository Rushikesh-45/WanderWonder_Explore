package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Tourist;

public interface TouristRepository extends JpaRepository<Tourist, Integer> {

	
	Optional<Tourist> findByEmailAndPassword(String email, String password);

	Optional<Tourist> findByEmail(String email);
}
