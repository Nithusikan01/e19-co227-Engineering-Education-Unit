import React,{Component} from "react";
import "./Home.css";
import axios from 'axios';

class HomeAdmin extends Component{

    state = {
        value: "Some text here",
        isInEditMode: false,
        code: "Home"
    }

    componentDidMount() {
    axios.get("http://localhost:8080/gettext")
        .then(response => {
        const data = response.data;
        const subjectWithCodeHello = data.find(item => item.code === "Home");
    
        if (subjectWithCodeHello) {
            this.setState({
            value: subjectWithCodeHello.subject
            });
        } else {
            console.error("No data found with code 'hello'");
        }
        })
        .catch(error => {
        console.error("Error fetching paragraph:", error);
        });
    }
    updateComponentValue = () => {
        const updatedValue = this.refs.theTextInput.value;
      
        // Update the state with the new value
        this.setState({
          isInEditMode: false,
          value: updatedValue,
        });
      
        // Make a PUT request to update the data on the server
        axios.put(`http://localhost:8080/edit/${this.state.code}`, {
          subject: updatedValue, // Assuming subject is the property to be updated
          // Add other properties to update as needed
        })
        .then(response => {
          // Handle the successful response from the server if needed
          console.log("Data updated successfully", response);
        })
        .catch(error => {
          console.error("Error updating data:", error);
        });
    }
    calculateTextareaRows = () => {
        // Calculate the number of rows based on the content's line count
        const lines = this.state.value.split('\n').length;
        return Math.max(lines, lines); // Minimum of 18 rows
    }

    changeEditMode = () => {
        this.setState({
          isInEditMode : !this.state.isInEditMode
        }) 
    }
    renderEditView = () => {

        const buttonStyle = {
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            marginRight: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        };
      
        return (
            <div className = "home_container">
                <div className = "home-inner-container">
                    <div className = "info">
                        <div>
                            <textarea
                                defaultValue={this.state.value}
                                ref="theTextInput"
                                rows={this.calculateTextareaRows()} // Adjust the number of rows as needed
                                cols={190}
                            // Apply the defined style here
                            />
                            <button style={{ ...buttonStyle, backgroundColor: 'red' }} onClick={this.changeEditMode}>X</button>
                            <button style={{ ...buttonStyle, backgroundColor: 'green' }} onClick={this.updateComponentValue}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
          
        );
    }

    renderDefaultView = () =>{
        const buttonStyle = {
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            marginRight: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px'
        };
        return <div > {/*onDoubleClick = {this.changeEditMode}*/}
            <div className = "home_container">
                <div className = "home-inner-container">
                    <div className = "info">
                    <textarea
                        className = "info"
                        value={this.state.value}
                        // Adjust the number of columns as needed
                        rows={this.calculateTextareaRows()} // Adjust the number of rows as needed
                        cols={125} // Adjust the number of columns as needed
                        readOnly
                        />
                    </div>
                    <button style={{...buttonStyle}} onClick={this.changeEditMode}>Edit</button>
                </div>
            
            </div>
            
        </div>
    }
        
    render(){
    return this.state.isInEditMode ? this.renderEditView(): this.renderDefaultView()
    
    }
}


export default HomeAdmin;
