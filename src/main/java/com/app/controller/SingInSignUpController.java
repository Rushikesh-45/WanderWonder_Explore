package com.app.controller;

import java.io.IOException;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.RoleRepository;
import com.app.dto.AdminDTO;
import com.app.dto.AuthReqeust;
import com.app.dto.AuthResp;
import com.app.dto.TouristDTO;
import com.app.dto.TravelAgencyDTO;
import com.app.jwt_utils.JwtUtils;
import com.app.pojos.Role;
import com.app.pojos.Tourist;
import com.app.pojos.TravelAgency;
import com.app.pojos.UserEntity;
import com.app.pojos.UserRole;
import com.app.service.IAdminService;
import com.app.service.ITouristService;
import com.app.service.ITravelAgencyService;
import com.app.service.IUserService;
import com.app.service.ImageService;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("/api/auth")
@Slf4j
public class SingInSignUpController {
//dependency: jwt utils: for generating token
	@Autowired
	private JwtUtils utils;
	@Autowired
	private IAdminService adminService;
	//auth mgr
	@Autowired
	private AuthenticationManager manager;
	@Autowired
	private ITouristService touristService;
	@Autowired
	private ITravelAgencyService agencyService;
	@Autowired
	private RoleRepository roleRepo;
	
	//dep: userRegService
	@Autowired
	private IUserService userService;
	@Autowired
	private ImageService imageService;
	
	@PostMapping("/signin")
	public ResponseEntity<?> validateUserCreateToken(@RequestBody  AuthReqeust request){
		
		log.info("in signin method : request{} ",request);
		//store incoming user details(not yet validated) into authentication object
		UsernamePasswordAuthenticationToken authToken=new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword());
		log.info("auth token:----- "+authToken);
		try {
		//authenticate credentials
			Authentication authenticatedDetails = manager.authenticate(authToken);
			UserEntity u= userService.findByEmail(request.getEmail());
			 UserRole roleTourist= UserRole.valueOf("ROLE_TOURIST");
			 UserRole roleAgency= UserRole.valueOf("ROLE_AGENCY");
			 Role tr= roleRepo.findByRoleName(roleTourist).orElseThrow();
			 Role ar= roleRepo.findByRoleName(roleAgency).orElseThrow();
			if(u.getUserRoles().contains(tr)) {
				System.out.println("-------------tourist--------------");
				TouristDTO tourist= touristService.findByEmail(request.getEmail());
//				tourist.setJwt(utils.generateJwtToken(authenticatedDetails));
				tourist.setRole("TOURIST");
				try {
					tourist.setImages(imageService.restoreImage(tourist.getImagePath()));
					
				} catch (Exception e) {
					System.out.println("error in image restore-------------"+e);
				}
				utils.generateJwtToken(authenticatedDetails);
//				return new ResponseEntity<>(tourist,HttpStatus.OK);
				return new ResponseEntity<>(tourist,HttpStatus.OK);

			}
//			if(u.getUserRoles().contains(ar))
			else if(u.getUserRoles().contains(ar)) {
				System.out.println("-------------agency--------------");
				TravelAgencyDTO agency= agencyService.findByEmail(request.getEmail());
//				agency.setJwt(utils.generateJwtToken(authenticatedDetails));
				agency.setRole("AGENCY");
				try {
					agency.setImages(imageService.restoreImage(agency.getImagePath()));
					
				} catch (Exception e) {
					System.out.println("error in image restore-------------"+e);
				}
				utils.generateJwtToken(authenticatedDetails);
//				return new ResponseEntity<>(agency,HttpStatus.OK);
				return new ResponseEntity<>(agency,HttpStatus.OK);

			}else {
				System.out.println("-------------admin--------------");
				AdminDTO admin=adminService.findByEmail(request.getEmail());
//				agency.setJwt(utils.generateJwtToken(authenticatedDetails));
				
				admin.setRole("ADMIN");
//				return new ResponseEntity<>(agency,HttpStatus.OK);
				return ResponseEntity.ok(new AuthResp("Authentication successful....",utils.generateJwtToken(authenticatedDetails)));

			}
				
		
		}catch (BadCredentialsException e) {
		System.out.println("err "+e);
			//send error code 401
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
	}

	@PostMapping("/tourist_signup")
	public ResponseEntity<?> saveTouristDetails(@RequestParam(required = true, value = "file") MultipartFile imageFile,
			@RequestParam(required = true, value = "jsondata") String jsontourist) throws IOException {
		System.out.println("in save emp " + jsontourist); // all args except id
		ObjectMapper objectmap = new ObjectMapper();
		TouristDTO tDto=objectmap.readValue(jsontourist, TouristDTO.class);
		tDto.setImagePath(imageService.storeImage(imageFile));
//		return ResponseEntity.ok(touristService.saveEmployeeDetails(emp));
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(touristService.registerTourist(tDto)) ;
		} catch (Exception e) {
			System.out.println("----------"+e);
			return null;
		}

	}
//	@PostMapping("/agency_signup")
//	public ResponseEntity<?> agencyUserRegistration(@RequestBody @Valid TravelAgencyDTO tDto){
//		
//		System.out.println("in save emp " + tDto); // all args except id
////		return ResponseEntity.ok(touristService.saveEmployeeDetails(emp));
//		
////		System.out.println("in reg user roles : user{} "+user+" "+user.getRoles());
////		//invoke service layer method for user info+ associated roles info
//		return ResponseEntity.status(HttpStatus.CREATED).body(agencyService.registerAgency(tDto)) ;
//		
//	}
	

	@PostMapping("/agency_signup")
	public ResponseEntity<?> saveTravelAgency(@RequestParam(required = true, value = "file") MultipartFile imageFile,
			@RequestParam(required = true, value = "jsondata") String jsonagency) throws IOException {
		System.out.println("in save emp " + jsonagency); // all args except id
//		return ResponseEntity.ok(touristService.saveEmployeeDetails(emp));
		ObjectMapper objectmap=new ObjectMapper();
		TravelAgencyDTO agency = objectmap.readValue(jsonagency, TravelAgencyDTO.class);
		agency.setImagePath(imageService.storeImage(imageFile));
		return new ResponseEntity <> (agencyService.registerAgency(agency), HttpStatus.CREATED);

	}
	
}
