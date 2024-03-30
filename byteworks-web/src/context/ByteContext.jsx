import React, { createContext, useContext } from "react";

const jsonData = [
  {
    "id": "1",
    "title": "Web Developer",
    "subtitle": "Empresa 1",
    "type": ["Plazo Fijo"],
    "status": ["En Progreso"],
    "role": ["Frontend"],
    "skills": ["Python"]
  },
  {
    "id": "2",
    "title": "Fullstack Developer",
    "subtitle": "Empresa 2",
    "type": ["Plazo Fijo"],
    "status": ["En Progreso"],
    "role": ["Backend"],
    "skills": ["Javascript"]
  },
  {
    "id": "3",
    "title": "Mobile Web Api",
    "subtitle": "Empresa 3",
    "type": ["Freelance"],
    "status": ["En Progreso"],
    "role": ["Fullstack"],
    "skills": ["Typescript"]
  }
];

const DataContext = createContext();

const DataProvider = ({ children }) => {
  return <DataContext.Provider value={jsonData}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };
