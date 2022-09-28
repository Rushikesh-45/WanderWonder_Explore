package com.app.service;



import com.app.dto.UserDTO;
import com.app.dto.UserRegResponse;
import com.app.pojos.UserEntity;

public interface IUserService {

	UserRegResponse registerUser(UserDTO user);
	UserEntity findByEmail(String email);
}
