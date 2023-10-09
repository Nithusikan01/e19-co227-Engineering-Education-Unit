import React, { useEffect, useState } from 'react'
import './GES.css'
import axios from "axios"
import Courses_Not_Offered_Admin from './Courses_Admin'
import Alert_Course_Not_Offered_Admin from './Alert_Course_Not_Offered_Admin'


const GESAdmin= () => {

  const [courses, setCourses] = useState([])
  const[courses2,setCourses2] = useState([])
  const [selectedCourse1, setSelectedCourse1] = useState(null); // State to track the selected course for editing
  const [selectedCourse2, setSelectedCourse2] = useState(null); // State to track the selected course for editing
  const [formData1, setFormData1] = useState({
    code: '',
    subject: '',
    credits: '',
    category: '',
    semester_5_7: '',
    semester_6_8: '',
    cO_Short_Semester: '',
    coordinating_Dept: '',
    coordinator: '',
    lecturer: '',
  });
  const [formData2, setFormData2] = useState({
    code: '',
    subject: '',
    credits: '',
    category: '',
    semester_5_7: '',
    semester_6_8: '',
    cO_Short_Semester: '',
    coordinating_Dept: '',
    coordinator: '',
    lecturer: '',
  });

  const [showAddForm1, setShowAddForm1] = useState(false); // State for the first table's popup form
  const [showAddForm2, setShowAddForm2] = useState(false); // State for the second table's popup form


  /* Handling get mapping */
  useEffect(() =>{
    loadCourses();
  },[]);

  const loadCourses =async () =>{
    const result=await axios.get("http://localhost:8080/getcourses2");
    setCourses(result.data);
  }

  useEffect(() =>{
    loadCourses2();
  },[]);

  const loadCourses2 =async () =>{
    const result=await axios.get("http://localhost:8080/getcourses");
    setCourses2(result.data);
  }
  /* Get Mapping finished */

  /* Add new courses to the table*/
  const handleAddCourse1 = async () => {
    // Send a POST request to add a new course to the first table
    await axios.post('http://localhost:8080/user2', formData1);
    loadCourses(); // Reload the course list
    setFormData1({
      code: '',
      subject: '',
      credits: '',
      category: '',
      semester_5_7: '',
      semester_6_8: '',
      cO_Short_Semester: '',
      coordinating_Dept: '',
      coordinator: '',
      lecturer: '',
    });
    setShowAddForm1(false); // Close the popup form
  };

  const handleAddCourse2 = async () => {
    // Send a POST request to add a new course to the second table
    await axios.post('http://localhost:8080/user', formData2);
    loadCourses2(); // Reload the course list
    setFormData2({
      code: '',
      subject: '',
      credits: '',
      category: '',
      semester_5_7: '',
      semester_6_8: '',
      cO_Short_Semester: '',
      coordinating_Dept: '',
      coordinator: '',
      lecturer: '',
    });
    setShowAddForm2(false); // Close the popup form
  };


  const handleEditClick1 = (course) => {
    setSelectedCourse1(course); // Set the selected course for editing
  };
  const handleEditClick2 = (course) => {
    setSelectedCourse2(course); // Set the selected course for editing
  };

  const handleEditFormSubmit2 = async (updatedCourse) => {
    // Send a PUT request to update the course
    await axios.put(`http://localhost:8080/user/${updatedCourse.code}`, updatedCourse);
    loadCourses(); // Reload the course list
    setSelectedCourse2(null); // Clear the selected course
  };
  const handleEditFormSubmit1 = async (updatedCourse) => {
    // Send a PUT request to update the course
    await axios.put(`http://localhost:8080/user2/${updatedCourse.code}`, updatedCourse);
    loadCourses(); // Reload the course list
    setSelectedCourse1(null); // Clear the selected course
  };

  const handleDeleteClick1 = async (code) => {
    // Send a DELETE request to delete the course
    await axios.delete(`http://localhost:8080/user/${code}`);
    loadCourses(); // Reload the course list
  };
  const handleDeleteClick2 = async (code) => {
    // Send a DELETE request to delete the course
    await axios.delete(`http://localhost:8080/user2/${code}`);
    loadCourses(); // Reload the course list
  };





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
              <th colSpan="13">Management and Economics</th>
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course,index) =>(
                <tr key = {index}>
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
                  <td><button onClick={() => handleEditClick1(course)} style={{backgroundColor: 'green' }}>Edit</button></td>
                  <td><button onClick={() => handleDeleteClick2(course.code)}style={{backgroundColor: 'red' }}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>  
        </table>
        <br></br>
        {/* Input form for adding a new course to the first table */}
        <button onClick={() => setShowAddForm1(true)}  style={{
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          marginRight: '5px',
          cursor: 'pointer',
        }}>Add Category 1 courses</button>

              {showAddForm1 && (
                <div className="add-course-popup">
                  <h3>Add New Course (Arts and Humanities & Political and Social Sciences)</h3>
                  <form onSubmit={handleAddCourse1}>
                    {/* Input fields */}
                    <div className="form-row">
                      <div className="form-col">
                        <label htmlFor="code">Code:</label>
                        <input
                          type="text"
                          id="code"
                          value={formData1.code}
                          onChange={(e) =>
                            setFormData1({ ...formData1, code: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="subject">Subject:</label>
                        <input
                          type="text"
                          id="subject"
                          value={formData1.subject}
                          onChange={(e) =>
                            setFormData1({ ...formData1, subject: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="credits">Credits:</label>
                        <input
                          type="number"
                          id="credits"
                          value={formData1.credits}
                          onChange={(e) =>
                            setFormData1({ ...formData1, credits: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="category">Category:</label>
                        <input
                          type="text"
                          id="category"
                          value={formData1.category}
                          onChange={(e) =>
                            setFormData1({ ...formData1, category: e.target.value })
                          }
                        />
                      </div>
                      {/* ... (previous code) */}
                      <div className="form-col">
                        <label htmlFor="semester_5_7">5/7 Semester:</label>
                        <input
                          type="text"
                          id="semester_5_7"
                          value={formData1.semester_5_7}
                          onChange={(e) =>
                            setFormData1({ ...formData1, semester_5_7: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="semester_6_8">6/8 Semester:</label>
                        <input
                          type="text"
                          id="semester_6_8"
                          value={formData1.semester_6_8}
                          onChange={(e) =>
                            setFormData1({ ...formData1, semester_6_8: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="cO_Short_Semester">CO Short Semester:</label>
                        <input
                          type="text"
                          id="cO_Short_Semester"
                          value={formData1.cO_Short_Semester}
                          onChange={(e) =>
                            setFormData1({ ...formData1, cO_Short_Semester: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="coordinating_Dept">Coordinating Dept:</label>
                        <input
                          type="text"
                          id="coordinating_Dept"
                          value={formData1.coordinating_Dept}
                          onChange={(e) =>
                            setFormData1({ ...formData1, coordinating_Dept: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="coordinator">Coordinator:</label>
                        <input
                          type="text"
                          id="coordinator"
                          value={formData1.coordinator}
                          onChange={(e) =>
                            setFormData1({ ...formData1, coordinator: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="lecturer">Lecturer:</label>
                        <input
                          type="text"
                          id="lecturer"
                          value={formData1.lecturer}
                          onChange={(e) =>
                            setFormData1({ ...formData1, lecturer: e.target.value })
                          }
                        />
                      </div>
                      {/* ... (remaining code) */}

                    </div>
                    <div className="button-row">
                      <button type="submit">Add Course</button>
                      <button onClick={() => setShowAddForm1(false)}>Cancel</button>
                    </div>
                  </form>
                </div>
              )}

          {selectedCourse1 && (
            <div className="edit-form">
              <h3>Edit Course</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEditFormSubmit1(selectedCourse1);
                }}
              >
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="code">Code:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse1.code}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, code: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="subject">Subject:</label>
                    <input
                      type="text"
                      id="subject"
                      value={selectedCourse1.subject}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, subject: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="credits">Credits:</label>
                    <input
                      type="number"
                      id="credits"
                      value={selectedCourse1.credits}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, credits: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">Category:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse1.category}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, category: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">5/7 Semsester:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse1.semester_5_7}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, semester_5_7: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">6/8 Semster:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse1.semester_6_8}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, semester_6_8: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="subject">CO Short Semester:</label>
                    <input
                      type="text"
                      id="subject"
                      value={selectedCourse1.cO_Short_Semester}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, cO_Short_Semester: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="credits">Coordinating Dept:</label>
                    <input
                      type="text"
                      id="credits"
                      value={selectedCourse1.coordinating_Dept}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, coordinating_Dept: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">Coordinator:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse1.coordinator}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, coordinator: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">Lecturer:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse1.lecturer}
                      onChange={(e) =>
                        setSelectedCourse1({ ...selectedCourse1, lecturer: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="button-row">
                  <button type="submit">Save</button>
                  <button onClick={() => setSelectedCourse1(null)}>Cancel</button>
                </div>
              </form>
            </div>
          )}
          <br></br>
        
        
        <br></br>
        <br></br>
        <table className = "Table">
          <thead>
            <tr>
              <th colSpan="13">Arts and Humanities & Political and Social Sciences</th>
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              courses2.map((Course2,index) =>(
                <tr key= {index}>
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
                  <td><button onClick={() => handleEditClick2(Course2)} style={{backgroundColor: 'green' }}>Edit</button></td>
                  <td><button onClick={() => handleDeleteClick1(Course2.code)}style={{backgroundColor: 'red' }}>Delete</button></td>
                  
                </tr>
              ))
            }
          </tbody>  
        </table>
        <br></br>

        {/* Button to open the popup form for the second table */}
        <button onClick={() => setShowAddForm2(true)}  style={{
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          marginRight: '5px',
          cursor: 'pointer',
        }}>Add Category 2,3 Courses</button>

              {showAddForm2 && (
                <div className="add-course-popup">
                  <h3>Add New Course (Arts and Humanities & Political and Social Sciences)</h3>
                  <form onSubmit={handleAddCourse2}>
                    {/* Input fields */}
                    <div className="form-row">
                      <div className="form-col">
                        <label htmlFor="code">Code:</label>
                        <input
                          type="text"
                          id="code"
                          value={formData2.code}
                          onChange={(e) =>
                            setFormData2({ ...formData2, code: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="subject">Subject:</label>
                        <input
                          type="text"
                          id="subject"
                          value={formData2.subject}
                          onChange={(e) =>
                            setFormData2({ ...formData2, subject: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="credits">Credits:</label>
                        <input
                          type="number"
                          id="credits"
                          value={formData2.credits}
                          onChange={(e) =>
                            setFormData2({ ...formData2, credits: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="category">Category:</label>
                        <input
                          type="text"
                          id="category"
                          value={formData2.category}
                          onChange={(e) =>
                            setFormData2({ ...formData2, category: e.target.value })
                          }
                        />
                      </div>
                      {/* ... (previous code) */}
                      <div className="form-col">
                        <label htmlFor="semester_5_7">5/7 Semester:</label>
                        <input
                          type="text"
                          id="semester_5_7"
                          value={formData2.semester_5_7}
                          onChange={(e) =>
                            setFormData2({ ...formData2, semester_5_7: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="semester_6_8">6/8 Semester:</label>
                        <input
                          type="text"
                          id="semester_6_8"
                          value={formData2.semester_6_8}
                          onChange={(e) =>
                            setFormData2({ ...formData2, semester_6_8: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="cO_Short_Semester">CO Short Semester:</label>
                        <input
                          type="text"
                          id="cO_Short_Semester"
                          value={formData2.cO_Short_Semester}
                          onChange={(e) =>
                            setFormData2({ ...formData2, cO_Short_Semester: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="coordinating_Dept">Coordinating Dept:</label>
                        <input
                          type="text"
                          id="coordinating_Dept"
                          value={formData2.coordinating_Dept}
                          onChange={(e) =>
                            setFormData2({ ...formData2, coordinating_Dept: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="coordinator">Coordinator:</label>
                        <input
                          type="text"
                          id="coordinator"
                          value={formData2.coordinator}
                          onChange={(e) =>
                            setFormData2({ ...formData2, coordinator: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-col">
                        <label htmlFor="lecturer">Lecturer:</label>
                        <input
                          type="text"
                          id="lecturer"
                          value={formData2.lecturer}
                          onChange={(e) =>
                            setFormData2({ ...formData2, lecturer: e.target.value })
                          }
                        />
                      </div>
                      {/* ... (remaining code) */}

                    </div>
                    <div className="button-row">
                      <button type="submit">Add Course</button>
                      <button onClick={() => setShowAddForm2(false)}>Cancel</button>
                    </div>
                  </form>
                </div>
              )}

          {selectedCourse2 && (
            <div className="edit-form">
              <h3>Edit Course</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEditFormSubmit2(selectedCourse2);
                }}
              >
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="code">Code:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse2.code}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, code: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="subject">Subject:</label>
                    <input
                      type="text"
                      id="subject"
                      value={selectedCourse2.subject}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, subject: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="credits">Credits:</label>
                    <input
                      type="number"
                      id="credits"
                      value={selectedCourse2.credits}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, credits: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">Category:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse2.category}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, category: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">5/7 Semsester:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse2.semester_5_7}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, semester_5_7: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">6/8 Semster:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse2.semester_6_8}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, semester_6_8: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="subject">CO Short Semester:</label>
                    <input
                      type="text"
                      id="subject"
                      value={selectedCourse2.cO_Short_Semester}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, cO_Short_Semester: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="credits">Coordinating Dept:</label>
                    <input
                      type="text"
                      id="credits"
                      value={selectedCourse2.coordinating_Dept}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, coordinating_Dept: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">Coordinator:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse2.coordinator}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, coordinator: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="code">Lecturer:</label>
                    <input
                      type="text"
                      id="code"
                      value={selectedCourse2.lecturer}
                      onChange={(e) =>
                        setSelectedCourse2({ ...selectedCourse2, lecturer: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="button-row">
                  <button type="submit">Save</button>
                  <button onClick={() => setSelectedCourse2(null)}>Cancel</button>
                </div>
              </form>
            </div>
          )}

        <p className ="alert"> <Alert_Course_Not_Offered_Admin/> </p>
        
        
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
        <Courses_Not_Offered_Admin/>
        
      </div>
    </div>
    
  )
}

export default GESAdmin
