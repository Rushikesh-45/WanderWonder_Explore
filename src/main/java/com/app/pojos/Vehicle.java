package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString(exclude = "agency")

@Entity
@Table(name = "vehicles", uniqueConstraints = @UniqueConstraint(columnNames = {"passing", "vehicleNumber"}))
public class Vehicle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer vehicleId;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Segment segment;
	@Column(length = 20)
	private String vehicleName;
	@Column(length = 20)
	private String passing;
	@Column(length = 20)
	private String vehicleNumber;
	@ManyToOne
	@JoinColumn(referencedColumnName="agencyId")
	private TravelAgency agency;
	private double farePerKM;
	private boolean withDriver;
	private boolean isBooked;
	private boolean isPublished;
	private String imagePath;

	public Vehicle() {
		this.isPublished=true;
		this.isBooked=false;
	}
	
}
