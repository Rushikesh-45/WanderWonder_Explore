package com.app.dao;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.app.pojos.Tourist;



@DataJpaTest
@AutoConfigureTestDatabase(replace= Replace.NONE)
class TestEmployeeRepository {
	
	@Autowired
	private TouristRepository repo;
	//@BeforeAll
	@Test
	void test() {
		assertNotNull(repo);
	}

	

}
