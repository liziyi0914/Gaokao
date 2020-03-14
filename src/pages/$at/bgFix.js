import react from 'react';
import Center from '../../components/Center';
import TimeBoard from '../../components/TimeBoard';
import styles from './bg.css';

export default class extends react.Component {

	render() {
		var at = this.props.match.params.at;
		return (
			<div className={styles.bg}>
				<Center><TimeBoard cfg={at} t='2020-02-28 09:00'/></Center>
			</div>
		);
	}

}

