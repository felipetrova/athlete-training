import { useEffect, useState } from 'react';

export function App() {
const [greeting, setGreeting] = useState('');

useEffect(() => {
  fetch('http://localhost:3333/api/users')
    .then((res) => res.text())
    .then(setGreeting);
}, []);

  return (
    <div className="App">
      {greeting}
    </div>
  );
}

export default App;
