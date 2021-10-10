import React, { Component } from 'react'

export default class Skill_box extends Component {
    render(props) {
        return (
            <div>
                <div className="bars">
                    <div className="info">
                    <span>{this.props.skillname}</span>
                    <span>{this.props.perce}</span>
                    </div>
                    <div className="line html"></div>
                </div>
            </div>
        )
    }
}
