package com.GES.General_Elective_Subjects.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Front {

    @Id
    private String code;
    private String subject;

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
}
