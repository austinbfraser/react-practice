import './App.css';
import CodingConfLogo from './components/CodingConfLogo';
import UploadAvatar from './components/UploadAvatar';

function App() {
  return (
    <div className="appContainer">
      <div>
        <CodingConfLogo />
      </div>
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p className="blurb">
        Secure your spot at next year's biggest coding conference.
      </p>
      <div className="formContainer">
        <p>Upload Avatar</p>
        <UploadAvatar />
        <p>Full Name</p>
        <input
          className="textInput"
          id="textInput-fullName"
          type="text"
        ></input>
        <p>Email Address</p>
        <input
          className="textInput"
          id="textInput-email"
          placeholder="example@email.com"
          type="text"
        ></input>
        <p>GitHub Username</p>
        <input
          className="textInput"
          id="textInput-github"
          placeholder="@yourusername"
          type="text"
        ></input>
        <div>
          <button className="generateButton">Generate My Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default App;
