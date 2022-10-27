import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { MdOutlineDelete } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import Profile from "../assets/profile.jpg";

const Account = ({ userName, email }) => {
  // console.log(userName);
  const { formData, deletedData, archivedData } = useContext(DataContext);
  return (
    <div className="homeContainer">
      <div className="sidebar">
        <NavLink to="/home">
          <div className="menuItem">
            <AiFillHome size={22} />
            <p className="menu">Home </p>
            <span className="badge">{formData.length}</span>
          </div>
        </NavLink>
        <NavLink to="/archive">
          <div className="menuItem">
            <BiArchiveIn size={22} />
            <p className="menu">Archive </p>
            <span className="badge">{archivedData.length}</span>
          </div>
        </NavLink>
        <NavLink to="/trash">
          <div className="menuItem">
            <MdOutlineDelete size={22} />
            <p className="menu">Trash </p>
            <span className="badge">{deletedData.length}</span>
          </div>
        </NavLink>
        <NavLink to="/account" className="menuActive">
          <div className="menuItem">
            <MdAccountCircle size={22} />
            <p className="menu">Account </p>
          </div>
        </NavLink>
        <NavLink to="/addNotes">
          <div className="menuItem">
            <AiFillFileAdd size={22} />
            <p className="menu">Add Notes </p>
          </div>
        </NavLink>
      </div>
      <div className="notesContainer profileContainer">
        <img src={Profile} alt="profile" className="profile" />
        <h1>{userName}</h1>
        <h4>{email}</h4>
        <table>
          <tbody>
            <tr>
              <th>No. of Notes</th>
              <td> : </td>
              <td>{formData.length}</td>
            </tr>
            <tr>
              <th>No. of notes archieved</th>
              <td> : </td>
              <td>{archivedData.length}</td>
            </tr>
            <tr>
              <th>No. of notes deleted</th>
              <td> : </td>
              <td>{deletedData.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Account;
