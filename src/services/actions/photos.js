import axios from "axios";

export const PHOTOS_REQUEST = "PHOTOS_REQUEST";
export const PHOTOS_SUCCESS = "PHOTOS_SUCCESS";
export const PHOTOS_ERROR = "PHOTOS_ERROR";

export function getPhotos() {
  return function (dispatch) {
    /*
    dispatch({
      type: PHOTOS_REQUEST,
    });
*/
    async function fetchMyAPI() {
      let response = await axios.get("https://graph.instagram.com/me/media", {
        params: {
          access_token:
            "IGQVJVbUtFZAzNRYlZA1MUlaNGFid3NWRTBHY2FRc1ljOGZAzMlFpWTlpZAGpUa2RMU2ZA4LXNTZAE85WkhKaDVUMFdnOVY4bnlGZATAzem42YmNJLS14NjdUX3NETU5EZAy1OenloczJ1TjhWdU00TUF6dDBIYwZDZD",
        },
      });
      let userData = await response.data;
      console.log(userData.data[0].id);
      let data = await axios.get(
        `https://graph.instagram.com/${userData.data[0].id}`,
        {
          params: {
            access_token:
              "IGQVJVbUtFZAzNRYlZA1MUlaNGFid3NWRTBHY2FRc1ljOGZAzMlFpWTlpZAGpUa2RMU2ZA4LXNTZAE85WkhKaDVUMFdnOVY4bnlGZATAzem42YmNJLS14NjdUX3NETU5EZAy1OenloczJ1TjhWdU00TUF6dDBIYwZDZD",
            fields: "id,media_type,media_url,username,timestamp",
          },
        }
      );
    }
    try {
      fetchMyAPI();
    } catch (error) {
      console.log(error.response.status, error.response.data.error.message);
    }
  };
}
