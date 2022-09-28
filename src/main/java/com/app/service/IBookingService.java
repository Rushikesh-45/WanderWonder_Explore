package com.app.service;

import java.util.List;

import com.app.dto.BookingDTO;
import com.app.pojos.Booking;

public interface IBookingService {

	Booking createBooking(int tId, int pkgId, BookingDTO b);

	Booking cancelBooking(int id);

	List<Booking> getAllAgencies();

	BookingDTO saveBooking(int amt, int tId, int pkgId, int seats);

	List<BookingDTO> getBookingsByTouristId(int id);

	List<BookingDTO> getUpcomingForTourist(int id);
}
