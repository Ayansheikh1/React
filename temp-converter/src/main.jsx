import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleButton from './component/TemperatureConverter.jsx'
import TemperatureConverter from './component/TemperatureConverter.jsx'

createRoot(document.getElementById('root')).render(
  <TemperatureConverter />
)
