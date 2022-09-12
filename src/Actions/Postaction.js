import axios from "axios";
export const deletePostaction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteproductrequest" });
    await axios.delete(
      `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch({ type: "deleteproductsuccess", payload: "product deleted" });
  } catch (error) {
    dispatch({ type: "deleteproductfailure", payload: error.data });
  }
};
export const allproductsaction = () => async (dispatch) => {
  try {
    dispatch({
      type: "allproductsrequest",
    });
    const { data } = await axios.get(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("all products", data);
    dispatch({
      type: "allproductssuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "allproductsfailure",
      payload: error.response.data,
    });
  }
};
export const Productsdetailsaction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "productdetailsrequest",
    });
    const { data } = await axios.get(
      `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "application/json",
        },
      }
    );
    console.log("products", data);
    dispatch({
      type: "productdetailssuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "productdetailsfailure",
      payload: error.response.data.message,
    });
  }
};
export const createproducts =
  (name, description, category, price, avatar, developerEmail) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "addproductrequest",
      });
      console.log("");
      const { data } = await axios.post(
        `https://upayments-studycase-api.herokuapp.com/api/products`,
        {
          name,
          description,
          category,
          price,
          avatar,
          developerEmail,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("products", data);
      dispatch({
        type: "addproductsuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "addproductfailure",
        payload: error.response.data.message,
      });
    }
  };
