import React from "react";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  const [click, setClick] = useState(false);
  function checkClick() {
    setClick(true);
  }
  return (
    <div>
      <form className="create-note">
        {click && (
          <Zoom in={click} style={{ transitionDelay: click ? "300ms" : "0ms" }}>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          </Zoom>
        )}

        <textarea
          onClick={checkClick}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={click ? 3 : 1}
        />

        <Zoom in={click} style={{ transitionDelay: click ? "300ms" : "0ms" }}>
          <Fab onClick={submitNote}>
            <AddCircleIcon fontSize="large" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
