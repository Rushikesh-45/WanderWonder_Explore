package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Booking;

public interface BookingsRepository extends JpaRepository<Booking, Integer>{

	@Modifying
	@Query("update Booking b set b.isCanceled=true where b.bookingId= :id")
	void cancelBooking(@Param("id") Integer id);
	
//	@Modifying
//	@Query("update User u set u.active = false where u.lastLoginDate < :date")
//	void deactivateUsersNotLoggedInSince(@Param("date") LocalDate date);
	
}
