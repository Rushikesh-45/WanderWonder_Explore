package com.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class AuthResp {

	private String mesg;
	private String jwt;
	public AuthResp(String mesg, String jwt) {
		super();
		this.mesg = mesg;
		this.jwt = jwt;
	}
	
}
