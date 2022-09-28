package com.app.dto;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class AuthReqeust {
	@NotBlank(message = "Email cannot be black or null")
	private String email;
	@NotBlank(message = "Password cannot be black or null")
	private String password;
}
