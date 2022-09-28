package com.app.service;

import com.app.dto.AdminDTO;

public interface IAdminService {
	AdminDTO findByEmail(String email);
}
