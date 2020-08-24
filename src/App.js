import React from 'react'
import './App.css'
import data from './data.json'
import { parseMarkdownToComponent } from './config/config'

function App() {
  return (
    <div className="App">
      {/* <h1>Helllo world</h1> */}
      <div className="header">
        <img className="" src={data.landing.header.icon} />
        { parseMarkdownToComponent(`${data.landing.header.title}`) }
      </div>
    </div>
  );
}

export default App;
