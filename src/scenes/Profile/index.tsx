import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

import Button from 'components/Button';

function Profile() {
  const { user, logout } = useAuth0();

  if (!user) {
    return <Navigate to="/" />;
  }

  const {
    email,
    email_verified: emailVerified,
    name,
    nickname,
    picture,
  } = user || {};
  const onLogoutClick = logout;

  return (
    <div>
      <h1>My account</h1>
      <p>
        <img src={picture} alt="avatar" />
      </p>
      <p>{nickname}</p>
      <p>{name}</p>
      <p>{emailVerified}</p>
      <p>
        <b>Email: </b>
        {email}
      </p>
      <p>
        <Button onClick={onLogoutClick} variant="danger">
          Log out
        </Button>
      </p>
    </div>
  );
}

export default Profile;
