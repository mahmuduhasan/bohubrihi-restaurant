import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Comment = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.comment.author}</CardTitle>
          <CardText>{props.comment.comment}</CardText>
          <h4>Rating:-{props.comment.rating}/5</h4>
          <p>{props.comment.date}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Comment;
