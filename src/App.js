import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <main>
      <body>
        <Nav></Nav>
        <div className="wp_content">
          <Landing></Landing>
        </div>
      </body>
    </main>
  )
}

export default App;
