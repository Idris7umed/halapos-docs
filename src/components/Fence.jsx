import { Fragment } from 'react'
import Highlight, { defaultProps, themes } from 'prism-react-renderer'

export function Fence({ children, language }) {
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      language={language}
      code={children.trimEnd()}
    >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {/* <span>{i + 1}</span> */}
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
  )
}

// export function Fence({ children, language }) {
//   return (
//     <Highlight
//       {...defaultProps}
//       code={children.trimEnd()}
//       language={language}
//       theme={undefined}
//     >
//       {({ className, style, tokens, getTokenProps }) => (
//         <pre className={className} style={style}>
//           <code>
//             {tokens.map((line, index) => (
//               <Fragment key={index}>
//                 {line.map((token, index) => (
//                   <span key={index} {...getTokenProps({ token })} />
//                 ))}
//                 {'\n'}
//               </Fragment>
//             ))}
//           </code>
//         </pre>
//       )}
//     </Highlight>
//   )
// }
