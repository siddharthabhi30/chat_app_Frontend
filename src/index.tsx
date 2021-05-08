import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main } from './Main';


class ChatApp extends React.Component{

 
  
  render(){
    return(
     <Main/>
    )
  }
}


ReactDOM.render(<ChatApp />, document.getElementById("root"));