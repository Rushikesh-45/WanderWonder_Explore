package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.apache.commons.lang3.builder.ToStringExclude;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
//@NoArgsConstructor
@Table(name = "bookings")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bookingId;
	@ManyToOne // many bookings ---> one package
	@JoinColumn(name = "pkg_id")
	@ToStringExclude
	private Package pkg;
	@ManyToOne // many bookings ---> one tourist
	@JoinColumn(name = "tourist_id")
	@ToStringExclude
	private Tourist tourist;
//	@Column(length = 300)
//	private String orderId;
	@NotNull
	private LocalDate bookingDate;
	@NotNull
	private int noOfSeatsBooked;

	@NotNull
	private double bookingAmount;
	
	@NotNull
	private boolean isCanceled;
	
	public Booking() {
		this.isCanceled=false;
	}

	public Booking(Package pkg, Tourist tourist, @NotNull int noOfSeatsBooked,
			@NotNull double bookingAmount) {
		super();
		
		this.pkg = pkg;
		this.tourist = tourist;
		this.noOfSeatsBooked = noOfSeatsBooked;
		this.bookingAmount = bookingAmount;
		this.bookingDate= LocalDate.now();
		this.isCanceled=false;
	}
	
	
	
}
