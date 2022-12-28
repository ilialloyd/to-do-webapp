package com.example.restfulwebservice.basicAuth;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AuthenticationBean {

    private  String message;

    public AuthenticationBean(String message){
        this.message =message;
    }
}
