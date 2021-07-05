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
    var days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const d = new Date();
    const hrs = d.getHours();
    const mins = d.getMinutes();
    const numberDey = d.getDay();
    return `${days[numberDey]}, ${hrs}:${mins}`;
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
