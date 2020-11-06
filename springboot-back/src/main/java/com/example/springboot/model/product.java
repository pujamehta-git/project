package com.example.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "prod1")
public class product {
	@Id
	private long id;
	@Column(name = "Title")
	private String Title;
	@Column(name = "Type")
	private String Type;
	@Column(name = "Brand")
	private String Brand;
	@Column(name = "Price")
	private long price;
	@Column(name = "Image")
	private String image;
	
    public product() {
		
	}
	
	
	public product(long id, String title, String type, String brand, long price, String image) {
	super();
	this.Title = title;
	this.Type = type;
	this.Brand = brand;
	this.price = price;
	this.image = image;
    }


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public String getType() {
		return Type;
	}
	public void setType(String type) {
		Type = type;
	}
	public String getBrand() {
		return Brand;
	}
	public void setBrand(String brand) {
		Brand = brand;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	}

