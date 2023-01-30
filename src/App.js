import './App.css'

import {useState} from 'react'

// Replace your code here
function App() {
  const [array, setArray] = useState([])

  let word = ''

  function change(e) {
    word = e.target.value

    return word
  }

  function click() {
    setArray([...array, word])
  }

  return (
    <div>
      <input type="text" onChange={change} />
      <button type="button" onClick={click}>
        save
      </button>

      <div>
        {array.map(each => (
          <li>
            <p>
              {each} : {each.length}
            </p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default App
