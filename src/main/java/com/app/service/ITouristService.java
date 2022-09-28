package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.AuthRequestDTO;
import com.app.dto.TouristDTO;
import com.app.dto.UserRegResponse;
import com.app.pojos.Tourist;

public interface ITouristService {
//get all employee
//	List<Tourist> getAllEmployees();
	// save new emp details
	Tourist saveEmployeeDetails(@Valid TouristDTO tDto); 
	String deleteById(int empId);
	//get emp details by id
	TouristDTO getEmpDetails(int touristId);
	//update existing emp 
	Tourist updateTouristDetails(int id, TouristDTO touristDto);
	AuthRequestDTO getByEmailPassword(String email, String password);
	List<Tourist> getAllTourists();
	UserRegResponse registerTourist(@Valid TouristDTO tDto);
	TouristDTO findByEmail(String email);
}
