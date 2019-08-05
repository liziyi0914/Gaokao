import react from 'react';
import TimeBoard from '../../components/TimeBoard';

class At extends react.Component {

	render() {
		var cfg = eval(new Buffer(decodeURIComponent(this.props.match.params.at),'base64').toString());
		return <TimeBoard title={cfg[0]} end={cfg[1]}/>;
	}

}

export default At;
