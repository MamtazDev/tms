import React, { useRef, useState } from "react";

const List = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <section className="container mx-auto">
      <h3 className="text-center text-[1.5rem] mb-16">
        Please Tell Us About Your Storage Place:
      </h3>
      <form className="grid grid-cols-1 p-20 lg:p-0 lg:grid-cols-2 gap-20">
        <div className="flex items-center">
          <div className="w-[350px] flex flex-col gap-5">
            <div className="flex justify-between">
              <label>Storage Name:</label>
              <input
                className="inputFiled"
                type="text"
                name="storageName"
                required
              />
            </div>
            <div className="flex justify-between">
              <label>Available Space:</label>
              <input
                className="inputFiled"
                type="number"
                name="availableSpace"
                required
              />
            </div>
            <div className="flex justify-between">
              <label>Address:</label>
              <input
                className="inputFiled"
                type="text"
                name="address"
                required
              />
            </div>
            <div className="flex justify-between">
              <label>Price:</label>
              <input
                className="inputFiled"
                type="number"
                name="price"
                required
              />
            </div>
            <div className="flex justify-between">
              <label>Category:</label>
              <input
                className="inputFiled"
                type="text"
                name="category"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10">
            <label>Description:</label>
            <textarea className="inputFiled w-1/2" name="description" />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <p>Dates: </p>
            <div className="flex  gap-3 items-center">
              <label>From:</label>
              <input
                className="inputFiled"
                type="date"
                name="fromDate"
                required
              />
            </div>
            <div className="flex gap-3 items-center">
              <label>To:</label>
              <input
                className="inputFiled"
                type="date"
                name="toDate"
                required
              />
            </div>
          </div>
          <div className="flex gap-10">
            <label>Add Photo:</label>
            <span
              style={{ lineHeight: "16px" }}
              className="cursor-pointer rounded-[5px] bg-[#2e2e2e] border text-[20px] text-white  px-2"
              onClick={handleClick}
            >
              +
            </span>
            <input
              type="file"
              ref={inputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div className={selectedImage && "w-[300px] h-[200px]"}>
            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt=""
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div className="text-white text-center">
            <button className="border-2 px-8">List it!</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default List;
