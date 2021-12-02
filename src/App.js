import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,
          DropdownButton,
          Dropdown,
          InputGroup,
          FormControl
} from 'react-bootstrap';
import React, { useState } from 'react';
import Query from './query';

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
    <div className='dropdown'>
      <DropdownButton variant="warning" id="dropdown-basic-button" title="Select Action">
        {/* input city; input position; input height; input age; input */}
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
        }>Delete Athletes Over A Specific Age</Dropdown.Item>
        <Dropdown.Item onClick={
          () => {
            setAction(5);
            setDataName('Name');
          }
        }>Find Player By Name</Dropdown.Item>
      </DropdownButton>
    </div>
  );

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
          () => {
            let queryAction = action;
            let result = Query(action, data);
            // let resultDisplay = someShit(result) // make it into a div with all data
            // setDisplay(resultDisplay);
          }
        }>Query</Button>
    </InputGroup>
    </div>
  );

  

  return (
    <div className="App">
      {quitButton}
      {dropdown}
      {input}
      {display}
    </div>
  );
}

export default App;
