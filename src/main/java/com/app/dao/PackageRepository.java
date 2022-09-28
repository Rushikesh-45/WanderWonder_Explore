package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Package;

public interface PackageRepository extends JpaRepository<Package, Integer> {

	
	@Query("select p from Package p where p.category=:category")
	List<Package> getByCategory(@Param("category") String category);

//	@Procedure
//	List<Package> searchPackagesByDestStartDate(String startPoint,String destination,LocalDate startDate);
	/*delimiter//
	 * create proceduresearchPackagesByDestStartDate()
	 * begin
	 * select * from packages where start_point=startPoint and destination=destination 
	 * and startDate>startDate
	 * end;
	 * delimiter; */
	

}
