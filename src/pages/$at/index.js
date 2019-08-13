import react from 'react';
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
		var cfg;
		if(at=="gaokao") {
			cfg = ["高考","2020-06-07 09:00"];
		} else {
			cfg = eval(new Buffer(decodeURIComponent(at),'base64').toString());
		}
		return (
			<div style={{height:"100%",backgroundColor:this.state.bg,color:this.state.text}} onClick={()=>this.toggleStyle()}>
				<TimeBoard title={cfg[0]} end={cfg[1]}/>
			</div>
		);
	}

}

