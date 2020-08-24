import React from 'react';
import './App.css';


import data from './data.json';
// import marked, { parse } from 'marked'

// const HtmlToReact = require('html-to-react');
// const HtmlToReactParser = require('html-to-react').Parser;

function App() {
  const mark = marked(`${data.landing.header.title}`)
  var isValidNode = function () {
    return true;
  };  
  var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
  var processingInstructions = [
    {
      // Custom <h1> processing
      shouldProcessNode: function (node) {
        return node.parent && node.parent.name && node.parent.name === 'h1';
      },
      processNode: function (node, children) {
        console.log('node: ', node)
        node.parent.attribs.className = 'test'
        return node.data.toUpperCase()
      }
    },
    {
      // Custom <h1> processing
      shouldProcessNode: function (node) {
        return node.parent && node.parent.name && node.parent.name === 'h2';
      },
      processNode: function (node, children) {
        console.log('node: ', node)
        node.parent.attribs.className = 'test'
        return node.data.toUpperCase()
      }
    },
    {
      // Anything else
      shouldProcessNode: function (node) {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode
    }
  ]

  var htmlToReactParser = new HtmlToReactParser();
  var reactComponent = htmlToReactParser.parseWithInstructions(mark, isValidNode, processingInstructions);

  const parseData = () => {
    // return data.landing.body.categories.map((category) => {
    //   const test = getMarkdownParser(category)
    //   console.log(test)
    //   return test
    // })
    // const json = JSON.stringify(data)
    // const mark = marked(`${json}`)
    const mark = marked(`${data.landing.title}`)

    console.log(mark )
  }

  const getMarkdownParser = (data) => {
    return marked(`${data.title}`)
  }

  return (
    <div className="App">
      <h1>Helllo world</h1>
      {/* <h1>{mark}</h1> */}
      {/* { reactComponent } */}
      { parseData() }
    </div>
  );
}

export default App;
