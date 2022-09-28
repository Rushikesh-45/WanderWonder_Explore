package com.app.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.pojos.UserEntity;

public class CustomUserDetails implements UserDetails {

	private UserEntity user;
	
	
	public CustomUserDetails(UserEntity user) {
		super();
		this.user=user;
	} 

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return user.getUserRoles() // set<Role>
				.stream() // Stream<Role>
				.map(role -> new SimpleGrantedAuthority(role.getRoleName().name())) // stream of simple granted
																					// authority
				.collect(Collectors.toList());
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
