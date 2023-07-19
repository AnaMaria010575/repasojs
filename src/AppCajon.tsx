import './App.css'

function App() {

  return (
    <div>login</div>
  )
  export const App = () => {
    import React from 'react';
  
    function Header() {
      return (
        <header>
          <h1>¡Bienvenido a mi landing page!</h1>
          <p>Descripción de la página</p>
        </header>
      );
    }
  
    export default Header;
  
    return (
      <div>App</div>
    )
   
  }
  import React from 'react';
  import Header from './Header';
  
  function App() {
    return (
      <div>
        <Header />
        {/* Otros componentes */}
      </div>
    );
    import React from 'react';
  
    function NotFound() {
      return (
        <div>
          <h1>404 - Not Found!</h1>
          <p>La página que buscas no existe.</p>
        </div>
      );
    }
    
    export default NotFound;
  
  import React from 'react';
  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
  import Home from './Home';
  import About from './About';
  import Contact from './Contact';
  import NotFound from './NotFound';
  
  function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
  
  export default App;
  
  import React from 'react';
  import Home from './Home';
  import About from './About';
  import Contact from './Contact';
  import NotFound from './NotFound';
  
  function App() {
    let content;
  
    if (window.location.pathname === '/') {
      content = <Home />;
    } else if (window.location.pathname === '/about') {
      content = <About />;
    } else if (window.location.pathname === '/contact') {
      content = <Contact />;
    } else {
      content = <NotFound />;
    }
  
    return <div>{content}</div>;
  }
  
  export default App;
  
  
  }
  
}
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario con el backend
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
export default App
