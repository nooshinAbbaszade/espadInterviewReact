import React from "react";

const SearchBox = ({
  onChange,
  value
}) => {
  return(
    <div className="d-flex border p-1 rounded rtl">
      <input
        type="text"
        value={value}
        name="fieldSearch"
        onChange={onChange}
        placeholder={'جستجوی نام فرد'}
        className="form-control font-14 border-0" />
    </div>
  )
}

export default SearchBox;
