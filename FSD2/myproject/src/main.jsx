import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './lectures/lec/App.jsx'

import App from './lectures/lec1/App.jsx'
// import App from './lectures/lec2/App.jsx'
// import App from './lectures/lec3/App.jsx'
// import App from './lectures/lec4/App.jsx'
// import App from './lectures/lec5/App.jsx'
// import App from './lectures/lec6/App.jsx'
// import App from './lectures/lec7/App.jsx'
// import App from './lectures/lec8/App.jsx'
// import App from './lectures/lec9/App.jsx'
// import App from './lectures/lec10/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
