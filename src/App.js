import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = ({text, value}) => {
  return (
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)

  const total = good + neutral + bad
  const average = (good-bad)/total
  const percentPositive = (good/total)*100

  const checkForFeedback = () => {
    if (total > 0) {
      return (
        <>
        <Statistic text="Good" value={good}/>
        <Statistic text="Neutral" value={neutral}/>
        <Statistic text="Bad" value={bad}/>
        <Statistic text="Total" value={total}/>
        <Statistic text="Average" value={average}/>
        <Statistic text="Percent Positive" value={percentPositive}/>
        </>
      )
    } else {
      return <><p>No Feedback Given Yet</p></>
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={goodFeedback} text="Good" />
      <Button handleClick={neutralFeedback} text="Neutral" />
      <Button handleClick={badFeedback} text="Bad" />
      <br/>
      <h1>Statistics</h1>
      {checkForFeedback()}
    </div>
  )
}

export default App
