package com.demo.rest.webservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.demo.rest.webservices.bean.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping(path = "/helloWorld")
	public String helloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path = "/helloWorld-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some Error happened. Please contact support");
		return new HelloWorldBean("Hello World");
		
	}
	
	@GetMapping(path = "/helloWorld-bean/path-variable/{name}")
	public HelloWorldBean helloWorldBean(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
