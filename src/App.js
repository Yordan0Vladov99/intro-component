import "./App.css";
import UserForm from "./components/UserForm/UserForm";

function App() {
  return (
    <div className="App">
      <div className="call-to-action">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="form-section">
        <p>
          <b> Try it free 7 days </b> then $20/mo. thereafter
        </p>
        <UserForm />
      </div>
    </div>
  );
}

export default App;
