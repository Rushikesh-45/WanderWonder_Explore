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

import com.app.dto.VehicleDTO;
import com.app.pojos.Vehicle;
import com.app.service.IVehicleService;
import com.app.service.ImageService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/vehicle") // from react FE
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class VehiclesController {
	@Autowired
	private IVehicleService vehService;
	@Autowired
	private ImageService imageService;
	
	@GetMapping
	public ResponseEntity<?> getAllListedVehicles(){
		List<VehicleDTO> list = vehService.getAllListedVehicles();
		if (list.isEmpty())
			return new ResponseEntity<>("vehicle list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	//add vehicle
	@PostMapping("/{agency_id}")
	public ResponseEntity<?> addNewVehicle(@PathVariable int agency_id, @RequestParam(required = true, value = "file") MultipartFile imageFile,
			@RequestParam(required = true, value = "jsondata") String jsonveh) throws IOException {
		ObjectMapper objectmap = new ObjectMapper();
		VehicleDTO vehDto =objectmap.readValue(jsonveh, VehicleDTO.class);
		vehDto.setImagePath(imageService.storeImage(imageFile));
		return new ResponseEntity<>(vehService.addNewVehicle(agency_id, vehDto), HttpStatus.CREATED);  //vehService.addNewVehicle(agency_id, vehDto);
	}
	
	//find according to travel agency
	@GetMapping("agency/{id}")
	public ResponseEntity<?> getVehiclesByTravelAgency(@PathVariable int id){
		List<VehicleDTO> list = vehService.getAllListedVehiclesByTravelAgency(id);
//		if (list.isEmpty())
//			return new ResponseEntity<>("vehicle list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	//get by segment
	@GetMapping("segment/{segment}")
	public ResponseEntity<?> getVehiclesBySegment(@PathVariable String segment){
		System.out.println("in controller-->"+segment);
		
		List<VehicleDTO> list = vehService.getVehiclesBySegment(segment.toUpperCase());
//		if (list.isEmpty())
//			return new ResponseEntity<>("vehicle list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	//get vehicles with driver
	@GetMapping("/getVehiclesWithDriver")
	public ResponseEntity<?> getVehiclesWithDriver(){
		List<Vehicle> list = vehService.getVehiclesWithDriver();
		if (list.isEmpty())
			return new ResponseEntity<>("vehicle list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	
	}
	@GetMapping("/getVehiclesWithoutDriver")
	public ResponseEntity<?> getVehiclesWithoutDriver(){
		List<Vehicle> list = vehService.getVehiclesWithoutDriver();
		if (list.isEmpty())
			return new ResponseEntity<>("vehicle list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
		
	}
	//delete vehicle
	@DeleteMapping("/{id}")
	public String deleteVehicle(@PathVariable int id) {
		return vehService.deleteVehicle(id);
	}

	
}
