import React, {Component, PropTypes} from 'react';
import { MdPrint } from 'react-icons/md';
import ReactToPrint from 'react-to-print';
import '../styles/knt-epmis.css';
// import { jsPDF } from "jspdf";
// import { html2canvas } from "html2canvas";

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export class ExportPDF extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {text, id} = this.props;
   
    return (
      <div>
         <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button className="knt-print-btn" href="#">{text} <MdPrint/></button> 
          }}
          content={() => this.componentRef}
        />
        <div ref={el => (this.componentRef = el)}>
          {this.props.children}      
        </div>
      </div>
    )
  }
}
// export const PrintBtn = (text) => {
//   return (
//     <ReactToPrint
//           trigger={() => {
//             // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//             // to the root node of the returned component as it will be overwritten.
//             return <button href="#">{text}</button>;
//           }}
//           content={() => this.componentRef}
//         />
//   )
// }
// const convert = {
//   pdf: function(name) {
//     // let id = document.getElementById("divToPrint")
//     var doc = new jsPDF();
//     let nD = html2canvas(document.getElementById("divToPrint"))
//     doc.canvas(nD, 10, 10)
//     doc.save(name);
//   }
// }


export default ExportPDF;