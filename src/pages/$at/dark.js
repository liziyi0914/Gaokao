import react from 'react';
import Center from '../../components/Center';
import TimeBoard from '../../components/TimeBoard';

export default class extends react.Component {

	render() {
		var at = this.props.match.params.at;
		return (
			<div style={{height:"100%",backgroundColor:"black",color:"white"}}>
				<Center><TimeBoard cfg={at}/></Center>
			</div>
		);
	}

}

