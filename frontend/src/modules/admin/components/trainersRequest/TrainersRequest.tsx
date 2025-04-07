import { useState } from "react";
import TrainerRequestTable from "./TrainerRequestTable";

const TrainersRequest = () => {
  const [trainersRequest, setTrainersRequest] = useState([
    { id: 1, name: "Mark", email: "mark@gmail.com", status: true },
    { id: 2, name: "Jacob", email: "jacob@gmail.com", status: false },
    { id: 3, name: "Larry", email: "larry@gmail.com", status: true },
    { id: 4, name: "Sophie", email: "sophie@gmail.com", status: false },
    { id: 5, name: "Ryan", email: "ryan@gmail.com", status: true },
    { id: 6, name: "Emily", email: "emily@gmail.com", status: false },
    { id: 7, name: "Chris", email: "chris@gmail.com", status: true },
    { id: 8, name: "Nina", email: "nina@gmail.com", status: false },
    { id: 9, name: "Tom", email: "tom@gmail.com", status: true },
    { id: 10, name: "Ava", email: "ava@gmail.com", status: false },
  ]);
  
  return <TrainerRequestTable title="REQUESTS" data={trainersRequest}/>;
}

export default TrainersRequest