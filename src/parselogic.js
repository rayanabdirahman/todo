import marked, { parse } from 'marked'
import { HtmlToReact } from 'html-to-react'
import { HtmlToReactParser } from 'html-to-react/parser'

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

// const isValidNode = () => true 
// const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React)
// const processingInstructions = () => (
//   [
//     {
//       // Custom <h1> processing
//       shouldProcessNode: function (node) {
//         return node.parent && node.parent.name && node.parent.name === NODE_NAME.H1
//       },
//       processNode: function (node, children) {
//         node.parent.attribs.className = 'test'
//         return node.data.toUpperCase()
//       }
//     },
//   ]
// )