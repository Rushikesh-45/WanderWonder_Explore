package com.app.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.TravelAgencyDTO;
import com.app.pojos.TravelAgency;
import com.app.service.ITravelAgencyService;
import com.app.service.ImageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/travel_agency") // from react FE
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class TravelAgencyController {
	@Autowired
	private ITravelAgencyService agencyService;
	@Autowired
	private ImageService imageService;

	@GetMapping
	public ResponseEntity<?> getAllAgencies(){
		List<TravelAgencyDTO> list = agencyService.getAllAgencies();
		if (list.isEmpty())
			return new ResponseEntity<>("emp list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<TravelAgency> saveTravelAgency(@PathVariable int id, @RequestParam(required = true, value = "file") MultipartFile imageFile,
			@RequestParam(required = true, value = "jsondata") String jsonagency) throws IOException {
		System.out.println("in save emp " + jsonagency); // all args except id
//		return ResponseEntity.ok(touristService.saveEmployeeDetails(emp));
		ObjectMapper objectmap=new ObjectMapper();
		TravelAgencyDTO agency = objectmap.readValue(jsonagency, TravelAgencyDTO.class);
		agency.setImagePath(imageService.storeImage(imageFile));
		return new ResponseEntity <> (agencyService.saveTravelAgency(agency), HttpStatus.CREATED);

	}
	
	@DeleteMapping("/{id}")
	public String deleteTravelAgency(@PathVariable int id) {
		return agencyService.deleteAgency(id);
	}
	
}
