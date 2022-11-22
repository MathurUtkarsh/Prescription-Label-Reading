// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* reactjs form app to accept image as input and submit to send to backend */}
      <div className="container">
        <h2 className="heading">Prescription Label Reading</h2>
        <form
          action="http://localhost:5000/upload"
          method="post"
          encType="multipart/form-data"
        >
          <div class="input-group">
            <input
              type="file"
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              name="image"
            />
            <button type="submit" className="btn btn-warning">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
