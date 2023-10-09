import React,{Component} from "react";
import "./Home.css";
import axios from 'axios';

class HomeUser extends Component{
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
    calculateTextareaRows = () => {
        // Calculate the number of rows based on the content's line count
        const lines = this.state.value.split('\n').length;
        return Math.max(lines, lines); // Minimum of 18 rows
    }
    

    renderDefaultView = () =>{
        return <div > {/*onDoubleClick = {this.changeEditMode}
    <button onClick = {this.changeEditMode}>Edit</button>*/}
            <div className = "home_container">
                <div className = "home-inner-container">
                    <div className = "info">
                    <textarea
                        className = "info"
                        value={this.state.value}
                        // Adjust the number of columns as needed
                        rows={this.calculateTextareaRows()} // Adjust the number of rows as needed
                        cols={100} // Adjust the number of columns as needed
                        readOnly
                        />
                    </div>
                </div>
            </div>
        
        </div>
    }
        
    render(){
    return this.state.isInEditMode ? this.renderEditView(): this.renderDefaultView()
    
    }
}


export default HomeUser;
