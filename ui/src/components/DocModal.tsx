import { Modal, Button } from "@mui/material";
import { useState } from "react";

function DocModal() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      className="grid place-items-center px-2"
    >
      <div className="flex justify-center flex-col w-full h-3/6 sm:w-3/6 sm:h-48 bg-gray-100 rounded-xl outline-none px-4">
        <p className="mb-4">Create document</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Provide doc name"
            className="rounded-md p-2 mb-3 w-full outline-none"
          />
          <div className="flex space-x-3 justify-center">
            <Button onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="contained" type="submit">
              Create
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default DocModal;
