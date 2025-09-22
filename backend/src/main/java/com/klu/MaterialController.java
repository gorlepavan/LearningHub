package com.klu;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/materials")
public class MaterialController {

    @Autowired
    private MaterialRepository materialRepository;

    @PostMapping
    public Material addMaterial(@RequestBody Material material) {
        material.setUploadDate(LocalDate.now());
        return materialRepository.save(material);
    }
}

