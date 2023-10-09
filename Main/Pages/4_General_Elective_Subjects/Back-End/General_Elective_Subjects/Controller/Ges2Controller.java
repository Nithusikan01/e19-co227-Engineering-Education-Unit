package com.GES.General_Elective_Subjects.Controller;

import com.GES.General_Elective_Subjects.Model.GES;
import com.GES.General_Elective_Subjects.Model.Ges2;

import com.GES.General_Elective_Subjects.Repository.Ges2Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class Ges2Controller {

    @Autowired
    private Ges2Repository ges2Repository;

    @PostMapping("/user2")
    Ges2 newGes(@RequestBody Ges2 newGes){
        return ges2Repository.save(newGes);
    }

    @GetMapping("/getcourses2")
    List<Ges2> getAllCourses(){
        return ges2Repository.findAll();
    }

    @PutMapping("/user2/{code}")
    Ges2 editGes(@PathVariable String code, @RequestBody Ges2 newGes){
        Ges2 ges2 = ges2Repository.findById(code).get();
        ges2.setSubject(newGes.getSubject());
        ges2.setCredits(newGes.getCredits());
        ges2.setCategory(newGes.getCategory());
        ges2.setSemester_5_7(newGes.getSemester_5_7());
        ges2.setSemester_6_8(newGes.getSemester_6_8());
        ges2.setcO_Short_Semester(newGes.getcO_Short_Semester());
        ges2.setCoordinating_Dept(newGes.getCoordinating_Dept());
        ges2.setCoordinator(newGes.getCoordinator());
        ges2.setLecturer(newGes.getLecturer());
        return ges2Repository.save(ges2);
    }

    @DeleteMapping("/user2/{code}")
    void deleteGes(@PathVariable String code){
        ges2Repository.deleteById(code);
    }
}
