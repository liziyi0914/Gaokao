import react from 'react';
import Center from '../../components/Center';
import TimeBoard from '../../components/TimeBoard';
import styles from './bglg.css';

export default class extends react.Component {

	render() {
		var at = this.props.match.params.at;
		return (
			<div className={styles.bg}>
				<Center><TimeBoard cfg={at}/></Center>
			</div>
		);
	}

}

