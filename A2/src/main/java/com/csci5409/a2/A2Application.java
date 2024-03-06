package com.csci5409.a2;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class A2Application {

	public static void main(String[] args) {
		System.out.println(System.getenv("JDBC_DATABASE_URL"));
		SpringApplication.run(A2Application.class, args);
	}
}
