import { NavLink, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";

import { AiFillHome } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Trash = ({ userName }) => {
  const {
    formData,
    setFormData,
    deletedData,
    setDeletedData,
    archivedData,
    setArchivedData
  } = useContext(DataContext);

  const navigate = useNavigate();

  const deleteHandler = (note) => {
    const newData = deletedData.filter((data) => data.id !== note.id);
    setDeletedData([...newData]);
    toast.success(`Note deleted permanently!`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
  };

  const archiveHandler = (note) => {
    note = { ...note, isArchived: true };
    //console.log(note);
    setArchivedData([...archivedData, note]);
    const newData = deletedData.filter((data) => data.id !== note.id);
    setDeletedData([...newData]);
    toast.success(`Note moved to Archive!`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
  };

  // const editHandler = (note) => {
  //   navigate(`/edit/${note.id}`);
  //   note = { ...note, isEdited: true };
  //   const newData = deletedData.filter((data) => data.id !== note.id);
  //   // console.log(newData);
  //   if (newData.length === 0) {
  //     setDeletedData([note]);
  //   } else {
  //     const newFormData = newData.filter((data) => data.id !== note.id);
  //     setDeletedData([...newFormData, note]);
  //   }
  // };

  return (
    <>
      <ToastContainer />
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
          <NavLink to="/trash" className="menuActive">
            <div className="menuItem">
              <MdOutlineDelete size={22} />
              <p className="menu">Trash </p>
              <span className="badge">{deletedData.length}</span>
            </div>
          </NavLink>
          <NavLink to="/account">
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
        <div className="notesContainer">
          {deletedData.length <= 0 ? (
            <h2>No notes in Trash</h2>
          ) : (
            <div className="allNotes">
              {deletedData.map((data) => {
                return (
                  <div className="noteContainer" key={data.id}>
                    <div className="title">
                      <h2>{data.title}</h2>
                    </div>

                    <div className="descContainer">
                      <div className="OtherDetails">
                        <div className="additionalInfo">
                          <span>{data.tag}</span>
                          <span className={data.priority}>{data.priority}</span>
                        </div>
                        <div className="icons">
                          {/* <button
                            className="editBtn"
                            onClick={() => editHandler(data)}
                          >
                            <FiEdit2 size={22} />
                          </button> */}
                          <button
                            className="deleteBtn"
                            onClick={() => deleteHandler(data)}
                          >
                            <MdOutlineDelete size={26} />
                          </button>
                          <button
                            className="archiveBtn"
                            onClick={() => archiveHandler(data)}
                          >
                            <BiArchiveIn size={24} />
                          </button>
                        </div>
                      </div>
                      <hr />
                      <p className="desc">{data.description}</p>
                    </div>
                    <div className="dates">
                      <small>Created at: {data.createdDate}</small>
                      <br />
                      <small>Updated at: {data.updatedDate}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Trash;
