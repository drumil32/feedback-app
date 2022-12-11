import React from 'react'
import Card from '../shared/Card';
import {Link} from 'react-router-dom';

function About() {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>this is a react app on which you give feedbacks about projects.</p>
                <Link to="/">home</Link>
            </div>
        </Card>
    )
}

export default About