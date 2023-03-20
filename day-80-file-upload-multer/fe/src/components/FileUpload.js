import React from "react";

const FileUpload = () => {
  const URL = "http://localhost:8080/fileUpload";

  const handleFileUpload = async (e) => {
    e.preventDefault();
    console.log(e.target.image.files);
    const data = new FormData();
    const files = e.target.image.files;
    data.append("image", files[0]);

    const options = {
      method: "POST",
      body: data,
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };

  return (
    <div>
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleFileUpload}
      >
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FileUpload;
