import react from 'react';
import TimeBoard from '../components/TimeBoard';

class Index extends react.Component {

	render() {
		return <TimeBoard end={"2020-06-07 09:00"} title={"2020年高考"}/>
	}
}

export default Index;
