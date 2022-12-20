import Header from "../components/Header";

import { useEffect, useState, useRef, Ref, DOMAttributes } from "react";
import { Button, IconButton, Modal } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import DocumentRow from "../components/DocRow";
import DocListing from "../components/DocListing";
// import useUser from "./hooks/useUser";
// import Login from "./components/Login";

function Home() {
  const [docs, setDocs] = useState([
    { fileName: "Note 1", id: 1 },
    { fileName: "Note 2", id: 2 },
    { fileName: "Note 3", id: 3 },
    { fileName: "Note 4", id: 4 },
    { fileName: "Note 5", id: 5 },
  ]);
  const docNameFieldRef = useRef<any>(null);

  // if (true) return <Login />;

  // const docsRef = db
  //   .collection('userDocs')
  //   .doc(session?.user.email)
  //   .collection('docs');

  return (
    <div className="">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />

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
                  //   setShowModal(true);
                  // console.log(user);
                }}
                className="relative h-52 w-40 border cursor-pointer hover:border-blue-700 rounded-md overflow-hidden"
              >
                <img
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

      <DocListing docs={[]} />
    </div>
  );
}

export default Home;
