import './App.css'
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate()

  const handleClick = (val: string) => {
    localStorage.setItem('sharedData', JSON.stringify({ theme: 'dark' }));
    navigate(`/subapp/${val}?page=1`);
  }
  return (
    <>
      <button onClick={() => handleClick('react')}>subapp-react</button>
      <button onClick={() => handleClick('vue')}>subapp-vue</button>
    </>
  )
}

export default App
