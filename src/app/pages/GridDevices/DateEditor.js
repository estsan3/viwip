//import { DateInput } from "semantic-ui-calendar-react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
//import { Form } from "semantic-ui-react";
//import autoBind from "react-autobind";
//import moment, { isMoment } from "moment";

export default class DateEditor extends React.Component {
  constructor(props) {
    super(props);
  //  this.state = { dateEditor: "" };
   // autoBind(this);
    //moment(props.value).format('L')
  }
  getValue() {
    //return { date: moment(this.state.dateEditor).format("L") };
    return { date: this.state.dateEditor };
  }

  getInputNode() {
    return ReactDOM.findDOMNode(this);
  }

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value }, () => this.props.onCommit());
    //if (this.state.hasOwnProperty(name)) {
    //  this.setState({ [name]: value }, () => this.props.onCommit()); //);
    //}
  };

  render() {
    return (
      <Form>
        
      </Form>
    );
  }
}