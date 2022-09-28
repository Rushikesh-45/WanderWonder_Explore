package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.VehicleDTO;
import com.app.pojos.Vehicle;

public interface IVehicleService {
	
	 List<VehicleDTO> getAllListedVehicles();

	List<VehicleDTO> getAllListedVehiclesByTravelAgency(int id);

	Vehicle addNewVehicle(int id, @Valid VehicleDTO vehDto);

	List<VehicleDTO> getVehiclesBySegment(String segment);

	List<Vehicle> getVehiclesWithDriver();

	List<Vehicle> getVehiclesWithoutDriver();

	String deleteVehicle(int id);
}
