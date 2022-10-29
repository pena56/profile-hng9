import "./App.css";
import profile_picture from "./assets/profile_img.svg";
import share_icon_sm from "./assets/share-sm.svg";
import share_icon_lg from "./assets/share-lg.svg";
import Button from "./components/Button";

function App() {
  const share_icon = window.screen.width > 1200 ? share_icon_lg : share_icon_sm;

  return (
    <main>
      <div className="share_btn">
        <img src={share_icon} alt="share icon" />
      </div>
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
        <Button
          label="Zuri Books"
          id="books"
          url="http://books.zuri.team"
          subtext="Books on Design and coding."
        />
        <Button
          label="Python Books"
          id="book_python"
          url="https://books.zuri.team/python-for-beginners?ref_id=pena56"
          subtext="Best beginners guide for Python programming."
        />
        <Button
          label="Background checks for coders"
          id="pitch"
          url="https://background.zuri.team"
          subtext="Helping developers with background checks"
        />
        <Button
          label="Design Books"
          id="book_design"
          url="https://books.zuri.team/design-rules"
          subtext="Grab your copy of this free design book"
        />
      </section>
    </main>
  );
}

export default App;
