import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <div className="profile__background">
          <h1 className="profile__title">Hi, Sam</h1>
          <div className="profile__image"></div>
          <button className="edit__profile">Change Profile</button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
