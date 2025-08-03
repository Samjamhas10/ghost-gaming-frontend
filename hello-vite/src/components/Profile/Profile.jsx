import GamesCollection from "../GamesCollection/GamesCollection";
import UpdateProfileModal from "../UpdateProfileModal/UpdateProfileModal";
import "./Profile.css";

function Profile({ handleSignOut, openUpdateProfileModal }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <div className="profile__background">
          <h1 className="profile__title">Welcome, Gamer12!</h1>
          <div className="profile__image">
            <button className="edit__profile" onClick={openUpdateProfileModal}>
              Change Profile
            </button>
            <button className="profile__logout" onClick={handleSignOut}>
              Log out
            </button>
            <p className="profile__email">gamer12@gmail.com</p>
            <p className="profile__bio">Bio:</p>
            <p className="profile__stats">Achievements:</p>
            <p className=""></p>
          </div>
        </div>
        <GamesCollection />
        <UpdateProfileModal />
      </section>
    </div>
  );
}

export default Profile;
