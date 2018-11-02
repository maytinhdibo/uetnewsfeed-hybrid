import React, { Component } from 'react';
import EventItem from './event-item'

class EventPage extends Component {
  constructor(props){
    super(props);
    this.state={
      time:{
        day: "THỨ 2",
        date: "6",
        month: "TH7"
      }
    }
    var time=new Date();
    var day=time.getDay()>0?"THỨ "+(time.getDay()-(-1)):"CN";
    var date=time.getDate();
    var month="TH"+(time.getMonth()-(-1));
    this.state={
      time:{
        day: day,
        date: date,
        month: month
      }
    }
    this.setState(this.state);
  }
  componentWillMount(){
    console.log("update");
    try{
      StatusBar.backgroundColorByHexString("#FFFFFF");
    }catch(err) {}
  }
  render() {
    // console.log(this);
    return (
      <div id="event">
      <span id="time">{this.state.time.day}, {this.state.time.date} {this.state.time.month}</span>
        <b> <h2>Sự kiện UET</h2></b>
       <EventItem/>
       <EventItem/>
       <EventItem/>
      </div>
    )
  }
}
export default EventPage;