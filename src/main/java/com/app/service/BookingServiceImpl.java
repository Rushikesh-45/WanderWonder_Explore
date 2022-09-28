package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BookingsRepository;
import com.app.dao.PackageRepository;
import com.app.dao.TouristRepository;
import com.app.dto.BookingDTO;
import com.app.pojos.Booking;
import com.app.pojos.Package;
import com.app.pojos.Tourist;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {

	@Autowired
	private BookingsRepository bRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PackageRepository pkgRepo;
	@Autowired
	private TouristRepository touristRepo;
	
	
	@Override
	public Booking createBooking(int tId, int pkgId, BookingDTO b) {
		Booking booking= mapper.map(b, Booking.class);
		booking.setPkg(pkgRepo.getById(pkgId));
		booking.setTourist(touristRepo.getById(tId));
		Package p = booking.getPkg();
		int booked = booking.getNoOfSeatsBooked();
		p.setEmptySeats(p.getEmptySeats()-booked);
		
		booking.setBookingAmount(p.getTicketCost()*b.getNoOfSeatsBooked());
		
		return bRepo.save(booking);
	}

	@Override
	public Booking cancelBooking(int id) {
		bRepo.cancelBooking(id);
		Booking bkg = bRepo.getById(id);
		Package pkg = bkg.getPkg();
		pkg.setEmptySeats(bkg.getNoOfSeatsBooked()+pkg.getEmptySeats());
		return null;
	}

	@Override
	public List<Booking> getAllAgencies() {
		// TODO Auto-generated method stub
		return bRepo.findAll();
	}

	@Override
	public BookingDTO saveBooking(int amt, int tId, int pkgId, int seats) {
		Package p= pkgRepo.getById(pkgId);
		p.setEmptySeats(p.getEmptySeats()-seats);
		Tourist t = touristRepo.getById(tId);
		Booking b= new Booking(p, t, seats, amt);
		bRepo.save(b);
		 BookingDTO dto = mapper.map(b, BookingDTO.class);
		 dto.setDestination(p.getDestination());
		 dto.setStartDate(p.getStartDate());
		 dto.setStartPoint(p.getStartPoint());
		 dto.setTouristId(t.getUserId());
		 
		 dto.setAgencyContact(p.getAgency().getMobNumber());
		 dto.setAgencyName(p.getAgency().getAgencyName());
		 return dto;
	}

	@Override
	public List<BookingDTO> getBookingsByTouristId(int id) {
		List<Booking> b= bRepo.findAll();
		List<BookingDTO> dtos=new ArrayList<>();
		for(Booking bk: b) {
			if(bk.getTourist().getUserId()==id) {
				BookingDTO dto= mapper.map(bk, BookingDTO.class);
				Package p=bk.getPkg();
				dto.setDestination(p.getDestination());
				 dto.setStartDate(p.getStartDate());
				 dto.setStartPoint(p.getStartPoint());
				 dto.setTouristId(id);
				 dto.setAgencyId(p.getAgency().getAgencyId());
				 dto.setAgencyContact(p.getAgency().getMobNumber());
				 dto.setAgencyName(p.getAgency().getAgencyName());
				 dtos.add(dto);
			}
		}
		return dtos;
	}

	@Override
	public List<BookingDTO> getUpcomingForTourist(int id) {
		List<Booking> b= bRepo.findAll();
		List<BookingDTO> dtos=new ArrayList<>();
		LocalDate today = LocalDate.now();
		for(Booking bk: b) {
			if(bk.getTourist().getUserId()==id && bk.getPkg().getStartDate().isAfter(today)) {
				BookingDTO dto= mapper.map(bk, BookingDTO.class);
				Package p=bk.getPkg();
				dto.setDestination(p.getDestination());
				 dto.setStartDate(p.getStartDate());
				 dto.setStartPoint(p.getStartPoint());
				 dto.setAgencyId(p.getAgency().getAgencyId());
				 dto.setTouristId(id);
				 dto.setAgencyContact(p.getAgency().getMobNumber());
				 dto.setAgencyName(p.getAgency().getAgencyName());
				 dtos.add(dto);
			}
		}
		return dtos;
	}

}
