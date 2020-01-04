package com.demo.rest.webservices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.rest.webservices.bean.Todo;

@Repository
public interface TodoJPARepository extends JpaRepository<Todo, Long>{
	List<Todo> findByUsername(String username);

}
