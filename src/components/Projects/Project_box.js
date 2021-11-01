import React, { Component } from 'react'
import "./Projects.css";

export default class Project_box extends Component {
    render(props) {
        return (
            <div>
                <div className="card">
                    <img src={this.props.imageUrl} />
                    <div className="info">
                        <h1>{this.props.projectname}</h1>
                        <p>Tech Stack: {this.props.techstack}</p>
                        <a href={this.props.codelink}>Github</a> |
                        <a href={this.props.livelink}> Live</a>
                    </div>
                </div>
            </div>
        )
    }
}
