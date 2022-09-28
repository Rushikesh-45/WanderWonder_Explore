package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;

import com.app.pojos.Segment;
import com.app.pojos.TravelAgency;
import com.app.pojos.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {

//	@Query("select v from Vehicle v where v." )
	List<Vehicle> findByAgency(TravelAgency agency);
	
	 List<Vehicle> findBySegment(Segment segment);
	 
//	 @Procedure(name = "Car.getTotalCardsbyModelEntity")
//	 int getTotalCarsByModelEntiy(@Param("model_in") String model);
	 @Procedure 
	 List<Vehicle> SelectVehiclesWithDriver();
	 @Procedure 
	 List<Vehicle> SelectVehiclesWithoutDriver();
}
