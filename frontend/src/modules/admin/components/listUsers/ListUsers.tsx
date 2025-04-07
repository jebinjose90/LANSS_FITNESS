import React, { useState } from "react";
import ListTable from "../common/ListTable";

const ListUsers: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "@alice", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 2, name: "Bob", email: "@bob", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 3, name: "Charlie", email: "@charlie", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 4, name: "Diana", email: "@diana", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 5, name: "Ethan", email: "@ethan", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 6, name: "Fiona", email: "@fiona", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 7, name: "George", email: "@george", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 8, name: "Hannah", email: "@hannah", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 9, name: "Ivan", email: "@ivan", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 10, name: "Julia", email: "@julia", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
  ]);
  

  const handleBlockToggle = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };

  return <ListTable title="USERS" data={users} onToggleBlock={handleBlockToggle} />;
};

export default ListUsers;
