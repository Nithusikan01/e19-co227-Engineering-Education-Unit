import React, { useEffect, useState } from 'react'
import './GES.css'
import axios from "axios"


const GES = () => {

  const [courses, setCourses] = useState([])

  useEffect(() =>{
    loadCourses();
  },[]);

  const loadCourses =async () =>{
    const result=await axios.get("http://localhost:8080/getcourses2");
    setCourses(result.data);
  }

  const[courses2,setCourses2] = useState([])

  useEffect(() =>{
    loadCourses2();
  },[]);

  const loadCourses2 =async () =>{
    const result=await axios.get("http://localhost:8080/getcourses");
    setCourses2(result.data);
  }



  return (
    <div className = "Section1">
      <h2 className = "heading1">General Elective Subjects</h2>
      <p className = "para1">
        It is the student's responsibility to obtain 12 credits from General elective subjects in order to be qualified for graduation. Out of these 12 credits minimum of 2 credits should be from each category 1,2,3 (Refer to the Faculty Handbook for details)
      </p>
      <h3 className = "heading2">Categories</h3>
      <ol>
        <li>Management and Economics</li>
        <li>Arts and Humanities</li>
        <li>Political and Social Sciences</li>
      </ol>
      <p>
        Therefore students are requested to select courses appropriately in 5,6,7,8 semesters and GE short semester of computer engineering students. Some courses are not offered every semester and some courses are offered in the same slot and the exams also conducted in parallel. Therefore you should not select subjects from the same slot.
        <br></br>
        <br></br>
        Some Departments offers courses contributing to components satisfied by General Electives subjects. Some Departments make some GE subjects compulsory for their students and some GE subjects are not allowed to take. Therefore please follow the guidelines of each department, in addition to the guidelines in the Faculty Hand Book.
      </p>

      <div className = "Section2" >
        <table className = "Table">
          <thead>
            <tr>
              <th colSpan="11">Management and Economics</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Category</th>
              <th>5/7 Semsester</th>
              <th>6/8 Semster</th>
              <th>CO Short Semester</th>
              <th>Coordinating Dept</th>
              <th>Coordinator</th>
              <th>Lecturer</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course,index) =>(
                <tr>
                  <td key={index}>{index+1}</td>
                  <td>{course.code}</td>
                  <td>{course.subject}</td>
                  <td>{course.credits}</td>
                  <td>{course.category}</td>
                  <td>{course.semester_5_7}</td>
                  <td>{course.semester_6_8}</td>
                  <td>{course.cO_Short_Semester}</td>
                  <td>{course.coordinating_Dept}</td>
                  <td>{course.coordinator}</td>
                  <td>{course.lecturer}</td>
                </tr>
              ))
            }
          </tbody>  
        </table>
        <br></br>
        <br></br>
        <table className = "Table">
          <thead>
            <tr>
              <th colSpan="11">Arts and Humanities & Political and Social Sciences</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Category</th>
              <th>5/7 Semsester</th>
              <th>6/8 Semster</th>
              <th>CO Short Semester</th>
              <th>Coordinating Dept</th>
              <th>Coordinator</th>
              <th>Lecturer</th>
            </tr>
          </thead>
          <tbody>
            {
              courses2.map((Course2,index) =>(
                <tr>
                  <td key={index}>{index+1}</td>
                  <td>{Course2.code}</td>
                  <td>{Course2.subject}</td>
                  <td>{Course2.credits}</td>
                  <td>{Course2.category}</td>
                  <td>{Course2.semester_5_7}</td>
                  <td>{Course2.semester_6_8}</td>
                  <td>{Course2.cO_Short_Semester}</td>
                  <td>{Course2.coordinating_Dept}</td>
                  <td>{Course2.coordinator}</td>
                  <td>{Course2.lecturer}</td>
                </tr>
              ))
            }
          </tbody>  
        </table>
        <br></br>
        <p className ="alert"> ! ! ! EF509,EF521,EF524 will not be offered from 2024 onwards. </p>
        
        
        <h3>Special Requirements</h3>
        
       
        <p>
          <ul>
            <li><b>EF528: Introduction to Digital Art</b> - An only a limited number of student will be registered on a first-come-first-served basis</li>
          </ul>  
        </p>
      </div>
      <div className = "Section3">
        <h3>The List of Courses offered under General Electives in the Past</h3>
        {/*<Courses_not_offered/>*/}
        <ul>
          <li>EF503: Critical Thinking and Writing Skills</li>
          <li>EF505: Management in Practice with Case Studies</li>
          <li>EF507: Government and Politics of Sri Lanka</li>
          <li>EF508: Political Issues in Sri Lanka</li>
          <li>EF510: Technology and Economic Development</li>
          <li>EF512: Rural Economic Development and Technology</li>
          <li>EF514: Cinema and Television</li>
          <li>EF515: Theatre and Drama</li>
          <li>EF517: Project in Fine Arts</li>
          <li>EF522: Sri Lankan Technology</li>
          <li>EF526: Marketing & Financial Management</li>
        </ul>
      </div>
    </div>
    
  )
}

export default GES
