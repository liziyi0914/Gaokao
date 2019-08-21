import react from 'react';

export default class extends react.Component {

	render() {
		return (<div style={{margin: 'auto',position: 'relative',top: '25%',transform: 'translateY(-25%)'}}>{this.props.children}</div>);
	}

}
