import React from 'react'
import showdown from 'showdown'
import Title from '../components/Title'
import Button from '../components/Button'

const HtmlToReact = require('html-to-react')
const HtmlToReactParser = require('html-to-react').Parser

const converter = new showdown.Converter({ noHeaderId: true })

const isValidNode = () => true
const preprocessingInstructions = [
  {
    shouldPreprocessNode: function (node) {
      console.log('data:', node)
      return  node.name && node.name === 'h1'
    },
    preprocessNode: function (node) {
      // node.attribs = {id: `preprocessed-${node.name}`};
      node.attribs = {id: `preprocessed-title`};
    },
  },
  {
    shouldPreprocessNode: function (node) {
      console.log('data:', node)
      return  node.name && node.name === 'h2'
    },
    preprocessNode: function (node) {
      // node.attribs = {id: `preprocessed-${node.name}`};
      node.attribs = {id: `preprocessed-title`};
    },
  },
]

const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
const processingInstructions = [
  {
    shouldProcessNode: function (node) {
      // return node.attribs && node.attribs.id === `preprocessed-h1`;
      return node.attribs && node.attribs.id === `preprocessed-title`;
    },
    processNode: function(node, children, index) {
      // console.log('node: ', node)
      const data = children[0]
      // return <Title level={node.name} text={data} />
      return <Button name={data} />
    },
  },
  {
    shouldProcessNode: function (node) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode,
  },
]

export const parseMarkdownToComponent = (data) => {
  const htmlToReactParser = new HtmlToReactParser()
  const parsedMarkdownData = converter.makeHtml(`${data}`)
  return htmlToReactParser.parseWithInstructions(
    parsedMarkdownData,
    isValidNode,
    processingInstructions,
    preprocessingInstructions
  )
}