package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.PkgImage;

public interface PkgImageRepository extends JpaRepository<PkgImage, Integer> {

	List<PkgImage> findByPkgId(int id);
}
