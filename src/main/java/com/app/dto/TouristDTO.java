package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TouristDTO {
//
//	@JsonProperty(value = "userId")
	private Integer userId;
	@NotBlank(message = "Name Required")
	private String fullName;
	@NotBlank(message = "Email id is must")
	@Email
	private String email;
//	@NotBlank(message = "Date of Birth required")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonDeserialize(using = LocalDateDeserializer.class)  
	@JsonSerialize(using = LocalDateSerializer.class)
	private LocalDate dob;
	@NotBlank(message = "gender required")
	private String imagePath;
	private byte[] images;
	private String gender;
//	@NotBlank(message = "password cannot be blank")
	//@JsonIgnore
//	@Pattern(regexp = "?=.*\\\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20}", flags = Flag.UNICODE_CASE)
	private String password;
	
	@NotBlank
//	@Pattern(regexp = "?=.*\\\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20}", flags = Flag.UNICODE_CASE)
	private String confirmPassword;

	@NotBlank(message = "Mobile number required")
//	@Pattern(regexp = "(^[6-9]\\d{9}$)")
	private String mobNumber;
	private boolean isDeleted;
	private String jwt;
	private String role;
	private String location;
}
