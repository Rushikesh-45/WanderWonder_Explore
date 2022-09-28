package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.IUserRepository;
import com.app.dao.RoleRepository;
import com.app.dao.TouristRepository;
import com.app.dto.AuthRequestDTO;
import com.app.dto.PackageDTO;
import com.app.dto.TouristDTO;
import com.app.dto.UserRegResponse;
import com.app.pojos.Gender;
import com.app.pojos.Package;
import com.app.pojos.Role;
import com.app.pojos.Tourist;
import com.app.pojos.UserEntity;
import com.app.pojos.UserRole;

@Service
@Transactional
public class TouristServiceImpl implements ITouristService {
//dep--employee dao
	@Autowired
	private TouristRepository touristRepo;
	@Autowired
	private IUserRepository userRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private RoleRepository roleRepo;
	@Autowired
	private ImageService imgService;
	
	@Override
	public List<Tourist> getAllTourists() {
		// TODO Auto-generated method stub
		return touristRepo.findAll();
	}

	@Override
	public Tourist saveEmployeeDetails(TouristDTO tDto) {
		
		Tourist transientTourist = mapper.map(tDto, Tourist.class);

		Gender g= Gender.valueOf(tDto.getGender().toUpperCase());
		transientTourist.setGender(g);
		return touristRepo.save(transientTourist); //rets persistance emp ref
	}

	@Override
	public String deleteById(int empId) {
		String msg="deletion failed...!!!";
		if(touristRepo.existsById(empId)) {
			touristRepo.deleteById(empId);
			msg="emp delted succefully";
		}
		
		return msg;
	}

	@Override
	public TouristDTO getEmpDetails(int empId) {

		Tourist t = touristRepo.findById(empId).orElseThrow(()-> new ResourceNotFoundException("employee id not found "+empId));
		TouristDTO dto= mapper.map(t, TouristDTO.class);
		 try {
			 dto.setImages(imgService.restoreImage(t.getImagePath()));
			
		} catch (Exception e) {
			System.out.println("error in image restore-------------"+e);
		}
		 
		return dto;
	}
	@Override
	public AuthRequestDTO getByEmailPassword(String email, String password) {
		// TODO Auto-generated method stub
		Tourist pUser = touristRepo.findByEmailAndPassword(email, password).orElseThrow(()->new ResourceNotFoundException("invalid credentials") );
		
		return mapper.map(pUser, AuthRequestDTO.class);
	}

	@Override
	public Tourist updateTouristDetails(int id, TouristDTO touristDto) {
		Tourist t= touristRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("invalid id"));
		t=mapper.map(touristDto, Tourist.class);
		t.setUserId(id);
		Gender g= Gender.valueOf(touristDto.getGender().toUpperCase());
		t.setGender(g);
		return touristRepo.save(t);
	}
	//register user and tourist

	@Override
	public UserRegResponse registerTourist(@Valid TouristDTO tDto) {
		Tourist transientTourist = mapper.map(tDto, Tourist.class);

		Gender g= Gender.valueOf(tDto.getGender().toUpperCase());
		transientTourist.setGender(g);
		transientTourist.setPassword(encoder.encode(tDto.getPassword()));
		 touristRepo.save(transientTourist);
		 
		 
		 UserRole ur= UserRole.valueOf("ROLE_TOURIST");//?? role_tourist or tourist
//		 Role r= new Role();
		Role r = roleRepo.findByRoleName(ur).orElseThrow();
		 r.setRoleName(ur);
		 UserEntity user =mapper.map(tDto, UserEntity.class);
		 user.getUserRoles().add(r);
		 //		userEntity.setPassword(encoder.encode(user.getPassword()));
		 user.setPassword(encoder.encode(tDto.getPassword()));
		 userRepo.save(user);
		 
		return new UserRegResponse("User registered successfully with id "+user.getUserId());
	
	}

	@Override
	public TouristDTO findByEmail(String email) {
		Tourist dto=touristRepo.findByEmail(email).orElseThrow();
		return mapper.map(dto, TouristDTO.class);
	}
	
	

	
}
