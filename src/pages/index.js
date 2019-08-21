import react from 'react';
import Center from '../components/Center';
import TimeBoard from '../components/TimeBoard';

class Index extends react.Component {

	render() {
		return <Center><TimeBoard end={"2020-06-07 09:00"} title={"2020年高考"}/></Center>
	}
}

export default Index;
