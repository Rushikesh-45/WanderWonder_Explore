package com.app.dto;

import javax.validation.constraints.Email;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class AuthRequestDTO {
//
//	@JsonProperty(value = "id")
//	private Integer empId;
//	
	@Email(message = "invalid email")
	private String email;
//	@JsonProperty(access = Access.WRITE_ONLY)//for deser only
//	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})")
	private String password;
	private String role;

}
