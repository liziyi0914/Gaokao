import react from 'react';

class Layout extends react.Component {


	isLight = true;

	toggleStyle() {
		var light = {
			fc: 'black',
			bgc: 'white'
		}
		var dark = {
			fc: 'white',
			bgc: 'black'
		}
		this.isLight = !this.isLight;
		this.setState(this.isLight?light:dark);
	}

	constructor() {
		super();
		this.state = {
			fc: 'black',
			bgc: 'white'
		}
	}

	render() {
		return (
			<div style={{height: '100%',position: 'relative'}}>
			{this.props.children}
			</div>
		);
	}

}



export default Layout;
