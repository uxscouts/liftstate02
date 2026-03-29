import { useState } from 'react'
import Parent from "./components/Parent";
import Parent2 from "./components/Parent2";
import Parent3 from "./components/Parent3";
import Parent4 from "./components/Parent4";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

{/**
    Lifting state in React involves moving shared data from 
    child components to their closest common ancestor

    The parent component then manages the state and passes 
    it and any state-updating functions down to the child 
    components as props. 

    Here are simple examples:

    Example 1: Sibling Components Sharing Data
    A common scenario is when two sibling components need access 
    to the same piece of data, or one component needs to display 
    data changed by the other. 

    Goal: An Input component updates a message displayed in a 
    Display component.

    Approach: The state (message) is moved to the Parent component. 
    The parent passes the message to the Display component as a 
    prop and a function to update the message to the Input component as a prop

*/}

function App() {

  return (
    <>
      <div className="container">
      <Parent/>
       <hr/>
       <Parent2/>
       <hr/>
       <Parent3/>
       <hr/>
       <Parent4/>
      </div>
    </>
  )
}

export default App
