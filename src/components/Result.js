import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/QuestionAndAnswers/addQuestionSlice";

const Result = () => {
  const posts = useSelector(selectAllPosts);

  console.log("Result", posts);

  const renderdPosts = posts.map((post, i) => (
    <div class="card text-left p-2 mb-3" style={{ alignItems: "left" }}>
      <div>
        <h3>{post.question}</h3>
        {post.answers.map((answer) => {
          return <li>{answer}</li>;
        })}
      </div>
    </div>
  ));

  return <section>{renderdPosts}</section>;
};

export default Result;
