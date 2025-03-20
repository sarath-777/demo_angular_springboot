package com.advanced.api.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.advanced.api.service.ApiServiceImpl;

@RestController
public class MeowFactsController {

	private static final Logger logger = LoggerFactory.getLogger(MeowFactsController.class);

	@Autowired
	private ApiServiceImpl apiService;

	@GetMapping("/meowfact")
	public String getMeowFact() {
		logger.info("getMeowFact method called");

		try {
			String result = apiService.temp();
			logger.info("API call successful. Result: {}", result);
			return result;
		} catch (Exception e) {
			logger.error("Error calling API: ", e);
			return "Error: " + e.getMessage();
		}
	}

	@GetMapping("/test")
	public String test() {
		logger.info("Test endpoint called");
		return "Test successful";
	}
}