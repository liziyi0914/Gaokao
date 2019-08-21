import react from 'react';
import Center from '../../components/Center';
import TimeBoard from '../../components/TimeBoard';

export default class extends react.Component {

	constructor() {
		super();
		this.state = {
			click: 1
		};
	}

	handleClick() {
		this.setState({
			click: this.state.click+1
		});
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
			<div style={{height:"100%",width:"100%",background:"url(https://www.lzy2002.com/seewobg.jpg)",backgroundSize:"100% 100%",color:"white",textShadow:"2px 2px 5px #444"}}>
				<div style={{width:"50%",height:"100%",float:"right"}} onClick={()=>this.handleClick()}>
					{(this.state.click%3==0)?(<TimeBoard title={cfg[0]} end={cfg[1]}/>):null}
				</div>
			</div>
		);
	}

}

