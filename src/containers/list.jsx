import React, { Component } from 'react'

class List extends Component {
    render () {
        return (
            <div className="list clearfix">
                <div className="listbox col-xs-4">
                    <div>
                        <h4>三天两夜</h4>
                        <p>——</p>
                        <span className="dow"><b>></b></span>
                    </div>
                </div>
                <div className="listbox col-xs-4">
                    <div>
                        <h4>独享包车游</h4>
                        <p>——</p>
                        <span className="dow"><b>></b></span>
                    </div>
                    
                </div>
                <div className="listbox col-xs-4">
                    <div>
                        <h4>国内自驾游</h4>
                        <p>——</p>
                        <span className="dow"><b>></b></span>
                    </div>
                </div>

            </div>
        )
    }
}

export default List