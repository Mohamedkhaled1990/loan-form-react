import "./formstyle.css";

export default function Modal({ isvisible, errorMessage = null }) {
  if (isvisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage === null
              ? "The modal has been submitted successfully"
              : errorMessage}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
