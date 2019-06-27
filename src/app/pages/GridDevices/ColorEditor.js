import React from "react";
import ReactDOM from "react-dom";

export default class ColorEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorValue: null };
  }

  getValue() {
    //this.props.column.key
    //this.props.rowData.id
    console.log("ColorEditor-> getValue():"+[this.props.column.key]+ " : "+ this.state.editorValue )
    return { [this.props.column.key]: this.state.editorValue };
  }

  getInputNode() {
    console.log("ColorEditor-> getInputNode()")
    console.log(ReactDOM.findDOMNode(this).getElementsByTagName("input")[0])
    return ReactDOM.findDOMNode(this).getElementsByTagName("input")[0];
  }

  handleChangeComplete = (event) => {
      console.log("ColorEditor-> handleChangeComplete(): editorValue :"+ event.target.checked )
      this.setState({ editorValue: event.target.checked });
    
  }
  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.handleChangeComplete}
        />
      </div>
    );
  }
}