package com.app.securityConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.app.filters.JWTRequestFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	@Autowired
	private PasswordEncoder enc;
	@Autowired
	private UserDetailsService userDetSer ;
	
	@Autowired
	private JWTRequestFilter filter;
	
//override the method for authentication
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		
		
		// in memory auth provider 3 details--- username password role
		/*
		 * auth.inMemoryAuthentication()
		 * .withUser("rushi").password(enc.encode("12345")).roles("ADMIN") .and()
		 * .withUser("rushi2").password(enc.encode("123452")).roles("USER");
		 */
		
		auth.userDetailsService(userDetSer).passwordEncoder(enc);
		

	}
//for authorisation
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// role based authorisation
		http.cors()
		.and().csrf().disable()
		.authorizeRequests()
		.antMatchers("/api/**","/api/auth/**","/swagger-ui/**").permitAll()
//		.antMatchers("/user").hasAnyRole("ADMIN","USER")
//		.antMatchers("/admin").hasRole("ADMIN")
		.antMatchers(HttpMethod.OPTIONS).permitAll()
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
	}
	
	//configure auth mgr bean: to be used in authentication rest controller
	@Bean
	public AuthenticationManager authMgr() throws Exception {
		return authenticationManagerBean();
	}
	
}
