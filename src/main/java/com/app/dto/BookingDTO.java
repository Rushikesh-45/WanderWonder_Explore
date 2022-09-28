package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BookingDTO {

	private int bookingId;
	private LocalDate bookingDate;
	private int noOfSeatsBooked;
	private double bookingAmount;
	private LocalDate startDate;
	private String destination;
	private String startPoint;
	private int touristId;
	private int agencyId;
	private String agencyName;
	private String agencyContact;
	private boolean isCanceled;

}
