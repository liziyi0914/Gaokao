import react from 'react';

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
			<a href={'/'+link}>{link}</a>
		</div>
		);
	}

}

export default Create;
