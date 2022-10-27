import { useNavigate, NavLink, useParams } from "react-router-dom";

import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

import { MdOutlineDelete } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";

import { AiFillHome } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditNotes = () => {
  const { formData, setFormData, deletedData, archivedData } = useContext(
    DataContext
  );
  const { ID } = useParams();
  const navigate = useNavigate();

  //find the particular editing note.

  let editNote = formData.filter((data) => data.id === ID);

  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [desc, setDesc] = useState("");

  const saveHandler = (event) => {
    event.preventDefault();
    setTitle(editNote[0].title);
    setPriority(editNote[0].priority);
    setDesc(editNote[0].desc);
    setTag(editNote[0].tag);

    editNote = {
      ...editNote[0],
      updatedDate: new Date().toLocaleString(),
      title: title ? title : editNote[0].title,
      description: desc ? desc : editNote[0].description,
      priority: priority ? priority : editNote[0].priority,
      tag: tag ? tag : editNote[0].tag
    };
    //console.log(editNote);
    let newData = formData.filter((data) => data.id !== ID);
    //console.log(newData);
    setFormData([...newData, editNote]);
    toast.success(`Note edited successfully!`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-moveTask"
    });
    navigate("/home");
  };

  return (
    <>
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
          {editNote[0] && (
            <div className="addNotesContainer">
              <h3>Edit Notes</h3>
              <form onSubmit={saveHandler}>
                <div className="input">
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editNote[0].title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    defaultValue={editNote[0].description}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Enter description"
                    required
                  />
                </div>
                <div className="input">
                  <label>Tags</label>
                  <input
                    type="text"
                    name="tag"
                    defaultValue={editNote[0].tag}
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="Enter Tags"
                    required
                  />
                </div>
                <div className="input">
                  <label>Priority:</label>
                  <select
                    name="priority"
                    defaultValue={editNote[0].priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <b className="error"></b>
                <input type="submit" value="Save Notes" className="submitBtn" />
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default EditNotes;
