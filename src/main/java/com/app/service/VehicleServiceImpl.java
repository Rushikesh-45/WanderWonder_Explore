package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.TravelAgencyRepository;
import com.app.dao.VehicleRepository;
import com.app.dto.VehicleDTO;
import com.app.pojos.Segment;
import com.app.pojos.Vehicle;

@Service
@Transactional
public class VehicleServiceImpl implements IVehicleService {

	@Autowired
	private VehicleRepository vehRepo;
	@Autowired
	private TravelAgencyRepository agencyRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private ImageService imageService;
	
	@Override
	public List<VehicleDTO> getAllListedVehicles() {
		//vehRepo.findAll().forEach((v)-> {if(!v.isDeleted()) return v;});
		List<Vehicle> list = vehRepo.findAll();
		List<VehicleDTO> dtos= new ArrayList<>();
		for(Vehicle v: list) {
			VehicleDTO dto=mapper.map(v, VehicleDTO.class);
			try {
				dto.setImages(imageService.restoreImage(dto.getImagePath()));
				
			} catch (Exception e) {
				System.out.println("error in image restore-------------"+e);
			}
			dtos.add(dto);
		}
		return dtos;
	}

	@Override
	public List<VehicleDTO> getAllListedVehiclesByTravelAgency(int id) {
		List<Vehicle> list = vehRepo.findByAgency(agencyRepo.getById(id));
		List<VehicleDTO> dtos= new ArrayList<>();
		for(Vehicle v: list) {
			VehicleDTO dto=mapper.map(v, VehicleDTO.class);
			try {
				dto.setImages(imageService.restoreImage(dto.getImagePath()));
				
			} catch (Exception e) {
				System.out.println("error in image restore-------------"+e);
			}
			dtos.add(dto);
		}
		return dtos;
	}

	@Override
	public Vehicle addNewVehicle(int id, @Valid VehicleDTO vehDto) {
		System.out.println("id from service---"+id);
		Vehicle vehicle = mapper.map(vehDto, Vehicle.class);
		vehicle.setAgency(agencyRepo.getById(id));
		Segment s = Segment.valueOf(vehDto.getSegment().toUpperCase());
		vehicle.setSegment(s);
		return vehRepo.save(vehicle);
	}

	@Override
	public List<VehicleDTO> getVehiclesBySegment(String segment) {
		
//		return vehRepo.findBySegment(Segment.valueOf(segment));
		List<Vehicle> list = vehRepo.findBySegment(Segment.valueOf(segment));
		List<VehicleDTO> dtos= new ArrayList<>();
		for(Vehicle v: list) {
			VehicleDTO dto=mapper.map(v, VehicleDTO.class);
			try {
				dto.setImages(imageService.restoreImage(dto.getImagePath()));
				
			} catch (Exception e) {
				System.out.println("error in image restore-------------"+e);
			}
			dtos.add(dto);
		}
		return dtos;
	}

	@Override
	public List<Vehicle> getVehiclesWithDriver() {
		
		
		
		return vehRepo.SelectVehiclesWithDriver();
	}
	@Override
	public List<Vehicle> getVehiclesWithoutDriver() {
		
		
		
		return vehRepo.SelectVehiclesWithoutDriver();
	}

	@Override
	public String deleteVehicle(int id) {
		Vehicle v= vehRepo.findById(id).orElseThrow();
		vehRepo.delete(v);
		return "Vehicle deleted Successfully..!!";
	}
	

}
