import useAuthentication from '@/hooks/useAuth';
import { UserProps } from '@/types/user.interface';
import React, { FC } from 'react';

interface ProfileProps {
  user: UserProps;
}
const Profile: FC<ProfileProps> = ({ user }) => {
    useAuthentication(`/profile`);

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.name}</h2>
    </div>
  );
};

export default Profile;
