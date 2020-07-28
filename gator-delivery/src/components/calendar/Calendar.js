import React, {useState, Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = (props) => {
	const [date, setDate] = useState(new Date());
	
	const [hr1, setHour1] = useState(12);
	const [min1, setMin1] = useState(0);
	const [sec1, setSec1] = useState(0);
	
	const [hr2, setHour2] = useState(12);
	const [min2, setMin2] = useState(0);
	const [sec2, setSec2] = useState(0);
	
	const [before, setBefore] = useState("AM");
	const [after, setAfter] = useState("PM");
	
	const onChange = date => {
		setDate(date)
	};
	/*const onClickDay = day => {
		
	};*/
	
	const confirmChoice = () => {
		console.log(date);
		var values = [hr1, min1, sec1, hr2, min2, sec2];
		var pass = true;
		for(var i = 0; i < values.length; i++){
			console.log(values[i]);
			if(Number(values[i]) === parseInt(Number(values[i]), 10)){
				if(values[i] < 0 || values[i] > 12){
					pass = false;
					console.log("Error: input is out of bounds. Enter an integer in between 0 and 12");
				}
			}else{
				pass = false;
				console.log("Error: input is not an integer.");
			}
		}
		
		console.log(before)
		console.log(after)
	}
	return(
		<div>
			<div class = "donk">
				<div>
					<Calendar 
						onChange = {onChange}
						selectRange = {true}
						value = {date}
					/>
				</div>
			</div>
			<div>
				&nbsp;
			</div>
			<div class = "donk">
				Click on a date twice or select a range of dates.
			</div>
			<div>
				&nbsp;
			</div>
			<div class = "donk">
			--------------------------------------------------------------------------------------------------
			</div>
			{/* check if date is null to prevent errors */}
			{date.length > 1 && date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) == date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) ? (
				/* same day */
				<div class = "donk">
					<div>
						Selected day:
					</div>
					<div>
						&nbsp;
					</div>
					<div>
						&nbsp;&nbsp;&nbsp;&nbsp;{date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(","))}
						&nbsp;&nbsp;--&nbsp;&nbsp;
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "12"
							onChange={e => setHour1(e.target.value)}
						/>:
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "00"
							onChange={e => setMin1(e.target.value)}
						/>:
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "00"
							onChange={e => setSec1(e.target.value)}
						/>&nbsp;
						<select id="inputAMPM1" onChange={e => setBefore(e.target.value)}>
							<option defaultValue>AM</option>
							<option value="PM">PM</option>
						</select>&nbsp;to&nbsp;
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "11"
							onChange={e => setHour2(e.target.value)}
						/>:
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "59"
							onChange={e => setMin2(e.target.value)}
						/>:
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "59"
							onChange={e => setSec2(e.target.value)}
						/>&nbsp;
						<select id="inputAMPM2" onChange={e => setAfter(e.target.value)}>
							<option defaultValue>PM</option>
							<option value="AM">AM</option>
						</select>
					</div>
				</div>
			) : (
				/* range of dates */
				/* add the dropdown boxes */
				date[1] == null ? (
					<div class = "donk">
						<div>
							Selected day(s):
						</div>
						<div>
							&nbsp;
						</div>
						<div>
							None. Please select the same date or a different date.
						</div>
					</div>
				) : (
					<div class = "donk">
						<div>
							<div>
								Selected days:
							</div>
							<div>
								&nbsp;
							</div>
							<div>
								&nbsp;&nbsp;&nbsp;&nbsp;{date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(","))}
								&nbsp;&nbsp;--&nbsp;&nbsp;
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "12"
									onChange={e => setHour1(e.target.value)}
								/>:
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "00"
									onChange={e => setMin1(e.target.value)}
								/>:
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "00"
									onChange={e => setSec1(e.target.value)}
								/>&nbsp;
								<select id="inputAMPM3" onChange={e => setBefore(e.target.value)}>
									<option defaultValue>AM</option>
									<option value="PM">PM</option>
								</select>
							</div>
							<div>
								&nbsp;&nbsp;&nbsp;&nbsp;to
							</div>
							<div>
								&nbsp;&nbsp;&nbsp;&nbsp;{date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(","))}
								&nbsp;&nbsp;--&nbsp;&nbsp;
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "11"
									onChange={e => setHour2(e.target.value)}
								/>:
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "59"
									onChange={e => setMin2(e.target.value)}
								/>:
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "59"
									onChange={e => setSec2(e.target.value)}
								/>&nbsp;
								<select id="inputAMPM4" onChange={e => setAfter(e.target.value)}>
									<option defaultValue>PM</option>
									<option value="AM">AM</option>
								</select>
							</div>
						</div>
						<div>
							&nbsp;
						</div>
					</div>
				)
			)}
			<div class = "donk">
				--------------------------------------------------------------------------------------------------
			</div>
			<div>
				&nbsp;
			</div>
			<div class = "lenk"><button className="btn btn-primary" onClick = {confirmChoice}>Submit</button></div>
		</div>
	);
};

export default CalendarComponent;