import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../QuestionAndAnswers/addQuestionSlice";
import { useNavigate } from "react-router-dom";
function AddQuestion() {
  let [inputList, setInputList] = useState([{ question: "", answers: [""] }]);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  // handle input change
  const handleQuestionInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleAnswerInputChange = (e, index, aIdx) => {
    let textVal = e.target.value;
    inputList[index].answers[aIdx] = textVal;
    setInputList([...inputList]);
  };

  // handle click event of the Remove button
  const handleRemoveQuestion = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleRemoveAnswer = (qIdx, aIdx) => {
    const list = [...inputList];
    list[qIdx].answers.splice(aIdx, 1);
    // delete inputList[qIdx].answers[aIdx];
    // setInputList([...inputList]);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddQuestion = () => {
    setInputList([...inputList, { question: "", answers: [""] }]);
  };

  const handleAddAnswer = (i) => {
    inputList[i].answers.push("");
    setInputList([...inputList]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    dispatch(postAdded(inputList));
    navigate("/result");
  };

  return (
    <>
      {inputList.map((x, i) => {
        return (
          <form onSubmit={(e) => handleSubmit(e)}>
            <div key={i} className="mb-2">
              <div className="input-group mb-3">
                <span className="input-group-text bg-danger">Q {i + 1}</span>
                <input
                  className=" form-control "
                  autoComplete="off"
                  name="question"
                  placeholder="Type your question here"
                  value={x.question}
                  onChange={(e) => handleQuestionInputChange(e, i)}
                />

                {inputList.length !== 1 && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleRemoveQuestion(i)}
                  >
                    Remove
                  </button>
                )}
              </div>

              {x.answers.map((a, aIdx) => {
                return (
                  <div key={aIdx} className="container">
                    <div className="row justify-content-start">
                      <div className="input-group col">
                        <span className="m-2"> {aIdx + 1}</span>
                        <input
                          className=" form-control mb-2"
                          name="answer"
                          placeholder="Answer"
                          value={a.answer}
                          onChange={(e) => handleAnswerInputChange(e, i, aIdx)}
                        />

                        {x.answers.length !== 1 && (
                          <button
                            className="btn mb-2"
                            onClick={() => handleRemoveAnswer(i, aIdx)}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        )}
                      </div>
                      <div className="col-3">
                        {x.answers.length - 1 === aIdx && (
                          <button
                            className="btn "
                            onClick={() => handleAddAnswer(i)}
                          >
                            Add +
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {inputList.length - 1 === i && (
                <div>
                  <button
                    className="btn bg-danger mt-4 "
                    onClick={handleAddQuestion}
                  >
                    Add Question +
                  </button>
                  <div className="d-flex flex-row-reverse">
                    <button className="btn bg-warning mt-4 w-25" type="submit">
                      SUBMIT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </>
  );
}

export default AddQuestion;
