import "./app.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../services/actions/photos";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return <div className="App"></div>;
}

export default App;
