import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}


const Total = (props) => {
    return (
        <p>
            {props.name}
        </p>
    )
}

const Parts = ({course}) =>{
    return(
        course.parts.map(part =>
            <p>
            <li key={course.parts.id}>
                {part.name}{" "}{part.exercises}
            </li>
            </p>
        )
    )
}

const Content = ({ course }) => {
    const total = course.parts.map(part => part.exercises).reduce((a,b) => a + b )
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>
                <Parts course={course} />
                <li>
                    <Total name={<b>total of {total} exercises</b>}/>
                </li>
            </ul>

        </div>
    )
}

const Course = ({course}) => {

    return(
        <div>
            <Header course={course}/>
            <Content course={course}/>
        </div>
    )
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }


    return <Course course={course} />
}

export default App
