package com.example.webservices.restfulwebservices.jwt.resource;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
public class JwtTokenRequest implements Serializable {

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY3MzAzNzc2NiwiaWF0IjoxNjcyNDMyOTY2fQ.EsL3xS1fLHYNzNAbfExc5xjgmopKLmRMan5Sgo8LI3nbxdeFl7ZJ4yPoSg6SRBxwbJJ_3QDuvsrgtIp8B4U0Cw"
//    }

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

    public JwtTokenRequest() {
        super();
    }


}
