import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  container: {
    padding: '2rem',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  title: {
    color: '#1a1a1a',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  description: {
    color: '#4a4a4a',
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  testBox: {
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  },
  successText: {
    color: '#22c55e',
    fontWeight: 'bold',
  },
})

const App = () => {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>Todo App v3</h1>
      <p {...stylex.props(styles.description)}>Phase 0: StyleX Validation</p>

      <div {...stylex.props(styles.testBox)}>
        <p {...stylex.props(styles.successText)}>✓ StyleX is working!</p>
        <p>
          If you can see styled text and colored boxes, StyleX is configured
          correctly.
        </p>
      </div>

      <div {...stylex.props(styles.testBox)}>
        <p>Test HMR: Try changing colors or text in App.tsx</p>
      </div>
    </div>
  )
}

export default App
