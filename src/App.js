import './App.css';
import AllPosts from "./Pages/AllPosts/AllPosts";
import NewPost from "./Pages/NewPost/NewPost";
import PostID from "./Pages/PostID/PostID";
import Edit from "./Pages/Edit/Edit";
import {Route, Routes} from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="newpost" element={<NewPost />} />
        <Route path="post" element={<PostID />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
