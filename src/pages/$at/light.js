import react from 'react';
import Center from '../../components/Center';
import TimeBoard from '../../components/TimeBoard';

export default class extends react.Component {

	render() {
		var at = this.props.match.params.at;
		return (
			<div style={{height:"100%",backgroundColor:"white",color:"black"}}>
				<Center><TimeBoard cfg={at}/></Center>
			</div>
		);
	}

}

