import React, { Component } from 'react'

export default class Skill_box extends Component {
    render(props) {
        return (
            <div>
                <div className="item">
                    <h6 className="technology">{this.props.skillname}</h6>

                    {/* <span>{item[0]}</span> */}
                    <div className="percentage">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: this.props.perce }}
                        ></div>
                      </div>
                      <div>{this.props.perce}</div>
                    </div>
                </div>
            </div>
        )
    }
}
