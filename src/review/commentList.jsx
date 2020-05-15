import React,  { useState, createContext} from 'react';

export const CommentContext = createContext();

export const CommentList = (props) => {
    const [comments, commentList] = useState([
        {
          id: 1,
          name: 'Pera',
          comment: 'Odlicna kafana'
        }])
   
    return (
        <div>
             <CommentContext.Provider value = {[comments, commentList]}>
                 {props.children}
             </CommentContext.Provider>
        </div>
    )
}
