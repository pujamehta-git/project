package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springboot.model.product;

@Repository
public interface ProductRepository extends JpaRepository<product , Long>{

}
