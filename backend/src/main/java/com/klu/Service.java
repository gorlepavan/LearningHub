package com.klu;

import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {
    
    @Autowired
    UserRepo repo1;
    
    public String insertUser(User user) {
        repo1.save(user);
        return "Inserted Successfully";
    }
    
    public UserResponse retrieveUser(User user) {
        try {
            User user2 = repo1.findById(user.getUsername()).get();
            if (new Cryptography().decryptData(user2.getPassword()).equals(user.getPassword())) {
                return new UserResponse(user2.getUsername(), user2.getRole());
            } else {
                return new UserResponse(user.getUsername(), 0); // Invalid role
            }
        } catch (Exception e) {
            return new UserResponse(user.getUsername(), 0); // Invalid role
        }
    }
}