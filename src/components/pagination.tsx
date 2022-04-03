
import  { FC} from "react";
import { Link } from "react-router-dom";

export const Pagination :FC=()=>{
  
    return (
      <nav className="numbering">
        <ul className="pagination paging">
          <li>
            <Link to="#" aria-label="Previous">
              <span aria-hidden="true"></span>
            </Link>
          </li>
          <li className="active">
            <Link to="#">
              1<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li>
            <Link to="#">2</Link>
          </li>
          <li>
            <Link to="#">3</Link>
          </li>
          <li>
            <Link to="#">4</Link>
          </li>
          <li>
            <Link to="#">5</Link>
          </li>
          <li>
            <Link to="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }



