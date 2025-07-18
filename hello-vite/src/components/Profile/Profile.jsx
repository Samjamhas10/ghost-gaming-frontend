import Library from "../Library/Library";
import OnlineFriends from "../OnlineFriends/OnlineFriends";
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
      <section>
        <div>
          <OnlineFriends />
        </div>
      </section>
 

      <div>
        <Library />
      </div>
    </div>
  );
}

export default Profile;
