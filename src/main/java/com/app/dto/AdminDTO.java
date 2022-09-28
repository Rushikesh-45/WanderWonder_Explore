package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString

public class AdminDTO {
	private String name;
	private String email;
	private String role;
	
	private String password;
}
