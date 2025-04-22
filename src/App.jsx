import { useState } from 'react'

import './App.css'

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const resetar = () => setContador(0);
  return (
    <>
     <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar} style={{ margin: '0 10px' }}>Decrementar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
    </>
  )
}

export default App
