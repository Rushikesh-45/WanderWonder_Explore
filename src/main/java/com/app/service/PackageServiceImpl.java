package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.PackageRepository;
import com.app.dao.PkgImageRepository;
import com.app.dao.TravelAgencyRepository;
import com.app.dto.PackageDTO;
import com.app.pojos.Category;
import com.app.pojos.Package;
import com.app.pojos.PkgImage;

@Service
@Transactional
public class PackageServiceImpl implements IPackageService {
	@Autowired
	private PackageRepository pkgRepo;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private TravelAgencyRepository agencyRepo;
	@Autowired
	private ImageService imageService;
	@Autowired
	private PkgImageRepository ipRepo;


	@Override
	public List<PackageDTO> displayAllPackages() {
		// TODO Auto-generated method stub
		List<Package> pkgs = pkgRepo.findAll();
		List<PackageDTO> pkgsdto=new ArrayList<>();
		for (Package p : pkgs) {

				PackageDTO pp = mapper.map(p, PackageDTO.class);
				try {
					pp.setImages(imageService.restoreImage(pp.getImagePath()));
					
				} catch (Exception e) {
					System.out.println("error in image restore-------------"+e);
				}
//				PackageDTO pp = mapper.map(p, PackageDTO.class);
			
//				pkgs.add(pp);
				pkgsdto.add(pp);
		}
			
		return pkgsdto;
	}

	@Override
	public void bookTickets(int pId, int seats) {
		Package p = pkgRepo.getById(pId);
		p.setEmptySeats(p.getEmptySeats() - seats);

	}

	@Override
	public void cancelBooking(int id, int seats) {
		Package pkg = pkgRepo.getById(id);
		pkg.setEmptySeats(pkg.getEmptySeats() + seats);
	}

	@Override
	public Package addNewPackage(int id, PackageDTO pkgDto) {
		System.out.println("dto------>" + pkgDto);
		Package pPkg = mapper.map(pkgDto, Package.class);
		pPkg.setAgency(agencyRepo.getById(id));
		pPkg.setEmptySeats(pkgDto.getTotalSeats());
		pPkg.setCategory(Category.valueOf(pkgDto.getCategory()));

		System.out.println("service-------->" + pPkg);
		return pkgRepo.save(pPkg);
	}

	@Override
	public Package updatePackage(int id, PackageDTO pkgDto) {
		Package p;
		p = pkgRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Package id" + id));

		p = mapper.map(pkgDto, Package.class);
		p.setPkgId(id);

		p.setAgency(agencyRepo.getById(id));

		// setting empty seats = total seats
		p.setEmptySeats(pkgDto.getTotalSeats());

		return pkgRepo.save(p);
	}

	@Override
	public List<PackageDTO> searchPackagesByDestStartDate(String startPoint, String destination, LocalDate startDate) {
		// TODO Auto-generated method stub
		List<PackageDTO> pkgs = new ArrayList<PackageDTO>();

		List<Package> list = pkgRepo.findAll();
		for (Package p : list) {
			if (p.getDestination().equalsIgnoreCase(destination) && p.getStartPoint().equalsIgnoreCase(startPoint)
					&& p.getStartDate().isAfter(startDate)) {

				PackageDTO pp = mapper.map(p, PackageDTO.class);
				try {
					pp.setImages(imageService.restoreImage(pp.getImagePath()));
					
				} catch (Exception e) {
					System.out.println("error in image restore-------------"+e);
				}
//				PackageDTO pp = mapper.map(p, PackageDTO.class);
			
//				pkgs.add(pp);
				pkgs.add(pp);
			}
		}

		return pkgs;// pkgRepo.searchPackagesByDestStartDate(startPoint, Destination, startDate);
	}

	@Override
	public List<PackageDTO> getAllPackagesByAgencyId(int id) {
		List<PackageDTO> pkgs = new ArrayList<PackageDTO>();

		List<Package> list = pkgRepo.findAll();
		for (Package p : list) {
			System.out.println("agency id-------======>>>" + p.getAgency().getAgencyId());
			if (p.getAgency().getAgencyId() == id) {
				PackageDTO pp = mapper.map(p, PackageDTO.class);
				try {
					pp.setImages(imageService.restoreImage(pp.getImagePath()));
					
				} catch (Exception e) {
					System.out.println("error in image restore-------------"+e);
				}
//				pp.setAgency(p.getAgency().getAgencyId());
				pkgs.add(pp);
			}
		}

		return pkgs;
	}

