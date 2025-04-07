import React, { useState } from "react";
import ListTable from "../common/ListTable";


const TrainersList: React.FC = () => {
  const [trainers, setTrainers] = useState([
    { id: 1, name: "Mark", specialization: "HIIT", email: "@mdo", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 2, name: "Jacob", specialization: "Strength", email: "@fat", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 3, name: "Larry", specialization: "Cardio", email: "@google", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 4, name: "Sophie", specialization: "Yoga", email: "@sophie", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 5, name: "Ryan", specialization: "CrossFit", email: "@ryan", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 6, name: "Emily", specialization: "Pilates", email: "@emily", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 7, name: "Chris", specialization: "Zumba", email: "@chris", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 8, name: "Nina", specialization: "Aerobics", email: "@nina", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 9, name: "Tom", specialization: "Strength", email: "@tom", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 10, name: "Ava", specialization: "Cardio", email: "@ava", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
  ]);
  

  const handleBlockToggle = (id: number) => {
    setTrainers((prev) =>
      prev.map((trainer) =>
        trainer.id === id ? { ...trainer, isBlocked: !trainer.isBlocked } : trainer
      )
    );
  };

  return <ListTable title="TRAINERS" data={trainers} onToggleBlock={handleBlockToggle} />;
};

export default TrainersList;
