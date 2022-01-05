import axios from "axios";

import { ENDPOINT } from "../../ulils/api";
import { TOKEN } from "../../ulils/api";

export const PHOTOS_REQUEST = "PHOTOS_REQUEST";
export const PHOTOS_SUCCESS = "PHOTOS_SUCCESS";
export const PHOTOS_ERROR = "PHOTOS_ERROR";

export function getPhotos() {
  return function (dispatch) {
    dispatch({
      type: PHOTOS_REQUEST,
    });

    async function fetchMyAPI() {
      let response = await axios.get(`${ENDPOINT}me/media`, {
        params: {
          access_token: `${TOKEN}`,
        },
      });
      let userData = await response.data;
      console.log(userData.data[0].id);
      let data = await axios.get(`${ENDPOINT}` + userData.data[0].id, {
        params: {
          access_token: `${TOKEN}`,
          fields: "id,media_type,media_url,username,timestamp",
        },
      });
      return data;
    }
    try {
      const data = fetchMyAPI();
      dispatch({
        type: PHOTOS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.status, error.response.data.error.message);
      dispatch({
        type: PHOTOS_ERROR,
      });
    }
  };
}
