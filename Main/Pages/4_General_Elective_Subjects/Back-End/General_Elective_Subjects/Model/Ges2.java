package com.GES.General_Elective_Subjects.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;




@Entity
public class Ges2 {

    @Id
    private String code;
    private String subject;
    private int credits;
    private String category;
    private String semester_5_7;
    private String semester_6_8;
    private String cO_Short_Semester;
    private String coordinating_Dept;
    private String coordinator;
    private String lecturer;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public int getCredits() {
        return credits;
    }

    public void setCredits(int credits) {
        this.credits = credits;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSemester_5_7() {
        return semester_5_7;
    }

    public void setSemester_5_7(String semester_5_7) {
        this.semester_5_7 = semester_5_7;
    }

    public String getSemester_6_8() {
        return semester_6_8;
    }

    public void setSemester_6_8(String semester_6_8) {
        this.semester_6_8 = semester_6_8;
    }

    public String getcO_Short_Semester() {
        return cO_Short_Semester;
    }

    public void setcO_Short_Semester(String cO_Short_Semester) {
        this.cO_Short_Semester = cO_Short_Semester;
    }

    public String getCoordinating_Dept() {
        return coordinating_Dept;
    }

    public void setCoordinating_Dept(String coordinating_Dept) {
        this.coordinating_Dept = coordinating_Dept;
    }

    public String getCoordinator() {
        return coordinator;
    }

    public void setCoordinator(String coordinator) {
        this.coordinator = coordinator;
    }

    public String getLecturer() {
        return lecturer;
    }

    public void setLecturer(String lecturer) {
        this.lecturer = lecturer;
    }
}
