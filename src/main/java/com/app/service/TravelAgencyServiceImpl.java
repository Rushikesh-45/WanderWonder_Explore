package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IUserRepository;
import com.app.dao.RoleRepository;
import com.app.dao.TravelAgencyRepository;
import com.app.dto.TravelAgencyDTO;
import com.app.dto.UserRegResponse;
import com.app.pojos.Role;
import com.app.pojos.TravelAgency;
import com.app.pojos.UserEntity;
import com.app.pojos.UserRole;

@Service
@Transactional
public class TravelAgencyServiceImpl implements ITravelAgencyService {

	@Autowired
	private TravelAgencyRepository agencyRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private IUserRepository userRepo;
	@Autowired
	private RoleRepository roleRepo;
	
	@Override
	public TravelAgency saveTravelAgency(@Valid TravelAgencyDTO agency) {
		// TODO Auto-generated method stub
		TravelAgency agencyEntity = mapper.map(agency, TravelAgency.class);
		return agencyRepo.save(agencyEntity);
	}

	@Override
	public List<TravelAgencyDTO> getAllAgencies() {
		List<TravelAgencyDTO> dtolist = new ArrayList<>();
		List<TravelAgency> agencies = agencyRepo.findAll();
		for(TravelAgency a: agencies) {
			TravelAgencyDTO dto = mapper.map(a, TravelAgencyDTO.class);
			dto.setRole("AGENCY");
			dtolist.add(dto);
			
		}
		return dtolist;
	}

	@Override
	public UserRegResponse registerAgency(@Valid TravelAgencyDTO tDto) {

		 TravelAgency agencyEntity = mapper.map(tDto, TravelAgency.class);
		 agencyEntity.setPassword(encoder.encode(tDto.getPassword()));
		 agencyRepo.save(agencyEntity);
		 
		 UserRole ur= UserRole.valueOf("ROLE_AGENCY");//?? role_tourist or tourist
//		 Role r= new Role();
		 Role r = roleRepo.findByRoleName(ur).orElseThrow();
		 r.setRoleName(ur);
		 UserEntity user =mapper.map(tDto, UserEntity.class);
		 user.getUserRoles().add(r);
		 user.setPassword(encoder.encode(tDto.getPassword()));
		 userRepo.save(user);
		 
		return new UserRegResponse("User registered successfully with id "+user.getUserId());
	
//		 userRepo.findAll().stream()
//		 .forEach(u->{
//			 if(u.getEmail().equals(tDto.getEmail())) {
//				 UserEntity eUser = userRepo.findByEmail(tDto.getEmail()).orElseThrow();
//				 eUser.getUserRoles().add(r);
//				 
//				 }
//			 else {
//				 UserEntity user =mapper.map(tDto, UserEntity.class);
//				 user.getUserRoles().add(r);
//				 user.setPassword(encoder.encode(tDto.getPassword()));
//				 userRepo.save(user);
//				
//			 }
//		 });
	}

	@Override
	public TravelAgencyDTO findByEmail(String email) {
		TravelAgency agency = agencyRepo.findByEmail(email).orElseThrow();
		return mapper.map(agency, TravelAgencyDTO.class);
	}

	@Override
	public String deleteAgency(int id) {
		TravelAgency t= agencyRepo.findById(id).orElseThrow();
		agencyRepo.delete(t);
		return "Agency deleted successfully";
	}
	

}
