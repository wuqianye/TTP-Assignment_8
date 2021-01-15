import React, { Component } from "react"
import GridContainer from "./GridContainer"

export class Main extends Component {

    constructor() {
        super()
        this.state = {
            row: 3,
            column: 3
        }
        //bindings
        this.addRow = this.addRow.bind(this)
        this.addColumn = this.addColumn.bind(this)
        this.removeRow = this.removeRow.bind(this)
        this.removeColumn = this.removeColumn.bind(this)
        this.restore = this.restore.bind(this)
    }

    /**
     * increment this.state.row by 1
     */
    addRow() {
        this.setState(state => ({row: state.row + 1}))
    }

    /**
     * increment this.state.column by 1
     */
    addColumn() {
        this.setState(state => ({column: state.column + 1}))
    }

    /**
     * decrement this.state.row by 1
     */
    removeRow() {
        if (this.state.row > 0) {
            this.setState(state => ({row: state.row - 1}))
        }
    }

    /**
     * decrement this.state.column by 1
     */
    removeColumn() {
        if (this.state.column > 0) {
            this.setState(state => ({column: state.column - 1}))
        }
    }

    /**
     * restore the original 3 x 3 grid
     */
    restore() {
        this.setState({row: 3, column: 3})
    }

    render() {
        return (
            <div id="main">
                <div>
                    <button onClick={this.addRow}>Add Row</button>
                    <button onClick={this.addColumn}>Add Column</button>
                    <button onClick={this.removeRow}>Remove Row</button>
                    <button onClick={this.removeColumn}>Remove Column</button>
                    <button onClick={this.restore}>Restore Grid</button>
                </div>
                {/* pass row and column to GridContainer for generating grid */}
                <GridContainer row={this.state.row} column={this.state.column} />
            </div>
        )
    }
}

export default Main
