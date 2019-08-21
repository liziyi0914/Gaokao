import react from 'react';
import { Row, Col } from 'antd';
import Center from './Center';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

class Line extends react.Component {

	render() {
		return (
			<Row>
			<Col span={12} style={{textAlign: 'right',fontSize:'1.5em',fontWeight: 'bold'}}>
			{this.props.time}
			</Col>
			<Col span={12} style={{textAlign: 'left'}}>
			{this.props.name}
			</Col>
			</Row>
		);
	}

}

class TimeBoard extends react.Component {

	end = moment("2020-06-07 9:00","YYYY-MM-DD HH:mm");

	constructor() {
		super();
		this.state = {
			now: moment(),
			week: 0,
			day: 0,
			hour: 0,
			min: 0,
			sec: 0,
			msec: 0
		};
	}


	update() {
		var now = moment();
		var range = moment.range(now,this.end);
		this.setState({
			now: now,
			week: range.diff('weeks',true).toFixed(2),
			day: range.diff('days',true).toFixed(2),
			hour: range.diff('hours',true).toFixed(2),
			min: range.diff('minutes',true).toFixed(2),
			sec: range.diff('seconds',true).toFixed(3),
			msec: range.diff('millseconds',true)
		});
	}

	render() {
		this.end = moment(this.props.end,"YYYY-MM-DD HH:mm");
		setInterval(()=>this.update(),1);
		return (
			<div style={{textAlign:'center'}}>
				<div>{new String(this.state.now)}</div>
				<div style={{fontSize:'2.5em',fontWeight: 'bold'}}>距离{this.props.title}还有</div>
				<Line name="周" time={this.state.week}/>
				<Line name="天" time={this.state.day}/>
				<Line name="时" time={this.state.hour}/>
				<Line name="分" time={this.state.min}/>
				<Line name="秒" time={this.state.sec}/>
				<Line name="毫秒" time={this.state.msec}/>
			</div>
		);
	}
}

export default TimeBoard;
