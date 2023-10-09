import NavBar from "./Components/Navbar"
import './App.css';
import menuData from "./Components/MenuData";

function App() {
  return (
    <div className="App">
      hello world
     <NavBar menuData={menuData} />
    </div>
  );
}

export default App;

/*Add this link to the index.html file 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
*/
