import "./Profile.css";

function Profile({ handleSignOut }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <div className="profile__background">
          <h1 className="profile__title">Hi, Sam</h1>
          <div className="profile__image"></div>
          <button className="edit__profile">Change Profile</button>
          <button className="profile__logout" onClick={handleSignOut}>
            Log out
          </button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
