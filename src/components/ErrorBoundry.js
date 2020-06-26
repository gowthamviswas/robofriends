import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor (props) {
		super(props)
		this.state = {
			hassError: false
		}
	}

	componentDidCatch(error, info) {
		this.setstate({ hassError: true })
	}

	render() {
		if (this.state.hassError) {
			return <h1>oooops. That is not good</h1>
		}
		return this.props.childrens
	}
}

export default ErrorBoundry;