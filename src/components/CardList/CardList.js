import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

import "./CardList.css";

function CardList(props) {
  const imageStyle = {
    height: "8.215rem",
  };

  return (
    <Row>
      {props.articles &&
        props.articles.map((item, index) => {
          return (
            <Col
              key={index}
              xl={3}
              lg={4}
              sm={6}
              xs={12}
              className="d-flex justify-content-center"
            >
              <Card
                className="shadow p-3 mb-5 bg-white rounded"
                style={{ width: "18rem", height: "30.3rem" }}
              >
                <Card.Img
                  style={imageStyle}
                  variant="top"
                  src={item.urlToImage}
                />
                <Card.Body>
                  <Card.Title className="title">{item.title}</Card.Title>
                  <Card.Text className="content">
                    {item.content.split("[")[0]}
                  </Card.Text>
                  <Card.Title className="author-name">{item.author}</Card.Title>
                  <Card.Title className="date">
                    {item.publishedAt.split("T")[0]}
                  </Card.Title>
                  <Button
                    variant="primary"
                    className="float-right"
                    href={item.url}
                    target="_blank"
                  >
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}

export default React.memo(CardList);
