import react from 'react';
import Center from '../../components/Center';
import TimeBoard from '../../components/TimeBoard';

export default class extends react.Component {

	render() {
		var at = this.props.match.params.at;
		var cfg;
		if(at=="gaokao") {
			cfg = ["高考","2020-06-07 09:00"];
		} else {
			cfg = eval(new Buffer(decodeURIComponent(at),'base64').toString());
		}
		return (
			<div style={{height:"100%",background:"url(https://open.saintic.com/api/bingPic)",backgroundSize:"100% 100%",color:"white",textShadow:"2px 2px 5px #444"}}>
				<Center><TimeBoard title={cfg[0]} end={cfg[1]}/></Center>
			</div>
		);
	}

}

