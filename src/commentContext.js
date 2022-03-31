import { createContext } from "react";
import data from "./data.json";
import amyrobson from "./images/avatars/image-amyrobson.png";
import maxblagun from "./images/avatars/image-maxblagun.png";
import ramsesmiron from "./images/avatars/image-ramsesmiron.png";
import juliosomo from "./images/avatars/image-juliusomo.png";

const CommentContext = createContext();
const IMGOBJ = { amyrobson, maxblagun, ramsesmiron, juliosomo };
const { comments, currentUser } = data;

export function CommentProvider({ children }) {
  return (
    <CommentContext.Provider value={{ currentUser, comments, IMGOBJ }}>
      {children}
    </CommentContext.Provider>
  );
}

export default CommentContext;
