export default {
  BASE_URL:
    process.env.NODE_ENV === "development"
      ?  "http://localhost:3000/"
      :  "http://localhost:3000/"
};
