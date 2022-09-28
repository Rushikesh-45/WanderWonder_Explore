package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface ImageService {

	String storeImage(MultipartFile imageFile) throws IOException;
	byte[] restoreImage(String path) throws IOException ;
	void deleteOnDifferent(String P1, String P2);
}
