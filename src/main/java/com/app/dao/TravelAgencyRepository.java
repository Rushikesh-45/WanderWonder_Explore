package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.TravelAgency;

public interface TravelAgencyRepository extends JpaRepository<TravelAgency, Integer> {

	Optional<TravelAgency> findByEmail(String email);
}
