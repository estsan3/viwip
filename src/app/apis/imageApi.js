import baseApi from './baseApi';



class ImageApi {
  getImages(start, limit) {
    return baseApi.get(`images?_page=${start}&_limit=${limit}`);
  }

  addImage(image) {
    return baseApi.post('images', image);
  }

  updateImage(image) {
    return baseApi.put(`images/${image.id}`, image);
  }

  getImage(id) {
    return baseApi.get(`images/${id}`);
  }

  deleteImage(id) {
    return baseApi.delete(`images/${id}`);
  }
}

export default new ImageApi();
