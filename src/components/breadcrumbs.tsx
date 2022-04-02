
import { Component } from "react";
interface Breadcrumbprop {
  currentPage: string;
}
 export default class Breadcrumb extends Component <Breadcrumbprop> {
  render() {
    return (
      <div className="breadcrumbs">
        <div className="container">
          <ol
            className="breadcrumb breadcrumb1 animated wow slideInLeft"
            data-wow-delay=".5s"
          >
            <li>
              <a href="index.html">
                <span
                  className="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Home
              </a>
            </li>
            <li className="active">{this.props.currentPage}</li>
          </ol>
        </div>
      </div>
    );
  }
}
