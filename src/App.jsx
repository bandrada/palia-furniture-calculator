import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FurnitureSet from './components/FurnitureSet.jsx';

function App() {
  const [count, setCount] = useState(0);
  const sets = [
    {
      name: 'test',
      id: 1,
      items: [
        {
          id: 1,
          name: 'chair',
          cost: [
            {
              quantity: 3,
              material: 'wood'
            },
            {
              quantity: 1,
              material: 'iron'
            }
          ]
        },
        {
          id: 3,
          name: 'rug',
          cost: [
            {
              quantity: 4,
              material: 'wool'
            }
          ]
        }
      ]
    },
    {
      name: 'apples',
      id: 2,
      items: [
        {
          id: 1,
          name: 'chair2',
          cost: [
            {
              quantity: 3,
              material: 'wood'
            },
            {
              quantity: 1,
              material: 'iron'
            }
          ]
        },
        {
          id: 2,
          name: 'table2',
          cost: [
            {
              quantity: 5,
              material: 'wood'
            },
            {
              quantity: 1,
              material: 'iron'
            }
          ]
        }
      ]
    }
  ];

  const furnitureSetLists = sets.map(set => 
    <li key={set.id}>
      <FurnitureSet set={set}/>
    </li>
  );

  return (
    <>
      <ul>{furnitureSetLists}</ul>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
