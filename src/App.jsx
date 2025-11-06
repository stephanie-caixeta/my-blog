import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import ArticleList from "./components/ArticleList"

function App() {
  const [count, setCount] = useState(3)

  return (
    <>
      <Header />
      <ArticleList />
    </>
  )
}

export default App
