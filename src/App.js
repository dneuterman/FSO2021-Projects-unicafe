import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good-bad)/total
  const percentPositive = (good/total)*100

  if (total === 0) {
    return (
      <div>
        <br/>
        <p>No Feedback Given Yet</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {percentPositive}%</p>
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

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={goodFeedback} text="Good" />
      <Button handleClick={neutralFeedback} text="Neutral" />
      <Button handleClick={badFeedback} text="Bad" />
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
