import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDFViewer extends React.Component {
  render() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //   setNumPages(numPages);
    // }
    return (
      <div>
        <Document file="./resume.pdf">
          <Page pageNumber={1} />
        </Document>
        <p>Page 1 of 1</p>
      </div>
    );
  }
}
