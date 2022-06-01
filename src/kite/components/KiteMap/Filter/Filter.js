import { useState } from "react";
import FilterView from "./FilterView";

export default function Filter({ handleFilter }) {
  const [mode, setMode] = useState("button");
  const [fields, setFields] = useState({ country: "", probability: "" });

  const handleOnClick = () => {
    setMode("form");
  };

  const handleChange = (fieldName, searchValue) => {
    setFields({
      ...fields,
      [fieldName]: searchValue,
    });
  };

  const handleSubmit = () => {
    setMode("button");
    handleFilter(fields);
    setFields({
      country: "",
      probability: "",
    });
  };

  return (
    <FilterView
      mode={mode}
      handleOnClick={handleOnClick}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
