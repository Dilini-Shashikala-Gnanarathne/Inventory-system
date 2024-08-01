package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {
    @Id
    private int id;
    private String username;
    private String password;
    private String email;
    private String phoneNumber;
    private String address;
    private String gender;
    private String country;
    private String role;
}
