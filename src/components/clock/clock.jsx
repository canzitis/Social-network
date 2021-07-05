import React from "react";
import s from "./clock.module.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.toOffsetDate(this.props.offset),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  toOffsetDate(offset) {
    const d = new Date(new Date().getTime() + 3600 * 3000);
    const hrs = d.getUTCHours();
    const mins = d.getUTCMinutes();
    return `${hrs}:${mins}`;
  }

  tick() {
    this.setState({
      time: this.toOffsetDate(this.props.offset),
    });
  }
  render() {
    return <p className={s.clock}>{this.state.time}</p>;
  }
}

export default Clock;
