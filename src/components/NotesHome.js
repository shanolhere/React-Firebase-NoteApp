import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const NotesHome = ({ userName }) => {
  //console.log(userName);
  const { formData, setFormData, archivedData, deletedData } = useContext(
    DataContext
  );
  //console.log(formData);

  return (
    <div className="homeContainer">
      <div className="sidebar">
        <NavLink to="/home">
          Home <span>{formData.length}</span>
        </NavLink>
        <NavLink to="/archive">
          Archive <span>{archivedData.length}</span>
        </NavLink>
        <NavLink to="/trash">
          Trash <span>{deletedData.length}</span>
        </NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/addNotes">Add Notes</NavLink>
      </div>
      <div className="notesContainer"></div>
    </div>
  );
};
export default NotesHome;
