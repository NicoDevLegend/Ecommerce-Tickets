"use client";
import axios from "axios";

export default function UpdateProduct() {
  const id = "";
  const body = {};

  const handleSubmit = () => {
    axios
      .post(`/api/products/${id}`, body)
      .then((res) => alert(JSON.stringify(res.data)))
      .catch((err) => alert(JSON.stringify(err)));
  };

  return (
    <div>
      <form className="flex flex-col justify-center">
        <textarea readOnly value={JSON.stringify(body)} />
        <button
          type="button"
          className="m-auto rounded-md p-2.5 text-gray-100 bg-indigo-400"
          onClick={() => handleSubmit()}
        >
          submit
        </button>
      </form>
    </div>
  );
}
