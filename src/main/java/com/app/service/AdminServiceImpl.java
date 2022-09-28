package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dto.AdminDTO;
import com.app.pojos.Admin;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private ModelMapper mapper;
	@Override
	public AdminDTO findByEmail(String email) {
		Admin admin = adminRepo.findByEmail(email);
		return mapper.map(admin, AdminDTO.class);
	}

}
