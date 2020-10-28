import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [pros, setPros] = useState([""])
  const [cons, setCons] = useState([""])

  const editPros = (e, index) => {
    pros[index] = e.target.value
    if (e.target.value === '') {
      pros.splice(index, 1)
    }
    if (pros[pros.length-1] !== '') {
      pros.push('')
    }
    setPros([...pros])
  }

  const editCons = (e, index) => {
    cons[index] = e.target.value
    if (e.target.value === '') {
      cons.splice(index, 1)
    }
    if (cons[cons.length-1] !== '') {
      cons.push('')
    }
    setCons([...cons])
  }

  return (
    <div className="app">
      <div className="title">Should I eat at McDonalds?</div>
      <div className="prosConsTitle">
        <div className="eachProsConsTitle titleBorder">PROS</div>
        <div className="eachProsConsTitle">CONS</div>
      </div>
      <div className="prosCons">
        <div className="eachProsCons titleBorder">
          <ol>
            {pros.map((pro, index) => (
              <li key={index} className="eachItem">
                <input type="text" value={pro} onChange={(e) => editPros(e, index)}/>
              </li>
            ))}
          </ol>
        </div>
        <div className="eachProsCons">
          <ol>
            {cons.map((con, index) => (
              <li key={index} className="eachItem">
                <input type="text" value={con} onChange={(e) => editCons(e, index)}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App
