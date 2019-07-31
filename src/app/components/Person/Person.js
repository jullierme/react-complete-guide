import React from 'react'

const Person = props => {
    return (
        <div>
            <p>I'm a Person! {props.name}</p>
            <p>asdfsadf</p>
            <p>2345342</p>
            <p>2345345</p>

            <p>{props.children}</p>
        </div>
    )
}

export default Person
