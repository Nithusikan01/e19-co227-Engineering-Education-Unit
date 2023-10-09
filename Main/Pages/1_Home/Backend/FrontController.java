package com.GES.General_Elective_Subjects.Controller;

import com.GES.General_Elective_Subjects.Exception.ResourceNotFoundException;
import com.GES.General_Elective_Subjects.Model.Front;
import com.GES.General_Elective_Subjects.Repository.FrontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class FrontController {

    @Autowired
    private FrontRepository frontRepository;

    @PostMapping("/edit")
    Front newFront(@RequestBody Front newFront){
        return frontRepository.save(newFront);
    }

    @GetMapping("/gettext")
    List<Front> getAllCourses(){
        return frontRepository.findAll();
    }

    @PutMapping("/edit/{code}")
    Front updateFront(@PathVariable String code, @RequestBody Front updatedFront) {
        // First, check if the front with the given code exists in the database
        Optional<Front> existingFront = frontRepository.findById(code);
        if (existingFront.isPresent()){
            Front frontToUpdate = existingFront.get();

            // Update the properties of the existing front with the values from the updatedFront object
            // You may want to add validation or other logic here as needed
            frontToUpdate.setSubject(updatedFront.getSubject());
            // ... continue updating other properties

            // Save the updated front object to the database
            return frontRepository.save(frontToUpdate);

        } else {
            // Handle the case where the front with the given code does not exist
            throw new ResourceNotFoundException("Front not found with code: " + code);
        }
    }
}
