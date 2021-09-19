import React, { useState } from 'react'

const Header = (props) => {

  return (<h1>{props.course}</h1>)
}

const StatisticLine = (props) => {
    return(
        <tr>
            <td>{props.text}</td><td> {props.value} </td>
        </tr>
    )
}


const Statistics = (props) => {
    if(props.displayStats.stats[0].data===0) {
        return(<p>No feedback given</p>)
    }
    return(
        <div>
            <table>
                <tbody>
                        <StatisticLine text="Good: " value={props.displayData.buttons[0].data}/>
                        <StatisticLine text="Neutral: " value={props.displayData.buttons[1].data}/>
                        <StatisticLine text="Bad: " value={props.displayData.buttons[2].data}/>

                        <StatisticLine text="All: " value={props.displayStats.stats[0].data}/>
                        <StatisticLine text="Average: " value={props.displayStats.stats[1].data}/>
                        <StatisticLine text="Positive: " value={props.displayStats.stats[2].data}/>
                </tbody>
            </table>
        </div>
    )
}

const Button = (props) => {
    return(
        <div>
            <button onClick={props.hGoodClick}>good</button>
            <button onClick={props.hNeutralClick}>neutral</button>
            <button onClick={props.hBadClick}>bad</button>
        </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickData = {
      buttons:[
          {
              name:'Good:',
              data: good
          },
          {
              name:'Neutral: ',
              data: neutral
          },
          {
              name:'Bad: ',
              data: bad
          }
      ]
  }
  const statData = {
      stats:[
          {
              name:'All: ',
              data: good+neutral+bad
          },
          {
              name:'Average: ',
              data: (good+(-1*bad))/(good+neutral+bad)
          },
          {
              name:'Positive: ',
              data:( good/(good+neutral+bad) + ' %')
          }
      ]
  }

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  return (
    <div>
        <Header course={"get feedback"} />

        <Button hGoodClick={() => handleGoodClick()} hNeutralClick={() => handleNeutralClick()} hBadClick={() => handleBadClick()}/>

        <Header course={"statistics"} />

        <Statistics displayData={clickData} displayStats={statData} />

    </div>
  )
}

export default App
