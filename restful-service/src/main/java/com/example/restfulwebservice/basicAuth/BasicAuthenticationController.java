package com.example.restfulwebservice.basicAuth;

import com.example.restfulwebservice.basicAuth.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {


    @GetMapping("/basicauth")
    public AuthenticationBean helloWorldBean() {
        return  new AuthenticationBean("You are authenticated");
//        return new HelloWorldBean("Hello World bean");
    }




}
