import axios from "axios";
// import { signOut, database } from "firebase";
import { database } from './FirebaseConfig';
import { signOut } from "firebase/auth";
import "./Gifphy.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import firebase from "firebase/compat/app";

function Gifphy(p) {
  const [gif, setGif] = useState([]);
  const [text, setText] = useState("");
  const [err, setErr] = useState(false);
  const API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
  const BASE_URL = "https://api.giphy.com/v1/gifs/search";
  const history = useNavigate();

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const searchGif = () => {
    if (text.length === 0) {
      console.log("Please enter a search term.");
      setErr(true);
      return;
    }
    axios
      .get(
        `${BASE_URL}?api_key=${API_KEY}&q=${text}&limit=10&offset=0&rating=g&lang=en`
      )
      .then((res) => {
        setGif(res.data.data);
        setErr(false);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
        setErr(true);
      });
  };

  useEffect(() => {
    getGif();
  }, []);

  const getGif = () => {
    axios
      .get(
        `${BASE_URL}?api_key=${API_KEY}&q=trending&limit=10&offset=0&rating=g&lang=en`
      )
      .then((res) => {
        setGif(res.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  return (
    <>
      <header className="header-style">
        <div className="header-text">
          <p></p>
          <button  onClick={handleClick}>SignOut</button>
        </div>
      </header>
      <div className="gifphy-contener">
        <div className="gifphy-text">
          <input className="input-field" value={text} onChange={handleInput} placeholder="Search Gif..."/>
          &nbsp;
          <button onClick={searchGif}>Submit</button>
        </div>

        {err && <p>Please enter a search term.</p>}

        <div>
          {gif.length > 0 &&
            gif.map((item, index) => {
              return (
                <img key={index} src={item.images.fixed_height.url} alt="gif" />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Gifphy;
