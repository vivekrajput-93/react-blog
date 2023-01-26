import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../config/firebase";

export const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");

    const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      authot: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/")
  };

  useEffect(() => {
    if(!isAuth) {
        navigate("/login")
    }
  }, [])

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title :</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post :</label>
          <textarea
            placeholder="Write Something"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit</button>
      </div>
    </div>
  );
};
