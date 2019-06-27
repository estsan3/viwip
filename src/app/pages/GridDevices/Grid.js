import React from "react";
import ColorEditor from "./ColorEditor";
import ReactDataGrid  from 'react-data-grid';
import { ProgressBar } from "react-bootstrap";
import { Editors } from "react-data-grid-addons";
import {ImagesFormatter} from "./ImagesFormatter"
const { DropDownEditor,CheckboxEditor} = Editors;

const CheckboxFormatter = ({ value }) => {
    console.log("ColorEditor -> CheckboxFormatter  value: "+value)
    var result = false;
    if(value==="Si"){
        result=true
    }
    if (value==="true"){
        result=true
    }
    return <input type="checkbox"  checked={result} /> 
  };

const issueTypes = [
    { id: "se", value: "Seleccione" },
    { id: "si", value: "Si" },
    { id: "no", value: "No" }
  ];
const IssueTypeEditor = <DropDownEditor options={issueTypes} />;

const defaultColumnProperties = {
    width: 160
};

const ProgressBarFormatter = ({ value }) => {
    return <ProgressBar now={value} label={`${value}%`} />;
};
  
const columns = [
    { key: "image", name: "Asset" , frozen: true, formatter:ImagesFormatter },
    { key: 'd1',
      name: 'Device 1',
      formatter: CheckboxFormatter,
      editor: IssueTypeEditor,
     events: {
      onDoubleClick: function(ev, args) {
        console.log(
            "row Id:"+args.rowIdx +" & Assets: " +args.rowId+" & Device key: " +args.column.key+ " Device:"+args.column.name + "column idx:"+args.column.idx
        );
      }
    }  },
    { key: "d2", 
      name: "Device 2",
      editor: IssueTypeEditor,
      formatter: CheckboxFormatter,
      events: {
      onContextMenu: function(ev) {
        console.log(`Context Menu is device 2`);
      }
    } },
    { key: "d3", 
      name: "Device 3",
      editor: IssueTypeEditor,
      formatter: CheckboxFormatter
      /*events: {
        onMouseOver: function(ev) {
          console.log('Mouse over Device 3' );
        }*/
    } ,
    { key: "d4", name: "Device 4", editor: IssueTypeEditor,formatter: CheckboxFormatter },
    { key: "d5", name: "Device 5", editor: ColorEditor,formatter: CheckboxFormatter},
    { key: "d6", name: "Device 6", editor: IssueTypeEditor ,formatter: CheckboxFormatter},
    { key: "size", name: "Storage", formatter: ProgressBarFormatter }
  ].map(c => ({ ...c, ...defaultColumnProperties }));
  
  const rows = [
    { id:"asset1",  d1:'true',d2:'true',d3:'true',d4:'true',d5:'true',d6:'false',  image: 'Asset1', size: 20   },
    { id:"asset2",  d1:'true',d2:'true',d3:'true',d4:'true',d5:'true',d6:'false',  image: "Asset2", size: 60,  },
    { id:"asset3",  d1:'true',d2:'true',d3:'true',d4:'true',d5:'true',d6:'false',  image: "Asset3", size: 70,  },
    { id:"asset4",  d1:'true',d2:'true',d3:'true',d4:'true',d5:'true',d6:'false',  image: "Asset5", size: 80,  },
    { id:"asset5",  d1:'true',d2:'true',d3:'true',d4:'true',d5:'true',d6:'false',  image: "Asset5", size: 100, },
  ];

export default class Grid extends React.Component {
    state = { rows };
    
    firstNameActions = [
        {
          icon: <span className="glyphicon glyphicon-remove" />,
          callback: () => {
            alert("Deleting");
          }
        },
        {
          icon: "glyphicon glyphicon-link",
          actions: [
            {
              text: "Option 1",
              callback: () => {
                alert("Option 1 clicked");
              }
            },
            {
              text: "Option 2",
              callback: () => {
                alert("Option 2 clicked");
              }
            }
          ]
        }
    ];
    getCellActions(column, row) {
        const cellActions = {
          'd1': this.firstNameActions
        };
        return cellActions[column.key];
      }
      
    RowRenderer = ({ renderBaseRow, ...props }) => {
        const color = props.idx % 2 ? "green" : "blue";
        return <div style={{ color }}>{renderBaseRow(props)}</div>;
      };

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        console.log("Grid -> onGridRowsUpdated" )
        console.log("fromRow: "+fromRow+" toRow: "+toRow+"updated :" + updated)
        console.log(updated)
       this.setState(state => {
        const rows = state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
          rows[i] = { ...rows[i], ...updated };
        }
        return { rows };
      });
    };
    render() {
      return (
        <div>
          <ReactDataGrid
            columns={columns}
            rowGetter={i => this.state.rows[i]}
            rowsCount={this.state.rows.length}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
            minHeight={400}
            getCellActions={this.getCellActions}
         //   rowRenderer={this.RowRenderer}        
                     
            />
        </div>
      );
    }
  }

  /*
  function Example() {
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={rows.length}
      enableCellSelect={true}
      onGridRowsUpdated={onGridRowsUpdated}
       minHeight={400}
      getCellActions={getCellActions}
      rowRenderer={RowRenderer}
    
    />
  );
}*/

