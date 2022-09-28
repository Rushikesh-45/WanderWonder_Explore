package com.app.controller;

import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDTO;
import com.app.pojos.Booking;
import com.app.service.IBookingService;
import com.app.service.ITouristService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
@RequestMapping("/api/booking") // from react FE
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class BookingsController {
	@Autowired
	private IBookingService bookingService;
	@Autowired
	private ITouristService tSer;
	
	@GetMapping
	public ResponseEntity<?> getAllAgencies(){
		List<Booking> list = bookingService.getAllAgencies();
		if (list.isEmpty())
			return new ResponseEntity<>("booking list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	
	@PostMapping("{tId}/{pkgId}/book")
	public ResponseEntity<Booking> createBooking(@PathVariable int tId, @PathVariable int pkgId ,@RequestBody @Valid BookingDTO b){
		return new ResponseEntity<>(bookingService.createBooking(tId, pkgId, b), HttpStatus.CREATED);
	}
	
	@GetMapping("/cancel_booking/{id}")
	public ResponseEntity<?> cancelBoonking(@PathVariable int id){
		return new ResponseEntity<>(bookingService.cancelBooking(id), HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<?> getBookingsByTouristId(@PathVariable int id){
		List<BookingDTO> list = bookingService.getBookingsByTouristId(id);
		if (list.isEmpty())
			return new ResponseEntity<>("null", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	@GetMapping("/upcoming/{id}")
	public ResponseEntity<?> getUpcomingForTourist(@PathVariable int id){
		List<BookingDTO> list = bookingService.getUpcomingForTourist(id);
		if (list.isEmpty())
			return new ResponseEntity<>("null", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	
	@PostMapping("/payment")
	public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
		System.out.println("in payment controller method--------"+data);
		int amt=Integer.parseInt(data.get("amount").toString());  
		int tId=Integer.parseInt(data.get("tId").toString());  
		int pkgId=Integer.parseInt(data.get("pkgId").toString());  
		int seats=Integer.parseInt(data.get("seats").toString());  
		var razorpayClient=new RazorpayClient("rzp_test_1yM3CEVq2bqS9n", "Cg0httHhhSHJI4cJfigP0eJF");
		JSONObject options = new JSONObject();
		options.put("amount", amt*100);
		options.put("currency", "INR");
		options.put("receipt", "txn_123456");
		Order order = razorpayClient.Orders.create(options);
		System.out.println(order);
//		{"amount":5000000,"amount_paid":0,"notes":[],"
//		created_at":1664001172,"amount_due":5000000,"currency":"I
//		NR","receipt":"txn_123456","id":"order_KLdj0OfuQ1gICT","entity":"order","offer_id":null,"status":"created","attempts":0}
//		{amount=50000, tId=6, pkgId=1}
		BookingDTO dto = bookingService.saveBooking(amt, tId, pkgId, seats);
		
		String to=tSer.getEmpDetails(tId).getEmail();
		String from="wander.wonder45007@gmail.com";
		String subject="Your ticket has been confirmed..";
		String message=  "Travel Agency name: "+dto.getAgencyName()+
				"Contact: "+dto.getAgencyContact()+"Booking Id: "+dto.getBookingId()
		+"Destination: "+dto.getDestination()+"Total Seats: "+dto.getNoOfSeatsBooked()+"Starting Point: "+dto.getStartPoint()+
			"Journey date: "+dto.getStartDate()+"booked on: "+dto.getBookingDate()+"Total payment"+dto.getBookingAmount();
		
		sendEmail(message, subject, to, from);
		
		
		return order.toString();
	}


	private void sendEmail(String message, String subject, String to, String from) {
		String host="smtp.gmail.com";
		Properties properties = System.getProperties();;
		System.out.println(properties);
		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", "465");
		properties.put("mail.smtp.enable", "true");
		properties.put("mail.smtp.auth", "true");
		Session session = Session.getInstance(properties, new Authenticator() {

			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				// TODO Auto-generated method stub
				return new PasswordAuthentication("wander.wonder45007@gmail.com", "Wander@45007");
			}
		});
session.setDebug(true);
		
		//Step 2 : compose the message [text,multi media]
		MimeMessage m = new MimeMessage(session);
		
		try {
		
		//from email
		m.setFrom(from);
		
		//adding recipient to message
		m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
		
		//adding subject to message
		m.setSubject(subject);
	
		
		//adding text to message
		m.setText(message);
		
		//send 
		
		//Step 3 : send the message using Transport class
		Transport.send(m);
		
		System.out.println("Sent success...................");
		
		
		}catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
}
