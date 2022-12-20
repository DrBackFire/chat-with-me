import DocRow from "./DocRow";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IDocument } from "../interfaces/document-interface";

interface Prop {
  docs: IDocument[];
}

function DocListing({ docs = [] }: Prop) {
  return (
    <section className="py-5 text-gray-600 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between pb-5 text-sm">
          <h2 className="font-medium flex-grow">My Documents</h2>
          <p className="mr-12">Date created</p>
          <FolderOpenIcon />
        </div>

        {docs.map((doc) => (
          <DocRow key={doc.id} doc={doc} />
        ))}
      </div>
    </section>
  );
}

export default DocListing;
