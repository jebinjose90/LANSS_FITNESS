import React, { useState } from "react";
import ListTable from "../../../common/ListTable";

const ListUsers: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "@alice", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 2, name: "Bob", email: "@bob", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
  ]);

  const handleBlockToggle = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };

  return <ListTable title="Users" data={users} onToggleBlock={handleBlockToggle} />;
};

export default ListUsers;
