import GamesCollection from "../GamesCollection/GamesCollection";
import UpdateProfileModal from "../UpdateProfileModal/UpdateProfileModal";
import "./Profile.css";

function Profile({ handleSignOut, openUpdateProfileModal, currentUser }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <div className="profile__background">
          <h1 className="profile__title">Welcome, {currentUser}</h1>
          <div className="profile__image">
            <button className="profile__edit" onClick={openUpdateProfileModal}>
              Change Profile
            </button>
            <button className="profile__logout" onClick={handleSignOut}>
              Log out
            </button>
            {/* <img
              src={currentUser.avatarUrl}
              alt="User Avatar"
              className="profile__avatar"
            /> */}
            {/* <p className="profile__email">{currentUser.email}</p>
            <p className="profile__bio">{currentUser.bio}</p>
            <p className="profile__avatar">{currentUser.avatarUrl}</p> */}
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
