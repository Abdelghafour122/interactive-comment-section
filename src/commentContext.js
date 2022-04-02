import { createContext, useState } from "react";
import data from "./data.json";
import amyrobson from "./images/avatars/image-amyrobson.png";
import maxblagun from "./images/avatars/image-maxblagun.png";
import ramsesmiron from "./images/avatars/image-ramsesmiron.png";
import juliusomo from "./images/avatars/image-juliusomo.png";

const CommentContext = createContext();
const IMGOBJ = { amyrobson, maxblagun, ramsesmiron, juliusomo };
const { comments, currentUser } = data;

export function CommentProvider({ children }) {
  const [commentSection, setCommentSection] = useState(comments);
  const editComment = (editedTxt) => {
    console.log("edited");
  };

  const addComment = (data) => {
    setCommentSection([
      ...commentSection,
      {
        id: Math.floor(Math.random() * 10000),
        content: data,
        createdAt: "Just now",
        score: 0,
        replies: [],
        user: { username: "juliusomo" },
      },
    ]);

    // console.log(...commentSection, {
    //   id: Math.floor(Math.random() * 10000),
    //   content: data,
    //   createdAt: "Just now",
    //   score: 0,
    //   replies: [],
    //   user: { username: "juliusomo" },
    // });
  };

  const deleteComment = (commentId) => {
    console.log("deleted");
  };
  return (
    <CommentContext.Provider
      value={{
        currentUser,
        commentSection,
        IMGOBJ,
        editComment,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export default CommentContext;
