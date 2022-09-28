package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "travel_agencies", uniqueConstraints = {@UniqueConstraint(name = "UniqueAgencyEmail", columnNames = {"email"}), 
			@UniqueConstraint(name="UniqueLincence", columnNames = {"licenceNo"})}  )

public class TravelAgency {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer agencyId;
	
	@Column(length = 20)
	
	private String agencyName;
	
	@Column(length = 30, unique = true)
	private String email;
	private String imagePath;
	@Column(length = 20)
	private String city;
	
	@Column(length = 14, unique = true)
	private String mobNumber;
	
	@Column(length = 20, unique = true)
	private String licenceNo;
	
	@Column(length = 20)

	private String password;


}
