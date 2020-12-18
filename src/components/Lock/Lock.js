import React, { useState } from "react";

export default function Lock({ setPassword }) {
  const [value, setValue] = useState();
  return (
    <>
      <form noValidate autoComplete="off">
        <label>
          wassa pasword baybee?
          <input
            type="text"
            value={value}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
