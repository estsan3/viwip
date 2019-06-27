import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { showPreview } from "../../actions/previewModalActions";
import { fetchImages, deleteImage } from "../../actions/imagesActions";
import * as paginationActions from "../../actions/paginationActions";
import Preview from "../../components/preview";
import "./Images.css";

const bytesToSize = bytes => {
  if (bytes < 1024) return bytes + " Bytes";
  else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
  else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
  else return (bytes / 1073741824).toFixed(3) + " GB";
};
const ImageTableTr = props => {
  const { tooltip, url, name, size } = props;
  const { onPreview, onDelete } = props;

  const imageStyle = {
    style: { backgroundImage: `url("${url}")` }
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="image-container" onClick={onPreview}>
          <span className="image materialboxed" {...imageStyle} />
        </span>
      </td>
      <td>{tooltip}</td>
      <td>{bytesToSize(size)}</td>
      <td onClick={onDelete}>
        <i className="medium material-icons">delete_forever</i>
      </td>
    </tr>
  );
};

class Images extends Component {
  constructor(props) {
    super(props);
  }

  handleDeleteImage = name => {
    if (window.confirm("¿Esta seguro que desea borrar esta?")) {
      this.props.deleteImage(name);
    }
  };

  render() {
    const { images, totalMbTemp, uploadImages } = this.props;
    const trs = images.map((image, i) => (
      <ImageTableTr
        {...image}
        onDelete={() => this.handleDeleteImage(image.name)}
        onPreview={() => this.props.showPreview(<Preview {...image} />)}
      />
    ));

    return (
      <div>
        <NavLink
          className="btn waves-effect waves-ligh right asociar-button "
          to="/associateDevices"
        >
          <i className="material-icons right">send</i>Asociar Dispositivos>
        </NavLink>
        <table className="highlight centered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Image</th>
              <th>Tooltip</th>
              <th>Size</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{trs}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images
});

const mapDispatchToProps = {
  ...paginationActions,
  deleteImage,
  fetchImages,
  showPreview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images);
