import GamesCollection from "../App/GamesCollection/GamesCollection";
import "./Profile.css";

function Profile({ handleSignOut, onProfile }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <div className="profile__background">
          <h1 className="profile__title">Welcome, user.</h1>
          <div className="profile__image"></div>
          <button className="edit__profile">Change Profile</button>
          <button className="profile__logout" onClick={handleSignOut}>
            Log out
          </button>
        </div>
        <GamesCollection onSubmit={onProfile} />
      </section>
    </div>
  );
}

export default Profile;
