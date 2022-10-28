import "./App.css";
import profile_picture from "./assets/profile_img.svg";
import Button from "./components/Button";

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
      <section className="links">
        <Button
          label="Zuri Team"
          id="btn_zuri"
          url="https://training.zuri.team/"
        />
      </section>
    </main>
  );
}

export default App;
