package com.app.dto;

import javax.validation.constraints.Email;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class TravelAgencyDTO {


	private Integer agencyId;
//	@NotBlank(message = "Name required")
	private String agencyName;
	private String imagePath;
	private byte[] images;
//	@NotBlank(message = "Email required")
	@Email
	private String email;
//	@NotBlank(message = "Location required")
	private String city;
//	@NotBlank(message = "Contact number required")
	private String mobNumber;
//	@NotBlank(message = "Licence number is must")
	private String licenceNo;
//	@NotBlank(message = "Password required")
//	@JsonIgnore
	private String password;
	private String confirmPassword;
	private String role;
}
