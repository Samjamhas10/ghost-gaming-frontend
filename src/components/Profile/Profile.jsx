import GamesCollection from "../GamesCollection/GamesCollection";
import UpdateProfileModal from "../UpdateProfileModal/UpdateProfileModal";
import "./Profile.css";
import defaultAvatar from "../../assets/ghost-gaming.png";

function Profile({ handleSignOut, openUpdateProfileModal, currentUser }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <div className="profile__background">
          <h1 className="profile__title">Welcome, {currentUser.name}!</h1>
          <div className="profile__image">
            <img
              src={currentUser.avatarUrl || defaultAvatar}
              alt="User Avatar"
              className="profile__avatar"
            />
            <p className="profile__email">{currentUser.email}</p>
            <p className="profile__bio">{currentUser.bio}</p>
            <p className=""></p>

            <button className="profile__edit" onClick={openUpdateProfileModal}>
              Change Profile
            </button>
            <button className="profile__logout" onClick={handleSignOut}>
              Log out
            </button>
          </div>
        </div>
        <GamesCollection />
        <UpdateProfileModal />
      </section>
    </div>
  );
}

export default Profile;
