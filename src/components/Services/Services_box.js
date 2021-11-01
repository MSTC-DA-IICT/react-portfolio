import React, { Component } from 'react'

export default class Services_box extends Component {
    render(props) {
        return (
            <>
                <div className="card">
                    <div className="box">
                        {/* <i className="fa fa-database"></i> */}
                        <div className="card-title">{this.props.name}</div>
                        <p className="card-text">{this.props.desc}</p>
                    </div>

                </div>
            </>
        )
    }
}
