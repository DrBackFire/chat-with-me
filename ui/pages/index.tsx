import Head from "next/head";
import Header from "../components/Header";
import { useEffect, useState, useRef, Ref, DOMAttributes } from "react";
import { useSession } from "next-auth/react";
import { Button, IconButton, Modal } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Image from "next/image";

import DocumentRow from "../components/DocumentRow";
import useUser from "../hooks/useUser";
import Login from "../components/login";

export default function Home() {
  const { user } = useUser();

  const { data: session } = useSession();

  const [showModal, setShowModal] = useState(false);
  const [docs, setDocs] = useState([]);
  const docNameFieldRef = useRef<any>(null);

  if (!session) return <Login />;

  // const docsRef = db
  //   .collection('userDocs')
  //   .doc(session?.user.email)
  //   .collection('docs');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = docNameFieldRef.current.value;

    // if (inputValue) {
    //   docsRef
    //     .add({
    //       fileName: inputValue,
    //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     })
    //     .then(() => {
    //       setShowModal(false);
    //       e.target.reset();
    //     })
    //     .catch((err) => alert(err));
    // }
  };

  const ModalComponent = () => (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="grid place-items-center px-2"
    >
      <div className="flex justify-center flex-col w-full h-3/6 sm:w-3/6 sm:h-48 bg-gray-100 rounded-xl outline-none px-4">
        <p className="mb-4">Create document</p>
        <form onSubmit={handleSubmit}>
          <input
            ref={docNameFieldRef}
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

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <ModalComponent /> */}

      <section className="bg-[#F0F3F4] py-5 text-gray-600 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <p>Start a new document</p>

            <div className="newDoc-btns flex items-center space-x-2">
              <Button>
                Template gallery
                <UnfoldMoreIcon />
              </Button>
              <div className="border-l h-7 bg-gray-600 border-gray-300"></div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>

          <div className="">
            <div className="">
              <div
                onClick={() => {
                  // setShowModal(true);
                  console.log(user);
                }}
                className="relative h-52 w-40 border cursor-pointer hover:border-blue-700 rounded-md overflow-hidden"
              >
                <Image
                  fill
                  alt=""
                  src={
                    "https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
                  }
                />
              </div>
              <p className="ml-2 mt-2 text-sm">Blank</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 text-gray-600 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between pb-5 text-sm">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date created</p>
            <FolderOpenIcon />
          </div>

          {/* {docs?.map((doc) => (
            <DocumentRow key={doc.id} doc={doc} />
          ))} */}
        </div>
      </section>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   return {
//     props: { session },
//   };
// }
