package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.TravelAgencyDTO;
import com.app.dto.UserRegResponse;
import com.app.pojos.TravelAgency;

public interface ITravelAgencyService {

	TravelAgency saveTravelAgency(@Valid  TravelAgencyDTO agency);

	List<TravelAgencyDTO> getAllAgencies();

	UserRegResponse registerAgency(@Valid TravelAgencyDTO tDto);
	TravelAgencyDTO findByEmail(String email);

	String deleteAgency(int id);
	
}
