package com.app.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.hibernate.validator.constraints.Range;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AuthRequestDTO;
import com.app.dto.PackageDTO;
import com.app.dto.TouristDTO;
import com.app.pojos.Package;
import com.app.pojos.Tourist;
import com.app.service.ITouristService;
import com.app.service.ImageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/tourist") // from react FE
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class TouristController {
	@Autowired
	private ITouristService touristService;
	@Autowired
	private ImageService imageService;

	public TouristController() {
		System.out.println("in ctor " + getClass());
	}

//req handling method REST  API call to send all tourists
	@GetMapping
	public ResponseEntity<?> getAllTourists() {
		System.out.println("in list emps");
		List<Tourist> list = touristService.getAllTourists();
		if (list.isEmpty())
			return new ResponseEntity<>("emp list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);

	}

//req handling to create new employee
	@PostMapping
	public ResponseEntity<Tourist> saveTouristDetails(@RequestParam(required = true, value = "file") MultipartFile imageFile,
			@RequestParam(required = true, value = "jsondata") String jsontourist) throws IOException {
		System.out.println("in save emp " + jsontourist); // all args except id
		ObjectMapper objectmap = new ObjectMapper();
		TouristDTO tDto=objectmap.readValue(jsontourist, TouristDTO.class);
		tDto.setImagePath(imageService.storeImage(imageFile));
//		return ResponseEntity.ok(touristService.saveEmployeeDetails(emp));
		try {
			return new ResponseEntity <> (touristService.saveEmployeeDetails(tDto), HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("----------"+e);
			return null;
		}

	}

	@DeleteMapping("/{empId}")
	public String deleteEmp(@PathVariable @Range(min=1, max=100) int empId) {
		return touristService.deleteById(empId);
	}

//to get tourist by id
	@GetMapping("/{id}")
	public ResponseEntity<?> getEmpDetails(@PathVariable int id) {
		System.out.println("in get by id " + getClass());
	return new ResponseEntity<>(touristService.getEmpDetails(id), HttpStatus.OK);
	}

//to update existing tourist
	@PutMapping("/{id}")
	public ResponseEntity<?> updateEmp(@PathVariable int id, @RequestBody TouristDTO touristDto) {
		System.out.println("in update emp " + touristDto);
		return new ResponseEntity<>(touristService.updateTouristDetails(id, touristDto), HttpStatus.OK);
	}

}
