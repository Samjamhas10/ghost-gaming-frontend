import GamesCollection from "../GamesCollection/GamesCollection";
import UpdateProfileModal from "../UpdateProfileModal/UpdateProfileModal";
import "./Profile.css";

function Profile({ handleSignOut, openUpdateProfileModal, currentUser, }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <div className="profile__content">
          <h1 className="profile__title">Welcome, {currentUser.username}!</h1>
          <div className="profile__image">
            <img
              src={currentUser.avatarUrl}
              alt="User Avatar"
              className="profile__avatar"
            />
            <p className="profile__bio">{currentUser.bio}</p>
            <section className="profile__buttons">
              <button
                className="profile__edit"
                onClick={openUpdateProfileModal}
              >
                Change Profile
              </button>
              <button className="profile__logout" onClick={handleSignOut}>
                Log out
              </button>
            </section>
          </div>
        </div>
        <GamesCollection />
        {/* <UpdateProfileModal savedGames={savedGames} /> */}
      </section>
    </div>
  );
}

export default Profile;
