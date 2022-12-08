import React from "react";
import { Button, Card } from "react-bootstrap";

export default function MainElement() {
  return (
    <Card className="mt-5">
      <h1>Here's the latest space-news!</h1>
      <p>
        Here you find the most popular articles about all space gossip available on the interwebs!
      </p>
      <p>
        <Button variant="primary">Load Articles</Button>
      </p>
    </Card>
  );
}