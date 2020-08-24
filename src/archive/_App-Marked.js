import React from 'react';
import './App.css';

// TODO: USE SHOWDOWN FOR SPEC REQUIRMENTS

import data from './data.json';
import marked from 'marked'
import { config as markdownProcessingInstruction }from './processingConfig'

const HtmlToReactParser = require('html-to-react').Parser;

function parseMarkdownToComponent(data) {
  const isValidNode = () => true;
  const parsedMarkdownData = marked(`${data}`)
  const htmlToReactParser = new HtmlToReactParser();
  return htmlToReactParser.parseWithInstructions(parsedMarkdownData, isValidNode, [...markdownProcessingInstruction]);
}

function App() {
  return (
    <div className="App">
      <h1>Helllo world</h1>
      {/* { reactComponent } */}
      <div className="header" >
        { parseMarkdownToComponent(data.landing.header.title) }
        { parseMarkdownToComponent(data.landing.body.categories[0].title) }
      </div>
      <div className="categories">
        {
          data.landing.body.categories.map((category, index) => (
            
            <div className="category" key={`${category}--${index}`}>
              <img src={category.icon} />
              { parseMarkdownToComponent(category.title) }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
