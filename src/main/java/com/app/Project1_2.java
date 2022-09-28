package com.app;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class Project1_2 {

	public static void main(String[] args) {
		SpringApplication.run(Project1_2.class, args);
	}

	//configure model mapper as a spring bean
		@Bean //equivalent to <bean> tag in xml file
		public ModelMapper mapper() {
			System.out.println("in model mapper");
			return new ModelMapper();
		}
		//configure password encoder
		@Bean
		public PasswordEncoder encoder() {
			return new BCryptPasswordEncoder();
		}
		
}
