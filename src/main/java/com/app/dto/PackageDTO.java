package com.app.dto;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Future;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.TravelAgency;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class PackageDTO {
	private Integer pkgId;
	@NotBlank(message = "Destination must required")
	private String destination;
private TravelAgency agency;
	@NotBlank(message = "Starting point required")
	private String startPoint;
	private String pkgName;
	@Min(1)
	private int noOfDays;
	
	@Min(5)
	private int totalSeats;
	private String description;
	@NotNull
	private double ticketCost;
	private int emptySeats;
	private String imagePath;
//	@JsonIgnore
	private byte[] images;
	
	private double discount;
	@Future
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonDeserialize(using = LocalDateDeserializer.class)  
	@JsonSerialize(using = LocalDateSerializer.class) 
	private LocalDate startDate;
//	@NotEmpty(message = "atleast one category is required")
	private String category ;
}
