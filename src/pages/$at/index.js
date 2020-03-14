import react from 'react';
import Center from '../../components/Center';
import TimeBoard from '../../components/TimeBoard';

export default class extends react.Component {

	light = {
		bg: "white",
		text: "black"
	};

	dark = {
		bg: "black",
		text: "white"
	};

	isDark = false;

	constructor() {
		super();
		this.state = {
			...this.light
		};
	}

	toggleStyle() {
		if(this.isDark) {
			this.setState(this.light);
		} else {
			this.setState(this.dark);
		}
		this.isDark = !this.isDark;
	}

	render() {
		var at = this.props.match.params.at;
		return (
			<div style={{height:"100%",backgroundColor:this.state.bg,color:this.state.text}} onClick={()=>this.toggleStyle()}>
				<Center><TimeBoard cfg={at}/></Center>
			</div>
		);
	}

}

