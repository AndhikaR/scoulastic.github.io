import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './content/header'; 

class Homepage extends React.Component {
	render() {
		return (
			<Header/>
		)
	}
}

ReactDOM.render(
	<Homepage/>,
	document.getElementById('app')
)