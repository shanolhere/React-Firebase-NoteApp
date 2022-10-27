import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import uuid from "react-uuid";

import { MdOutlineDelete } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNotes = () => {
  //console.log(userName);
  const { formData, setFormData, deletedData, archivedData } = useContext(
    DataContext
  );

  const navigate = useNavigate();
  const titleRef = useRef();
  const descRef = useRef();
  const priorityRef = useRef();
  const tagRef = useRef();

  const addNotesHandler = (event) => {
    event.preventDefault();
    const titleEntered = titleRef.current.value;
    const descEntered = descRef.current.value;
    const priorityEntered = priorityRef.current.value;
    const tagEntered = tagRef.current.value;

    const data = {
      id: uuid(),
      title: titleEntered,
      description: descEntered,
      tag: tagEntered,
      priority: priorityEntered,
      createdDate: new Date().toLocaleString(),
      updatedDate: "",
      isEdited: false,
      isArchived: false,
      isDeleted: false
    };
    setFormData([...formData, data]);
    //console.log(formData);

    navigate("/home");
  };
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
        <NavLink to="/account">
          <div className="menuItem">
            <MdAccountCircle size={22} />
            <p className="menu">Account </p>
          </div>
        </NavLink>
        <NavLink to="/addNotes" className="menuActive">
          <div className="menuItem">
            <AiFillFileAdd size={22} />
            <p className="menu">Add Notes </p>
          </div>
        </NavLink>
      </div>
      <div className="notesContainer">
        <div className="addNotesContainer">
          <h3>Create Notes</h3>
          <form onSubmit={addNotesHandler}>
            <div className="input">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                ref={titleRef}
                placeholder="Enter Title"
                required
              />
            </div>
            <div className="input">
              <label>Description:</label>
              <textarea
                rows="10"
                cols="40"
                name="description"
                ref={descRef}
                placeholder="Enter description"
                required
              />
            </div>
            <div className="input">
              <label>Tags</label>
              <input
                type="text"
                name="tag"
                ref={tagRef}
                placeholder="Enter Tags"
                required
              />
            </div>
            <div className="input">
              <label>Priority:</label>
              <select name="priority" ref={priorityRef}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <b className="error"></b>
            <input type="submit" value="Add Notes" className="submitBtn" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddNotes;
