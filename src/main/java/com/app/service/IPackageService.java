package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.PackageDTO;
import com.app.pojos.Package;
import com.app.pojos.PkgImage;

public interface IPackageService {
	List<PackageDTO> displayAllPackages();

	void bookTickets(int pId, int seats);

	void cancelBooking(int id, int seats);

	Package addNewPackage( int id, PackageDTO pkgDto);

	Package updatePackage(int id, PackageDTO pkgDto);

	List<PackageDTO> searchPackagesByDestStartDate(String startPoint,String Destination,LocalDate startDate);

	List<PackageDTO> getAllPackagesByAgencyId(int id);

	List<PackageDTO> getFutureAllPackagesByAgencyId(int id);

	List<PackageDTO> getPastAllPackagesByAgencyId(int id);

	PackageDTO findById(int id);

	String deletePkg(int id);

	List<PackageDTO> getByCategory(String category);
//	String saveMultipleImages(Integer id, Multipart pi);

	String saveMultipleImages(int pid, MultipartFile[] imageFile);
	List<PkgImage> getAllPkgImages(int id);
}
