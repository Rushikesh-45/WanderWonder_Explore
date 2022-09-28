package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IUserRepository;
import com.app.pojos.UserEntity;

@Service
@Transactional
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private IUserRepository userRepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		UserEntity t=userRepo.findByEmail(username)
		.orElseThrow(()-> new UsernameNotFoundException("invalid email id"+username));
		
		return new CustomUserDetails(t);
	}

}
