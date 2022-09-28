package com.app.exc_Hanlder;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ErrorResponse;

@ControllerAdvice // Mandatory
//to intercept exceptions in all controllers 
//n rest controllers

public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
//		Map<String , String> errorMap=new HashMap<>();
//		for(FieldError e : ex.getFieldErrors())
//			errorMap.put(e.getField(), e.getDefaultMessage());
		Map<String, String> errorMap = ex.getFieldErrors().stream() //Stream<FieldError>
		.collect(Collectors.toMap(FieldError::getField,FieldError::getDefaultMessage));
	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMap);
	}
	
	
	
	
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e) {
		System.out.println("in rte handler ");
		return ResponseEntity
				.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new ErrorResponse(e.getMessage()));
	}
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(RuntimeException e) {
		System.out.println("in resource not found handler ");
		return ResponseEntity
				.status(HttpStatus.NOT_FOUND)
				.body(new ErrorResponse(e.getMessage()));
	}
	
	
	
	
}
