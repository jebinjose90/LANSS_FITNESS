import React, { useState } from "react";
import ListTable from "../../../common/ListTable";


const TrainersList: React.FC = () => {
  const [trainers, setTrainers] = useState([
    { id: 1, name: "Mark", specialization: "HIIT", email: "@mdo", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
    { id: 2, name: "Jacob", specialization: "HIIT", email: "@fat", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: false },
    { id: 3, name: "Larry", specialization: "HIIT", email: "@google", image: "https://i.imgur.com/f9szTOU.jpeg", isBlocked: true },
  ]);

  const handleBlockToggle = (id: number) => {
    setTrainers((prev) =>
      prev.map((trainer) =>
        trainer.id === id ? { ...trainer, isBlocked: !trainer.isBlocked } : trainer
      )
    );
  };

  return <ListTable title="Trainers" data={trainers} onToggleBlock={handleBlockToggle} />;
};

export default TrainersList;
