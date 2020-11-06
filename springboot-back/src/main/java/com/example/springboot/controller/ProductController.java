package com.example.springboot.controller;

//import java.util.HashMap;
import java.util.List;
//import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.springboot.model.product;
import com.example.springboot.repository.ProductRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import com.example.springboot.exception.ResourceNotFoundException;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
	@Autowired
	private ProductRepository productRepository;
	
	// get all product
	@GetMapping("/prod1")
	public List<product> getProduct(){
		return productRepository.findAll();
	}		
	
	// crea te product rest api
	@PostMapping("/prod1")
	public product createProduct(@RequestBody product product) {
		return productRepository.save(product);
	}
	
	@GetMapping("/prod1/{id}")
	public ResponseEntity<product> getProductById(@PathVariable Long id) {
		product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(product);
	}
	  
		
	
	
}
