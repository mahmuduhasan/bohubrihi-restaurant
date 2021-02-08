import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

const MenuItem = (props) => {
  return (
    <div>
      <Card style={{ margin: "20px" }}>
        <CardBody>
          <CardImg
            width="100%"
            src={props.data.image}
            alt={props.data.name}
            style={{ opacity: "70%" }}
          />
          <CardImgOverlay>
            <CardTitle
              style={{ cursor: "pointer", textAlign: "center" }}
              onClick={props.itemDetail}
            >
              {props.data.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
