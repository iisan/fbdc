import React from "react";
import Button from "../../components/Button";
import Status from "../../components/Status";

const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isAuthenticated: false,
			list: null
		};
	}

	componentDidMount(){
		this.fetchData();
	}
	
	fetchData = () => {
		return fetch(link)
			.then(res => res.json())
			.then(res => {
				this.setState({
					list: res
				});
			});
	};
	
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
				<Button size="lg" onClick={this.handleLogin}>Login</Button>				
				<input onChange={this.handleForm} />
				<Status
					isAuthenticated={this.state.isAuthenticated}
					name={this.state.name}
				/>
			</div>
		);
	}
}

export default Home;