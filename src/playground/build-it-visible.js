class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            disabled: true
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                disabled: !prevState.disabled
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggler</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.disabled ? 'Show' : 'Hide'} Details</button>
                {!this.state.disabled && <p>Here are the deets!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));