import React from "react";

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

const Structure = ({course}) => {

    return(
        <div>
            <Header course={course}/>
            <Content course={course}/>
        </div>
    )
}

const Course = ({courses}) => {

    return(
        courses.course.map(course =>

            <ul style={{ listStyleType: "none" }}>
                <il key={course.id}>
                    <Structure course={course}/>
                </il>
            </ul>

        )
    )
}

export default Course;