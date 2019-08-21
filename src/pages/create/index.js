import react from 'react';
import Link from 'umi/link';

class Create extends react.Component {

	constructor() {
		super();
		this.state = {
			title: "",
			time: ""
		}
	}

	render() {
		var link = encodeURIComponent(new Buffer('["'+this.state.title+'","'+this.state.time+'"]').toString('base64'));
		return (
		<div>
			<p>
				Title<input type="text" onChange={(e)=>{this.setState({title:e.target.value})}}/>
			</p>
			<p>
				Time<input type="text" onChange={(e)=>{this.setState({time:e.target.value})}}/>
			</p>
			<Link to={'/'+link}>{link}</Link>
		</div>
		);
	}

}

export default Create;
