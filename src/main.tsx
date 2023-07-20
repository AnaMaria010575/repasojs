
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { AppRoutes } from './routes/App.routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>
)
