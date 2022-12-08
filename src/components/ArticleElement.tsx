import { useEffect, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArticleInterface, SingleArticleProp } from "../types";

function ArticleElement({ id }: SingleArticleProp) {
  const [singleArticleData, setSingleArticleData] =
    useState<ArticleInterface | null>(null);

  const navigate = useNavigate();

  const fetchSingleArticle = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      );

      if (response.ok) {
        let data = await response.json();
        setSingleArticleData(data);
      } else {
        console.log("Error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    singleArticleData && (
      <Col xs={3} className="d-flex justify-content-center h-100 mt-2 mb-2">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={singleArticleData.imageUrl}
            alt={singleArticleData.title}
          />
          <Card.Body>
            <Card.Title>{singleArticleData.title}</Card.Title>
            <Card.Text>{singleArticleData.summary}</Card.Text>
            <Button
              variant="warning"
              onClick={() => navigate(`/article/${singleArticleData.id}`)}
            >
              Show full Article
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  );
}

export default ArticleElement;