	@Override
	public List<PackageDTO> getFutureAllPackagesByAgencyId(int id) {
		List<PackageDTO> pkgs = new ArrayList<PackageDTO>();

		List<Package> list = pkgRepo.findAll();
		LocalDate today = LocalDate.now();
		for (Package p : list) {
			if (!p.getStartDate().isAfter(today)) {
				PackageDTO pp = mapper.map(p, PackageDTO.class);
				


				pkgs.add(pp);
			}
		}

		return pkgs;
	}

	@Override
	public List<PackageDTO> getPastAllPackagesByAgencyId(int id) {
		List<PackageDTO> pkgs = new ArrayList<PackageDTO>();

		List<Package> list = pkgRepo.findAll();
		LocalDate today = LocalDate.now();
		for (Package p : list) {
			if (!p.getStartDate().isBefore(today)) {
				PackageDTO pp = mapper.map(p, PackageDTO.class);
			
//				pp.setAgency(p.getAgency().getAgencyId());
				pkgs.add(pp);
			}
		}

		return pkgs;
	}

	@Override
	public PackageDTO findById(int id) {
		
		 Package pkg = pkgRepo.findById(id).orElseThrow();
		 PackageDTO dto = mapper.map(pkg, PackageDTO.class);
		 try {
				dto.setImages(imageService.restoreImage(dto.getImagePath()));
				
			} catch (Exception e) {
				System.out.println("error in image restore-------------"+e);
			}
		 return dto;
	}

	@Override
	public String deletePkg(int id) {
		
		Package pkg = pkgRepo.findById(id).orElseThrow();
		pkgRepo.delete(pkg);
		return "Package deleted Successfully..!!";
	}

	@Override
	public List<PackageDTO> getByCategory(String category) {
		List<PackageDTO> pkgs = new ArrayList<PackageDTO>();
		Category ct= Category.valueOf(category);
		List<Package> list = pkgRepo.findAll();
		for (Package p : list) {
			System.out.println("agency id-------======>>>" + p.getAgency().getAgencyId());
			if(p.getCategory()==ct) {
				PackageDTO pp = mapper.map(p, PackageDTO.class);
				try {
					pp.setImages(imageService.restoreImage(p.getImagePath()));
					
				} catch (Exception e) {
					System.out.println("error in image restore-------------"+e);
				}
//				pp.setAgency(p.getAgency().getAgencyId());
				pkgs.add(pp);
			}
		}

		return pkgs;
	}

	@Override
	public String saveMultipleImages(int id, MultipartFile[] pi) {
		for(MultipartFile p:pi) {
			try {
				PkgImage pp=new PkgImage();
				pp.setPkgId(id);
				pp.setImagePath(imageService.storeImage(p));
				ipRepo.save(pp);
			} catch (Exception e) {
				System.out.println("failed multiple img "+e);
			}
			
		}
		return "success";
	}

	@Override
	public List<PkgImage> getAllPkgImages(int id) {
//		public List<RoomImage> getRoomImageByHotelId(int hotelid) {
//			List<RoomImage> list = roomImageRepo.findByhotelId(hotelid);
//			ArrayList<RoomImage> updatedList = new ArrayList<RoomImage>();
//			for (RoomImage roomImage : list) {
//
//				try {
//					roomImage.setImage(imageService.restoreImage(roomImage.getImagePath()));
//				} catch (IOException e) {
//					System.out.println("Failed to load image");
//				}
//				updatedList.add(roomImage);
//
//			}
//
//			return updatedList;
//		}
		
		List<PkgImage> list= ipRepo.findByPkgId(id);
		ArrayList<PkgImage> ulist= new ArrayList<>();
		for(PkgImage p: list) {
			try {
				p.setImage(imageService.restoreImage(p.getImagePath()));
			} catch (Exception e) {
				System.out.println("Failed to load image");
			}
			ulist.add(p);
		}

		return ulist;
	}
	

}
