import { Highlight } from 'prism-react-renderer'

// Empty theme so token colors come from prism.css (`.token.*` rules) instead of
// inline styles injected by prism-react-renderer.
const emptyTheme = { plain: {}, styles: [] }

export function Fence({ children, language }) {
  return (
    <Highlight
      code={children.trimEnd()}
      language={language || 'text'}
      theme={emptyTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
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
