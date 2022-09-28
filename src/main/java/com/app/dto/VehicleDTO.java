package com.app.dto;

import javax.validation.constraints.NotBlank;

import com.app.pojos.TravelAgency;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString

public class VehicleDTO {
	private Integer vehicleId;
	@NotBlank(message = "Segment is required")
	private String segment;
	private String vehicleName;
	
	@NotBlank(message = "Passing required")
	private String passing;
	private TravelAgency agency;
	@NotBlank(message="Vehicle Number required")
	private String vehicleNumber;
	private String imagePath;
	private byte[] images;
	private double farePerKM;
	private boolean withDriver;
}
