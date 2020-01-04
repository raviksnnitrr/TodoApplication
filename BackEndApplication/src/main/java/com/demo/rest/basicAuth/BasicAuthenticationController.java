package com.demo.rest.basicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.demo.rest.webservices.bean.AuthenticationBean;
import com.demo.rest.webservices.bean.HelloWorldBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	
	@GetMapping(path = "/basic-auth")
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("Some Error happened. Please contact support");
		return new AuthenticationBean("Successfully Authenticated");
		
	}
}
