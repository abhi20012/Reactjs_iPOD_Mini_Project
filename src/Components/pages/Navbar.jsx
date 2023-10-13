import React from "react";
import '../../css/Navbar.css';
import BatteryImg from '../../static/battery.png';

class Navbar extends React.Component{
	constructor(){
		super();
		this.state = {
			time : this.getCurrentTime()
		}
		this.stateId = "";
	}

	componentDidMount(){
		const {noty} = this.props;
		if(noty === true){
			return;
		}

		this.stateId = setInterval(() => {
			this.setState({time: this.getCurrentTime()});
		}, 60000);
	};

	componentDidUpdate(){
		const {noty, setNoty} = this.props;
		
		if(noty === true){
			setTimeout(() => {
				setNoty();
			}, 1000)
		}
	};

	componentWillUnmount(){
		const {noty} = this.props;
		if(noty !== true){
			clearInterval(this.stateId);
		}
	}

	getCurrentTime(){
		const date = new Date();
		var time = date.getHours() + ":" + date.getMinutes();
		if(date.getMinutes() < 10){
			time = date.getHours() + ":0" + date.getMinutes();
		}
		return time;
	}

	render(){
		const{time} = this.state;
		const {playing, noty, notifyText} = this.props;
		
		return(
			<div className="appbar">
				{<h5 className="heading"> iPOD <i className="fas fa-wifi"></i></h5>}
				{ noty===true && <h5 className="notification">{notifyText}</h5> }
				{noty === false && <h3 className="time"> {time} </h3>}
				{
					<div className="right">
						{
							playing  ? <h5 className="play-pause-nav">
										 <i className="fas fa-play"></i>
									  </h5> : <h5 className="play-pause-nav">
										<i className="fas fa-pause"></i>
									  </h5>
						}
						<img className="battery" src={BatteryImg} alt="battery"/>
					</div>
				}
				
			</div>
		)
	}
}

export default Navbar;