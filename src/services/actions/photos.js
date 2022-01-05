import axios from "axios";

import { ENDPOINT } from "../../ulils/api";
import { TOKEN } from "../../ulils/api";

export const PHOTOS_REQUEST = "PHOTOS_REQUEST";
export const PHOTOS_SUCCESS = "PHOTOS_SUCCESS";
export const PHOTOS_ERROR = "PHOTOS_ERROR";

export function getPhotos() {
  return function (dispatch) {
    async function fetchMyAPI() {
      let responseUser = await axios.get(`${ENDPOINT}me/media`, {
        params: {
          access_token: `${TOKEN}`,
        },
      });
      let userData = await responseUser.data.data;
      let dataArray = [];
      for (const i in userData) {
        let responseData = await axios.get(`${ENDPOINT}` + userData[i].id, {
          params: {
            access_token: `${TOKEN}`,
            fields: "id,media_type,media_url,username,timestamp",
          },
        });
        dataArray.push(responseData.data);
      }

      dispatch({
        type: PHOTOS_SUCCESS,
        payload: dataArray,
      });
    }

    dispatch({
      type: PHOTOS_REQUEST,
    });

    try {
      const data = fetchMyAPI();
    } catch (error) {
      console.log(error.response.status, error.response.data.error.message);
      dispatch({
        type: PHOTOS_ERROR,
      });
    }
  };
}
