import React from "react";

function Filter({ filter, setFilter }) {
  return (
    <div className="btn-group mt-3 w-100 justify-content-center">
      <button
        className={`btn btn-outline-primary ${filter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`btn btn-outline-primary ${filter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`btn btn-outline-primary ${filter === "incomplete" ? "active" : ""}`}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
}

export default Filter;
