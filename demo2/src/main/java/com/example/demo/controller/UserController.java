package com.example.demo.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1")


public class UserController {
    @GetMapping("/getUser")
    public String getUser(){
        return "Äll Users Dilini";
    }
    @PostMapping("/createUser")
    public String createUser(){
        return "create";
    }
}
