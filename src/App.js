import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,
          DropdownButton,
          Dropdown,
          InputGroup,
          FormControl
} from 'react-bootstrap';
import React, { useState } from 'react';
var Query = require('./query')

function App() {
  // integer holds the action that is performed for query
  const [action, setAction] = useState(0);
  // holds inputted data
  const [data, setData] = useState(null);
  // holds name of required data
  const [dataName, setDataName] = useState('');
  // holds data displayed to user
  let empty = <div></div>
  const [display, setDisplay] = useState(empty);


  //creates title for the web page
  let title = (
    <div>
      <h1>SE3309 Assignment 4
      </h1>  
    </div>
  )


  //Creates quit button and closes window after pressed
  let quitButton = (
    <div className='quit'>
        <Button className='quit' variant="primary" onClick={
          () => {
            window.close();
          }
        }>Quit</Button>
      </div>
  );

  let dropdown = (
    // dropdown menu allows user to select what type of query to send
    <div className='dropdown'>
      <DropdownButton variant="warning" id="dropdown-basic-button" title="Select Action">
        <Dropdown.Item onClick={
          () => {
            setAction(1);
            setDataName('City');
          }
        }>Find Players Of A City</Dropdown.Item>
        <Dropdown.Item onClick={
          () => {
            setAction(2);
            setDataName('Position');
          }
        }>Find Elite Players By Position</Dropdown.Item>
        <Dropdown.Item onClick={
          () => {
            setAction(3);
            setDataName('Height');
          }
        }>Find BIG-12 Centers By Height</Dropdown.Item>
        <Dropdown.Item onClick={
          () => {
            setAction(4);
            setDataName('Age');
          }
        }>Find Athletes Over A Specific Age</Dropdown.Item>
        <Dropdown.Item onClick={
          () => {
            setAction(5);
            setDataName('Name');
          }
        }>Find Player By Name</Dropdown.Item>
      </DropdownButton>
    </div>
  );

  // input bar to allow user to enter data for the query
  let input = (
    <div className='input'>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Enter {dataName}</InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={
            (event) => {
              setData(event.target.value);
            }
          }
        />
        <Button onClick={
          // make query
          () => {
            let queryAction = action;
            let result = Query(queryAction, data);
            /*  
            
            */
            // setDisplay(resultDisplay);
          }
        }>Query</Button>
    </InputGroup>
    </div>
  );

  let resultsHeader = (
    <h2>Results: </h2>
  );


  return (
    <div className="App">
      {title}
      {quitButton}
      {dropdown}
      {input}
      {resultsHeader}
      {display}
    </div>
  );
}

export default App;
