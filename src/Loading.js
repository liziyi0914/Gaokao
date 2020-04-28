import react from 'react';
import {
	Spin
} from 'antd';
import styles from './Loading.css';

export default class extends react.Component {

	render() {
		return (
		<div className={styles.page}>
			<Spin tip='加载中……' size='large'/>
		</div>
		);
	}

}
