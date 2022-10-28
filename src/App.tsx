import "./App.css";
import profile_picture from "./assets/profile_img.svg";

function App() {
  return (
    <main>
      <section className="profile">
        <img src={profile_picture} alt="user profile" id="profile_img" />

        <div className="socials">
          <p id="twitter">pena_mo56</p>
          <p id="slack">pena56</p>
        </div>
      </section>
    </main>
  );
}

export default App;
