import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import Comment from "./Comment";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const commentData = this.props.dish.comments.map((comment, index) => {
      return <Comment comment={comment} key={index} />;
    });
    return (
      <div>
        <Card style={{ margin: "20px" }}>
          <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
            <p>{this.props.dish.price}/-</p>
            <h3>Comments</h3>
            {commentData}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DishDetail;
