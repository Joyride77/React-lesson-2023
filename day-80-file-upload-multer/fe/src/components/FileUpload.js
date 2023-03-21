import React, { useEffect, useState } from "react";

const FileUpload = () => {
  const URL = "http://localhost:8080/fileUpload";
  const FILE_URL = "http://localhost:8080/files";
  const [imagesUrl, setImagesUrl] = useState([]);

  async function fetchFiles() {
    const FETCHED_DATA = await fetch(FILE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setImagesUrl(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchFiles();
  }, []);

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
    console.log(FETCHED_JSON.data);
    setImagesUrl(FETCHED_JSON.data);
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
      {imagesUrl.map((img, index) => (
        <img key={index} src={img} alt="image" />
      ))}
    </div>
  );
};

export default FileUpload;
