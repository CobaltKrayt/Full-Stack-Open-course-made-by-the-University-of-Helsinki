import React, { useState } from 'react'

const Buttons = (props) =>{

    return(
        <div>
            <button onClick={props.vote}>vote</button>
            <button onClick={props.anecdote}>next anecdote</button>
        </div>
    )
}

const Header = (props) =>{
    return(
        <h1>{props.title}</h1>
    )
}

const getRandomNumber = (max) =>{

    return Math.floor(Math.random()*max)

}

const Display = (props) =>{
    return(
        <p>
            {props.text1}{props.info}{props.text2}
        </p>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const len = anecdotes.length
    const arr = Array(len).fill(0)

    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(arr)

    const handleRandomClick = () => {
        const newSelected = getRandomNumber(anecdotes.length)
        return setSelected(newSelected)
    }
    const handleVoteClick = () =>{
        const newAnecdotes = [...vote] //THAT'S how you properly copy please never forget this
        newAnecdotes[selected]=newAnecdotes[selected]+1;
        return setVote(newAnecdotes)
    }


    return (
        <div>
            <Header title="Anecdote of the day"/>
            <Display info={anecdotes[selected]}/>
            <Display text1="has " info={vote[selected]} text2=" votes"/>
            <Buttons vote={()=>handleVoteClick()} anecdote={()=>handleRandomClick()}/>

            <Header title="Anecdote with most votes"/>
            <Display info={anecdotes[[...vote].indexOf(Math.max(...vote))]}/>
        </div>
    )
}

export default App
