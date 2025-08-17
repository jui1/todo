import React, { useState } from "react";

function TodoEdit({ initialValue, onSave, onCancel }) {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSave(value);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex w-100 gap-2">
      <input
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />
      <button className="btn btn-sm btn-success" type="submit">Save</button>
      <button className="btn btn-sm btn-light" type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default TodoEdit;
