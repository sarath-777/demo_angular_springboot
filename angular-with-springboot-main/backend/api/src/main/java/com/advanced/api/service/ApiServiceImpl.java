package com.advanced.api.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiServiceImpl implements ApiService {

	private final RestTemplate restTemplate;

	public ApiServiceImpl() {
		this.restTemplate = new RestTemplate();
	}

	@Override
	public String temp() {
		String url = "https://meowfacts.herokuapp.com/";
		String message = restTemplate.getForObject(url, String.class);
		return message;

	}

	@Override
	public String wheatherValidation() {
		String url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/202190?apikey=5lyIAprFPLUjxppCgkqfz5ntsMsryAYE&details=true&metric=true";
		System.out.println(url);
		String validationResult = restTemplate.getForObject(url, String.class);
		return validationResult;
	}


}
