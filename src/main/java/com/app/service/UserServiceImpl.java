package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.IUserRepository;
import com.app.dao.RoleRepository;
import com.app.dto.UserDTO;
import com.app.dto.UserRegResponse;
import com.app.pojos.UserEntity;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
//dependency: userRepo RoleRepo
	@Autowired
	private IUserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PasswordEncoder encoder;
	@Override
	public UserRegResponse registerUser(UserDTO user) {
		//record inserted in users table and n recs in link table (user_roles)
		//1. Map dto-->entity
		UserEntity userEntity= mapper.map(user, UserEntity.class);
		userEntity.getUserRoles().clear();
		//2. Iterate over roles from userDTO n map it to role and add them under userEntity
		user.getRoles().stream()
		.map(roleEnum->roleRepo.findByRoleName(roleEnum).orElseThrow(()->new RuntimeException("Invalid role")))
		.forEach(role->userEntity.getUserRoles().add(role));
		//3. Encode the password
		userEntity.setPassword(encoder.encode(user.getPassword()));
		//4.
		UserEntity pUser = userRepo.save(userEntity);
		return new UserRegResponse("User registered successfully with id "+pUser.getUserId());
	}
	@Override
	public UserEntity findByEmail(String email) {
		UserEntity user = userRepo.findByEmail(email).orElseThrow();
		return user;
	}

	
}
