import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
//import Spinner from '../Shared/Spinner';

const bytesToSize = (bytes) => {
  if (bytes < 1024) return bytes + " Bytes";
  else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
  else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
  else return (bytes / 1073741824).toFixed(3) + " GB";
};

const ImageTableTr = props => {
  const { tooltip, url, name, size, status } = props;
  const imageStyle = {
    style: { backgroundImage: `url("${url}")` }
  };

  return (
    <tr >
      <td>{name}</td>
      <td>
        <span className="image-container" >
          <span className="image" {...imageStyle} />
        </span>
      </td>
      <td>{
        status ?
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          :
          <p>
            <label>
              <input type="checkbox" checked="checked" disabled="disabled" />
              <span>Subido</span>
            </label>
          </p>
      }</td>
      <td>{bytesToSize(size)}</td>
    </tr>
  );
};


class UploadAssets extends Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      selectedFile: null,
      selectedFiles: null,
      imagesUploaded: [],
      percent: '0',
      image: '',
      status: 'Subiendo...',
      uploadsDivs: '',
      loading: false
    }
  }

  componentWillMount() {
    const upload = this.props.assets.map((asset, i) => ({ 'name': asset.name, 'percent': 0, 'status': 'In Progress' }));
    this.setState({
      imagesUploaded: upload
    });

    this.singleFileUploadHandler();

  }

  singleFileChangedHandler = (event) => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  getDevices = () => {
    debugger
    let devicesAsociados = [];
    const { associatios, devices } = this.props;
    const image = this.state.image;

    associatios.map((association) => {
      if(association.id === image){
        devices.map((device) => {
          if (association[device.key]) {
            devicesAsociados.push({ 'key': device.key });
          }
        })
      }
    })
    return devicesAsociados;
  }


  singleFileUploadHandler = () => {
    this.setState({
      loading: true
    });
    this.props.assets.map((asset, i) => {
      const data = new FormData();
      debugger
      data.append('profileImage', asset.file, asset.file.name);
      this.setState({ 'image': asset.name });
      axios.post('/api/profile/profile-img-upload', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
        .then((response) => {
          this.setState({ loading: false });
          if (200 === response.status) {
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                console.log('Max size: 2MB', 'red');
              } else {
                console.log(response.data.error);
              }
            } else {
              debugger
              const devices = this.getDevices(asset);
              const device = {
                "usuario": "Usuario100",
                "name": "Device 3",
                "mac": "00-01-00-01-23-9C-42-1E-D0-94-66-EA-88-9C",
                "habilitado": true,
                "devices": devices,
                "assets": [{
                  "name": "asset1",
                  "uri": response.data.location
                }]
              }
              const asset = {
                "usuario": "Usuario100",
                "nombre": response.data.name,
                "url": response.data.location,
                "habilitado": true,
                "devices": devices
              }

              axios.post('/api/asset/add', asset, {
                headers: {
                  'accept': 'application/json',
                  'Accept-Language': 'en-US,en;q=0.8'
                }
              }).then((response) => {
                debugger
                this.setState({ loading: false });
                if (200 === response.status) {
                  if (response.data.error) {
                    console.log(error);
                  } else {
                    console.log(response);
                  }
                }
              }).catch((error) => {
                console.log(error)
                this.setState({
                  loading: false
                });
              }
              )
            }
          }
        }).catch((error) => {
          this.setState({
            loading: false
          });
          console.log(error);
        })
    });

  };

  render() {

    const { assets } = this.props;
    const trs = assets.map((asset, i) => (
      <ImageTableTr
        {...asset} status={this.state.loading} />
    ));

    return (
      <div>

        <table className="highlight centered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Image</th>
              <th>Status</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>{trs}</tbody>
        </table>
      </div>
    )
  };
}

const mapDispatchToProps = {

};
const mapStateToProps = state => {

  return {
    assets: state.images,
    associatios: state.upload.rows,
    devices: state.devices
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(UploadAssets);