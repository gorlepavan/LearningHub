package com.klu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin
public class AppController {
    
    @Autowired
    private Service obj;
    
    Cryptography cryp = new Cryptography();

    @PostMapping("/register")
    public String fun1(@RequestBody User user) {
        user.setPassword(cryp.encryptData(user.getPassword()));
        return obj.insertUser(user);
    }
    
    @PostMapping("/check")
    public ResponseEntity<UserResponse> fun3(@RequestBody User user) {
        UserResponse userResponse = obj.retrieveUser(user);
        return ResponseEntity.ok(userResponse);
    }
}