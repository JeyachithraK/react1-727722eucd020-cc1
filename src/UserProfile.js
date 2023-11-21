import React, { useState } from 'react';
import Button from '@mui/material/Button';

const UserProfile = ({ name, age }) => {
  const [userAge, setUserAge] = useState(age);

  const handleIncreaseAge = () => {
    setUserAge(userAge + 1);
  };

  const handleDecreaseAge = () => {
    setUserAge(userAge - 1);
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {userAge}</p>
      <Button variant="contained" color="primary" onClick={handleIncreaseAge}>
        Get Older
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecreaseAge}>
        Make Younger
      </Button>
    </div>
  );
};

export default UserProfile;
