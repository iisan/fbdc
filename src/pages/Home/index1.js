import React from "react";
import Button from "../../components/Button";

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isAuthenticated: false,
			name: "FBDC Jakarta"
		};
	}

	handleLogin = () => {
		this.setState({
			isAuthenticated: true
		});
	}

	handleForm = event => {
		this.setState({
			name: event.target.value
		});
	}

	render(){
		return(
			<div>
				<Button onClick={this.handleLogin}>Login</Button>				
				<input onChange={this.handleForm} />
				<div>Hi, {this.state.isAuthenticated ? this.state.name : "User"}</div>
			</div>
		);
	}
}

export default Home;