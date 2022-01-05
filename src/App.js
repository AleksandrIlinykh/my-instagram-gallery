import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {

      useEffect(() => {
        async function fetchMyAPI() {
          let response = await axios.get(
            "https://graph.instagram.com/me/media",
            {
              params: {
                access_token:
                  "IGQVJVbUtFZAzNRYlZA1MUlaNGFid3NWRTBHY2FRc1ljOGZAzMlFpWTlpZAGpUa2RMU2ZA4LXNTZAE85WkhKaDVUMFdnOVY4bnlGZATAzem42YmNJLS14NjdUX3NETU5EZAy1OenloczJ1TjhWdU00TUF6dDBIYwZDZD",
              },
            }
          );
          let userData = await response.data;
          console.log(userData.data[0].id);
          let data = await axios.get(
            `https://graph.instagram.com/${userData.data[0].id}`,
            {
              params: {
                access_token:
                  "IGQVJVbUtFZAzNRYlZA1MUlaNGFid3NWRTBHY2FRc1ljOGZAzMlFpWTlpZAGpUa2RMU2ZA4LXNTZAE85WkhKaDVUMFdnOVY4bnlGZATAzem42YmNJLS14NjdUX3NETU5EZAy1OenloczJ1TjhWdU00TUF6dDBIYwZDZD",
                fields: "id,media_type,media_url,username,timestamp"
                },
            }
          );
          
        }

        fetchMyAPI();
      }, []);

  return <div className="App"></div>;
}

export default App;