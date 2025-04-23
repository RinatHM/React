import React from 'react';
import Comment from "./components/CommentsList";

function App() {
return (
    <div className="app">
      <h1>Комментарии</h1>
      <div>
      <Comment id="1" text="Это первый комментарий"/>
      <Comment id="2" text="Это второй комментарий"/>
      <Comment id="3" text="Это третий комментарий"/>
      <Comment id="4" text="Это четвертый комментарий"/>
      <Comment id="5" text="Это пятый комментарий"/>
      <Comment id="6" text="Это шестой комментарий"/>
       </div> 
    </div>
  );
};

export default App;