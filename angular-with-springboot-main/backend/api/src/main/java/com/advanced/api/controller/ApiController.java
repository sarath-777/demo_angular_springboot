package com.advanced.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

	@GetMapping("/apiTest")
	public String apiTest() {
		return "test successfull";
	}

}
