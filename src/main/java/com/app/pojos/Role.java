package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Entity
@Table(name = "sec_roles")
@Setter
@Getter
@ToString
@EqualsAndHashCode
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long roleId;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private UserRole roleName;
}
