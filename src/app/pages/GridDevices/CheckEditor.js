import React from "react";
import ReactDOM from "react-dom";
import './CheckEditor.css';

export default class CheckEditor extends React.Component {
  constructor(props) {
     super(props);
    const exec = "props.rowData."+props.column.key;
    const res = eval(exec);
    this.state = { editorValue: res };
  }

  getValue() {
    return { [this.props.column.key]: this.state.editorValue};
  }
 
  getInputNode() {
    return ReactDOM.findDOMNode(this).getElementsByTagName("input")[0];
  }

  handleChangeComplete = (event) => {
    this.setState({ editorValue: event.target.checked }, () => this.props.onCommit());     
  }
  render() {
    return (
      <div className="checkEditor">
         <label>
            <input type="checkbox"  checked = {this.state.editorValue} className="filled-in" onChange={this.handleChangeComplete} />
            <span></span>
        </label>
      </div>
    );
  }
}