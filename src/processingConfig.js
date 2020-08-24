import React from 'react';
import Button from './components/Button'
import Title from './components/Title'

const HtmlToReact = require('html-to-react');
// const HtmlToReactParser = require('html-to-react').Parser;
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

const NODE_NAME = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  P: 'p',
  STRONG: 'strong',
  BOLD: 'b',
  ITALIC: 'i',
  UNDERSCORE: 'u'
}

// TODO: DO YOUR OWN FUNCTION TO RENDER HTML TO REACT COMPONENT


export const config = [
  {
    // Custom <h1> processing
    shouldProcessNode: function (node) {
      if (node.parent && node.parent.name) {
        const { id } = node.parent.attribs
        const { data } = node
        
        const escapedText = data.toLowerCase().replace(/[^\w]+/g, '');
        if (id === escapedText) {
          // console.log('matched id: ', true)
          // return node.parent && node.parent.name && node.parent = <Button name={data} />
          node.parent = <Button name={data} />
          return node.parent
          // return <Button name={data} /> 
        }

        console.log('node parent: ', node)
      }




      // const escapedText = data.toLowerCase().replace(/[^\w]+/g, '');
      // if (node.attribs.id === escapedText) {
      //   console.log('matched id: ', true)
      // }

      // console.log('node parent: ', node)
      // return node.parent && node.parent.name && node.parent.name === 'h1';
    },
    processNode: function (node, children) {
      const { data } = node
      const escapedText = data.toLowerCase().replace(/[^\w]+/g, '');

      // if (node.parent.attribs.id === escapedText) {
      //   console.log(true)
      //   return <Button name={data} />
      // }
      
      console.log('id: ', escapedText)
      console.log('data: ', node)

      return <Title level={1} text={data} />
    }
  },
  {
    // Custom <h1> processing
    shouldProcessNode: function (node) {
      return node.parent && node.parent.name && node.parent.name === NODE_NAME.H2
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


