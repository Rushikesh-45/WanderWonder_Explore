package com.app.dto;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import com.app.pojos.UserRole;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = "roles")

public class UserDTO {
	
private Long userId;
	@NotBlank(message = "user name has to be supplied")
private String userName;
	@NotBlank(message = "email name has to be supplied")
	@Email(message = "invalid mail id")
private String email;
	@NotBlank(message = "type password")
private String password;
//	private String jwt;
@NotEmpty(message = "at least one role should be assigned")
private Set<UserRole> roles = new HashSet<>();
}
