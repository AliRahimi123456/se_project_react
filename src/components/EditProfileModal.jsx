import React, { useState } from "react";

const EditProfileModal = ({ currentUser, onUpdateProfile, onClose }) => {
  const [name, setName] = useState(currentUser);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({ name, avatar });
  };
  return (
    <div className="profileModal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="url"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
      <button onclick={onClose}>Close</button>
    </div>
  );
};
export default EditProfileModal;
