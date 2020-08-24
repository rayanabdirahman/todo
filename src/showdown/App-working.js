import React from 'react';
import './App.css';
import data from '../data.json';
import showdown from 'showdown'

import Button from '../components/Button'
import Title from '../components/Title'

const converter = new showdown.Converter({ noHeaderId: false })
var HtmlToReact = require('html-to-react');
var HtmlToReactParser = require('html-to-react').Parser;

const isValidNode = function () {
  return true;
};

// const preprocessingInstructions = [
//   {
//     shouldPreprocessNode: function (node) {
//       console.log('node: ', node)
//       const escapedText = data.toLowerCase().replace(/[^\w]+/g, '')
//       return node.attribs && node.attribs['data-process'] === 'shared';
//     },
//     preprocessNode: function (node) {
//       node.attribs = {id: `preprocessed-${node.attribs.id}`,};
//     },
//   }
// ];

// const preprocessingInstructions = [
//   {
//     shouldPreprocessNode: function (node) {
//       console.log('data: ', node.data)
//       const escapedText = node.data && node.data.toLowerCase().replace(/[^\w]+/g, '')

//       // console.log('node: ', node.children && node.children[0])
//       // console.log('node: ', node)
//       // const escapedText = data.toLowerCase().replace(/[^\w]+/g, '')
//       // return node.attribs && node.attribs['data-process'] === 'shared';
//       return node.attribs && node.attribs['id'] === escapedText;
//       // return node.parent && node.parent.name && node.parent.name === 'h1';
//     },
//     preprocessNode: function (node) {
//       // console.log('data: ', node.data)
//       const escapedText = node.data.toLowerCase().replace(/[^\w]+/g, '')
//       node.parent.attribs = {id: `preprocessed-${escapedText}`,};
//     },
//   }
// ];

const preprocessingInstructions = [
  {
    shouldPreprocessNode: function (node) {
      const escapedText = node.children && node.children[0].data.toLowerCase().replace(/[^\w]+/g, '')
      console.log('data:', node)
      return node.attribs && node.attribs['id'] === escapedText;
      // return node.attribs && node.attribs['id'] === 'wewanttokeepyousafefromscams';
    },
    preprocessNode: function (node) {
      node.attribs = {id: `preprocessed-${node.attribs.id}`,};
    },
  }
];


const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
const processingInstructions = [
  {
    shouldProcessNode: function (node) {
      const escapedText = node.children && node.children[0].data.toLowerCase().replace(/[^\w]+/g, '')
      return node.attribs && node.attribs.id === `preprocessed-${escapedText}`;
      // return node.attribs && node.attribs.id === 'preprocessed-wewanttokeepyousafefromscams';
    },
    processNode: function(node, children, index) {
      // console.log('node: ', node)
      const data = children[0]
      return <Title level={node.name} text={data} />
      // return <Button name={data} />
    },
  },
  {
    shouldProcessNode: function (node) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode,
  },
];

function App() {

  function parseMarkdownToComponent(data) {
    // const isValidNode = () => true;
    const parsedMarkdownData = converter.makeHtml(`${data}`)
    const htmlToReactParser = new HtmlToReactParser();

    console.log('parsed: ', parsedMarkdownData)

    // var htmlInput = `<div class="row">
    //     <div id="first" data-process="shared">
    //       <p>Sample For First</p>
    //     </div>
    //     <div id="second" data-process="shared">
    //       <p>Sample For Second</p>
    //     </div>
    //   </div>`;


    return htmlToReactParser.parseWithInstructions(parsedMarkdownData, isValidNode, processingInstructions,preprocessingInstructions)
    // return htmlToReactParser.parseWithInstructions(htmlInput, isValidNode, processingInstructions,preprocessingInstructions)
  }

  return (
    <div className="App">
      <h1>Helllo world</h1>
      { parseMarkdownToComponent(`${data.landing.header.title}`) }
    </div>
  );
}

export default App;
