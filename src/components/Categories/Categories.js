import { Row } from "react-bootstrap";

import "./Categories.css";

function Categories(props) {
  return (
    <Row className="d-flex justify-content-around my-5">
      {props.categoryList.map((item, index) => {
        return (
          <div
            className="filter px-3 pt-1 pb-1 mx-2 justify-content-center"
            onClick={() => {
              props.setCategory(item);
            }}
            id="All-Products"
            key={index}
          >
            {item}
          </div>
        );
      })}
    </Row>
  );
}

export default Categories;
