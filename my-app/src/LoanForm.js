import "./formstyle.css";
import Modal from "./Modal";
import { useState } from "react";
export default function LoanForm() {
  const [errorMessage, seterrorMessage] = useState();
  const [showmodal, setshowmodal] = useState(true);
  const [loanInput, setloanInput] = useState({
    name: "",
    phonenumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  // handle submit
  function handlesubmit(event) {
    event.preventDefault();
    seterrorMessage(null);
    const { age, phonenumber, isEmployee } = loanInput;

    if (age < 18 || age > 60) {
      seterrorMessage("the age is not eligible");
    } else if (phonenumber.length < 10 || phonenumber.length > 12) {
      seterrorMessage("phone number format is incorrect");
    } else if (isEmployee === false) {
      seterrorMessage("you must be an employee");
    }

    setshowmodal(true);
  }

  // handle divclick

  function handledivclick() {
    if (showmodal === true) {
      setshowmodal(false);
    }
  }

  // disable button
  const disabledbtn =
    loanInput.name === "" ||
    loanInput.phonenumber === "" ||
    loanInput.age === "";

  return (
    <div className="flex" onClick={handledivclick}>
      <form className="flex" id="loan-form">
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name:</label>
        <input
          placeholder="Your name"
          value={loanInput.name}
          onChange={(event) => {
            setloanInput({ ...loanInput, name: event.target.value });
          }}
        />
        <label>Phone number:</label>
        <input
          placeholder="Your phone number"
          value={loanInput.phonenumber}
          onChange={(event) => {
            setloanInput({ ...loanInput, phonenumber: event.target.value });
          }}
        />
        <label>Age:</label>
        <input
          placeholder="Your age"
          value={loanInput.age}
          onChange={(event) => {
            setloanInput({ ...loanInput, age: event.target.value });
          }}
        />
        <label>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInput.isEmployee}
          onChange={(event) => {
            setloanInput({ ...loanInput, isEmployee: event.target.checked });
          }}
        />
        <label>salary:</label>
        <select
          value={loanInput.salary}
          onChange={(event) => {
            setloanInput({ ...setloanInput, salary: event.target.value });
          }}
        >
          <option>Less than 500$</option>
          <option>From 500$ to 2000$</option>
          <option>More than 2000$</option>
        </select>
        <button
          id="submit-loan-btn"
          onClick={handlesubmit}
          disabled={disabledbtn}
          className={disabledbtn ? "disable" : ""}
        >
          submit
        </button>
        <Modal errorMessage={errorMessage} isvisible={showmodal} />
      </form>
    </div>
  );
}
