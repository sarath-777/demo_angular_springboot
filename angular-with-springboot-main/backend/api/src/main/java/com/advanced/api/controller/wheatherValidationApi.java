package com.advanced.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.advanced.api.service.ApiServiceImpl;

@RestController
public class wheatherValidationApi {

	@Autowired
	private ApiServiceImpl apiServiceImpl;



	@GetMapping("/wheatherCheck")
	public String wheatherValidation() {
		return apiServiceImpl.wheatherValidation();
	}

}
