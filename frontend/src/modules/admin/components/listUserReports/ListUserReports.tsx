import React, { useState } from "react";
import ListReportsTable from "./ListReportsTable";

const ListUserReports: React.FC = () => {
  const [userReports, setUserReports] = useState([
    { id: 1, username: "Anoop", trainerName: "John Don", date: "10/10/2025", reportType: "Safety", status: true },
    { id: 2, username: "Rahul", trainerName: "Mark Lee", date: "12/10/2025", reportType: "Performance", status: false },
    { id: 3, username: "Sneha", trainerName: "Sarah Kim", date: "15/10/2025", reportType: "Diet", status: true },
    { id: 4, username: "Vikram", trainerName: "Chris Paul", date: "18/10/2025", reportType: "Injury", status: false },
    { id: 5, username: "Divya", trainerName: "Emma Watson", date: "20/10/2025", reportType: "Safety", status: true },
    { id: 6, username: "Arjun", trainerName: "James Smith", date: "22/10/2025", reportType: "Performance", status: true },
    { id: 7, username: "Neha", trainerName: "Olivia Brown", date: "25/10/2025", reportType: "Diet", status: false },
    { id: 8, username: "Suraj", trainerName: "David Miller", date: "28/10/2025", reportType: "Injury", status: true },
    { id: 9, username: "Priya", trainerName: "Sophia Wilson", date: "30/10/2025", reportType: "Safety", status: false },
    { id: 10, username: "Rohan", trainerName: "Liam Johnson", date: "02/11/2025", reportType: "Performance", status: true }
  ]);


  return <ListReportsTable title="USER REPORTS" data={userReports}/>;
};

export default ListUserReports;
