package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Setter
@Getter
@ToString
public class SearchDTO {

	private String destination;
	private String startPoint;
	private LocalDate startDate;
	private int travellers;
}
