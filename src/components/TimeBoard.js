import react from 'react';
import {
	Menu,
	Dropdown,
	Row,
	Col
} from 'antd';
import Link from 'umi/link';
import Center from './Center';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

class Line extends react.Component {

	render() {
		return (
			<Row>
			<Col span={12} style={{textAlign: 'right',fontSize:'3.5em',fontWeight: 'bold'}}>
			{this.props.time}
			</Col>
			<Col span={12} style={{textAlign: 'left',fontSize:'3.5em',fontWeight: 'bold'}}>
			{this.props.name}
			</Col>
			</Row>
		);
	}

}

class TimeBoard extends react.Component {

	end = moment("2020-07-07 9:00","YYYY-MM-DD HH:mm");
	pid = null;

	static defaultProps = {
		cfg: 'gaokao',
		t: '[NULL]'
	};

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
		var t = this.props.t;
		var now = t=='[NULL]'?moment():moment(t,"YYYY-MM-DD HH:mm");
		var range = moment.range(now,this.end);
		this.setState({
			now: now,
			week: range.diff('weeks',true).toFixed(2),
			day: range.diff('days',true).toFixed(0),
			hour: range.diff('hours',true).toFixed(1),
			min: range.diff('minutes',true).toFixed(2),
			sec: range.diff('seconds',true).toFixed(2),
			msec: range.diff('millseconds',true)
		});
	}

	componentDidMount() {
		if(this.pid==null)setInterval(()=>this.update(),500);
	}

	componentWillUnmount() {
		clearInterval(this.pid);
	}

	render() {
		var at = this.props.cfg;
		var menu = (
			<Menu>
				<Menu.Item>
					<Link to={"/"+at}>Index</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to={"/"+at+"/light"}>Light</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to={"/"+at+"/dark"}>Dark</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to={"/"+at+"/bg"}>Background</Link>
			    </Menu.Item>
				<Menu.Item>
					<Link to="/create">Create</Link>
			    </Menu.Item>
			</Menu>
			);
		var cfg;
		if(at=="gaokao") {
			cfg = ["高考","2021-06-07 09:00"];
		} else {
			cfg = eval(new Buffer(decodeURIComponent(at),'base64').toString());
		}
		this.end = moment(cfg[1],"YYYY-MM-DD HH:mm");
		return (
			<div style={{textAlign:'center'}}>
			<div>{new String(this.state.now)}</div>
			<Dropdown overlay={menu} trigger={['contextMenu']}>
				<div style={{fontSize:'2.5em',fontWeight: 'bold'}}>距离{cfg[0]}还有</div>
			</Dropdown>
			<Line name="天" time={this.state.day}/>
			<Line name="小时" time={this.state.hour}/>
			</div>
		);
	}
}

export default TimeBoard;
