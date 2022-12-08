import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleInterface } from "../types";

const ArticlePage = () => {
  const params = useParams();


  const [singleArticleData, setSingleArticleData] =
    useState<ArticleInterface | null>(null);

  const fetchSingleArticle = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );

      if (response.ok) {
        let data = await response.json();
        setSingleArticleData(data);
        console.log("singleArticleData: " + data);
      } else {
        console.log("Error from the server");
      }
    } catch (error) {
      console.log("🚀 Fatal Error", error);
    }
  };

  
  useEffect(() => {
    fetchSingleArticle();
  }, []);

  return (
    <div className="divArticlePage">
      <img
        src={singleArticleData?.imageUrl}
        alt={singleArticleData?.imageUrl}
        className="mt-5 mb-5"
        width={400}
        height={200}
      />
                  <h1>{singleArticleData?.title}</h1>
            <h4>{singleArticleData?.summary}</h4>
    </div>
  );
};

export default ArticlePage;