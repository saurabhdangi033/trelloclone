import React, { useState } from "react";
import "./Content.css";

const Content = ({ activeTab }) => {
  const [showCreateBoard, setShowCreateBoard] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  const [visibility, setVisibility] = useState("private");

  const renderContent = () => {
    switch (activeTab) {
      case "workspace":
        return <div>Workspace Content</div>;
      case "recent":
        return <div>Recent Boards</div>;
      case "starred":
        return <div>Starred Boards</div>;
      case "templates":
        return <div>Templates and Ideas</div>;
      case "create":
        return (
          <div>
            <button onClick={() => setShowCreateBoard(true)}>
              Create New Board
            </button>
            {showCreateBoard && (
              <form onSubmit={handleCreateBoard} className="create-board-form">
                <div>
                  <label htmlFor="boardTitle">Board Title:</label>
                  <input
                    type="text"
                    id="boardTitle"
                    value={boardTitle}
                    onChange={(e) => setBoardTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="visibility">Visibility:</label>
                  <select
                    id="visibility"
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                  >
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                    <option value="workspace-visible">Workspace Visible</option>
                  </select>
                </div>
                <button type="submit">Create Board</button>
              </form>
            )}
          </div>
        );
      default:
        return <div>Select an option from the navbar.</div>;
    }
  };

  const handleCreateBoard = (e) => {
    e.preventDefault();
    console.log("Creating board with title:", boardTitle, "and visibility:", visibility);
    // Here, you can add logic to send the board details to your backend API.
    
    // Resetting the form after submission
    setBoardTitle("");
    setVisibility("private");
    setShowCreateBoard(false);
  };

  return <div className="content-container">{renderContent()}</div>;
};

export default Content;
