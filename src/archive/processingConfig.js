import React from 'react';
// import Button from './components/Button'
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

export const config = [
  {
    // Custom <h1> processing
    shouldProcessNode: function (node) {
      return node.parent && node.parent.name && node.parent.name === NODE_NAME.H1
    },
    processNode: function (node, children) {
      const { data } = node
      console.log('data: ', data)
      // return <Button name={data} />
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


