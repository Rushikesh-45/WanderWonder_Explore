package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class ImageServiceImpl implements ImageService {
	@Value("${file.upload.location}")
	private String baseFolder;

	@Override
	public String storeImage(MultipartFile imageFile) throws IOException {
		String completePath = baseFolder + File.separator + imageFile.getOriginalFilename();
		System.out.println("complete path " + completePath);
		Files.copy(imageFile.getInputStream(), Paths.get(completePath), StandardCopyOption.REPLACE_EXISTING);
		return completePath;
	}

	@Override
	public byte[] restoreImage(String path) throws IOException {
		return Files.readAllBytes(Paths.get(path));
	}

	@Override
	public void deleteOnDifferent(String P1, String P2) {
		if (!P1.equals(P2)) {
			File f = new File(P1);
			f.delete();
		}
	}

}
