import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Displaycount> </Displaycount>

      <ExternalUsers> </ExternalUsers>
    
    </div>
  );
}


function ExternalUsers(){

const[users, setUsers]=useState([]);
useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setUsers(data))}, [])



const instyle ={
margin: "100px"
}



return(
<div style={instyle}> 
 <h3> External Users</h3>
 {
   users.map(user=> <>
   <Users name={user.name} email={user.email}></Users>
   
  </>)
 }
  
</div>

)
}

function Users (props) {


  const instyle = {
    backgroundColor: "yellow",
    width:"300px",
    marginTop:"50px",
    marginLeft:"auto",   
    marginRight:"auto",
    padding:"30px",
    borderRadius:"40px"
  
    }

  return (
  <div style={instyle}>
  <h3>Name:{props.name}</h3>
  <h6>Email:{props.email}</h6>
  </div>
   
  )
  
}


function Displaycount () {

  const instyle = {
  backgroundColor: "pink",
  width:"300px",
  marginTop:"50px",
  marginLeft:"auto",   
  marginRight:"auto",
  padding:"30px",
  borderRadius:"40px"

  }

const btnstyle ={   
background:"none",
marginLeft:"10px",
border:"1px solid white",
borderRadius:"10px",
color:"white",
padding:"10px"
  }

  const [count, newstate]=useState(0);

  const handleIncreased = ()=>{
    const newCount = count +1;
    newstate(newCount);
  
  }
  const handleDecreased = () => {
   
   const newCount = count-1;
   newstate(newCount);
    
  }

  return (
 <div style={instyle}>

   <h3>Counter: {count} </h3>
   <button style={btnstyle} onClick={handleIncreased}>Increase</button>
   <button style={btnstyle} onClick={handleDecreased}>Decrease</button>
</div>
   
  
  )
}

export default App;
