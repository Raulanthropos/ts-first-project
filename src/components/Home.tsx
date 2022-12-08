import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArticleInterface } from "../types";
import ArticleElement from "./ArticleElement";
import MainElement from "./MainElement";

export default function Home() {
  const [articleData, setArticleData] = useState<ArticleInterface[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles`
      );

      console.log("🚀 response", response);
      if (response.ok) {
        let data = await response.json();
        setArticleData(data);
        console.log(data);
      } else {
        console.log("Error from the server");
      }
    } catch (error) {
      console.log("🚀 Fatal Error", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <MainElement />
        </Col>
      </Row>
      <Row>
        {articleData ? (
          articleData.map((article) => (
            <ArticleElement id={article.id} key={article.id} />
          ))
        ) : (
          <div>Waiting for data...</div>
        )}
      </Row>
    </Container>
  );
}