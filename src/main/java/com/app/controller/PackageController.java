package com.app.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.PackageDTO;
import com.app.dto.SearchDTO;
import com.app.pojos.Package;
import com.app.service.IPackageService;
import com.app.service.ImageService;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@RequestMapping("/api/package") // from react FE
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class PackageController {
	@Autowired
	private IPackageService pkgService;
	@Autowired
	private ImageService imageService;
	
	
	@GetMapping
	public ResponseEntity<?> listAllPackages() {
		System.out.println("in list emps");
		List<PackageDTO> list = pkgService.displayAllPackages();
//		if (list.isEmpty())
//			return new ResponseEntity<>("emp list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);

	}
	@GetMapping("/category/{category}")
	public ResponseEntity<?> getByCategory(@PathVariable String category) {
		System.out.println("in list emps");
		List<PackageDTO> list = pkgService.getByCategory(category);
		if (list.isEmpty())
			return new ResponseEntity<>("null", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
		
	}

	@PostMapping("/{id}")
	public ResponseEntity<Package> addPackage(@PathVariable int id, @RequestParam(required = true, value = "file") MultipartFile[] imageFile,
			@RequestParam(required = true, value = "jsondata") String jsonpkg) throws IOException{
		ObjectMapper objectmap = new ObjectMapper();
		PackageDTO pkgDto = objectmap.readValue(jsonpkg, PackageDTO.class);
//		pkgService.saveMultipleImages(pkgDto.getPkgId(), imageFile);
		pkgDto.setImagePath(imageService.storeImage(imageFile[0]));
		
		Package pkg = pkgService.addNewPackage(id, pkgDto);
		int pid=pkg.getPkgId();
		pkgService.saveMultipleImages(pid, imageFile);
		System.out.println("controller--->"+pkgDto);
		return new ResponseEntity<>(pkg, HttpStatus.CREATED);
	}
	
	//update package
	@PutMapping("/{id}")
	public ResponseEntity<?> updatePackage(@PathVariable int id, @RequestBody PackageDTO pkgDto){
		return new ResponseEntity<>(pkgService.updatePackage(id, pkgDto), HttpStatus.OK);
	}
	//home search bar
	@PostMapping("/search_pkg")
	public ResponseEntity<?> searchPackagesByDestStartDate(@RequestBody @Valid SearchDTO s){

		String startPoint= s.getStartPoint();
		String destination= s.getDestination();
		LocalDate startDate= s.getStartDate();
		List<PackageDTO> list = pkgService.searchPackagesByDestStartDate(startPoint, destination, startDate);
		if (list.isEmpty())
			return null;
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	//pkgs listed by particular agency
	@GetMapping({"agency/{id}"})
	public ResponseEntity<?> getByAgencyId(@PathVariable int id) {
		System.out.println("in list emps");
		List<PackageDTO> list = pkgService.getAllPackagesByAgencyId(id);
//		if (list.isEmpty())
//			return new ResponseEntity<>("emp list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);

	}
	
	//get pkg by pkg id
	@GetMapping("/{id}")
	public ResponseEntity<?> getById(@PathVariable int id){
		
		return new ResponseEntity<>(pkgService.findById(id), HttpStatus.OK);
	}
	@GetMapping("/img/{id}")
			public ResponseEntity<?> getByImgs(@PathVariable int id){
		return new ResponseEntity<>(pkgService.getAllPkgImages(id), HttpStatus.OK);
	}
	//old pkg before today
	@GetMapping("past/{id}")
	public ResponseEntity<?> getPastByAgencyId(@PathVariable int id) {
		System.out.println("in list emps");
		List<PackageDTO> list = pkgService.getFutureAllPackagesByAgencyId(id);
		if (list.isEmpty())
			return new ResponseEntity<>("emp list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
		
	}
	//upcoming pkg after today
	@GetMapping("future/{id}")
	public ResponseEntity<?> getFutureByAgencyId(@PathVariable int id) {
		System.out.println("in list emps");
		List<PackageDTO> list = pkgService.getPastAllPackagesByAgencyId(id);
		if (list.isEmpty())
			return new ResponseEntity<>("emp list is empty!", HttpStatus.OK);
		return new ResponseEntity<>(list, HttpStatus.OK);
		
	}
	@DeleteMapping("/{id}")
	public String deletePackage(@PathVariable int id) {
		return pkgService.deletePkg(id);
	}
	
}
