package com.app.pojos;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = "agency")
@Entity
@Table(name = "packages")
public class Package {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer pkgId;
	@Column(length = 20)
	private String pkgName;
	@Column(length = 40)
	private String destination;
	@ManyToOne   //(fetch=FetchType.LAZY ) // many packages --> one TA
	@JoinColumn(referencedColumnName="agencyId")
	private TravelAgency agency;
	@Column(length = 20)
	private String startPoint;
	
	private int noOfDays;
	
	private int totalSeats;
	
	private int emptySeats;
	
	private double ticketCost;
	private double discount;
	
	private LocalDate startDate;
	
	private boolean isPublished;
	private String imagePath;
	
	@Column(length = 1000)
	private String description;

	@Enumerated(EnumType.STRING)
	private Category category ;
	
	public Package() {
		
		this.isPublished=true;
	}
	
}
