import { createContext, useState } from "react";
import uuid from "react-uuid";

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [formData, setFormData] = useState([]);
  const [deletedData, setDeletedData] = useState([]);
  const [archivedData, setArchivedData] = useState([]);

  return (
    <DataContext.Provider
      value={{
        formData,
        setFormData,
        deletedData,
        setDeletedData,
        archivedData,
        setArchivedData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext };
