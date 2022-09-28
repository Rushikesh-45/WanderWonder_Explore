package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString
@NoArgsConstructor
@Table(name = "pkg_images")
public class PkgImage {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private int pkgId;
	@Column(length = 300)
	private String imagePath;
	@Transient
	private byte[] image;
	public PkgImage(int pkgId, String imagePath) {
		super();
		this.pkgId = pkgId;
		this.imagePath = imagePath;
	}
	
	public PkgImage(Integer id, int pkgId, String imagePath, byte[] image) {
		super();
		this.id = id;
		this.pkgId = pkgId;
		this.imagePath = imagePath;
		this.image = image;
	}
	
	
}
