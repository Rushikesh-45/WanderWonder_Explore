package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "tourists", uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
//@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "personNumber", "isActive" }) })
public class Tourist {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;
	
	@Column(length = 40)
	private String fullName;
	
	@Column(length = 30, unique = true )
	private String email;
	private String imagePath;
	private LocalDate dob;
	
	@Column(length = 30)
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	@Column(length = 350)
	private String password;
	
	@Column(length = 350)
	private String mobNumber;
	private String location;

}
