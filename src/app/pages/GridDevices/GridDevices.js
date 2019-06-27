import React, { Component } from "react";
import ReactDataGrid from 'react-data-grid';
import { connect } from 'react-redux';
import ImagesFormatter from "../ImagesFormatter/ImagesFormatter";
import { uploadImages } from '../../actions/imagesActions';
import CheckEditor from './CheckEditor'
import './GridDevices.css';


const firstNameActions = [
  {
    icon: <span><i className="material-icons">delete</i></span> ,callback: () => {alert("Deleting");}
  },
  {
    icon: <span><i className="material-icons">format_list_bulleted</i></span>,
    actions: [
      {
        text: "Option 1",
        callback: () => {alert("Option 1 clicked");} 
      },
      {
        text: "Option 2",
        callback: () => { alert("Option 2 clicked");}
      }
    ]
  }
];

function getCellActions(column, row) {

  const cellActions = {
    'Device 1': firstNameActions,
    'Device 2': firstNameActions
  };
  return  cellActions[column.name];
}
const assetSelected = ({value}) => {
  console.log(value);
}
const CheckboxFormatter = ({value}) => { return <label><input type="checkbox" checked={value} onChange={assetSelected} className="filled-in"  /> <span></span></label>;};

const devicesConf = {
  name: 'name',
  formatter: CheckboxFormatter,
  editor:CheckEditor
}

const getRows = (images) => {
  let rows = images.map(image => {
    const name = image.name;
    return { 'id': image.name, 'name': image.name, 'name': image.name, 'url' : image.url,d1:false,d2:false,d3:false,d4:false,d5:false,d6:false,d7:false,d8:false,d9:false}
  })
  return rows;
};

const getColumns = (devices) => {
  let columns = devices.map(device => {
    return { ...devicesConf, 
      'key': device.key, 
      'name': device.name,
      width: 200
  }});
  columns.unshift({ key: "image", name: "Asset", frozen: true,width: 300, formatter: ImagesFormatter });
  
  return columns;
}

class GridDevices extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: this.props.rows };
  }

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
      this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  
  uploadAssets = () => {
    this.props.uploadImages(this.state.rows)
    this.props.history.push('/uploadAssets');
  }
  render() {
    return (
      <div >
        <a className="waves-effect waves-light btn right uploadButton" onClick={this.uploadAssets}>
            <i className="material-icons right">send</i>
            Guardar y Sincronizar
        </a>
       <ReactDataGrid
          columns={this.props.columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={this.props.rows.length}
          enableCellSelect={true}
          getCellActions={getCellActions}
          onGridRowsUpdated={this.onGridRowsUpdated}
          rowHeight={250}
          minHeight={900}
          headerRowHeight={50} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  columns: getColumns(state.devices),
  rows: getRows(state.images)
});

const mapDispatchToProps = {
  uploadImages
};

export default connect(mapStateToProps, mapDispatchToProps)(GridDevices);