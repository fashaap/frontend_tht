import React from "react";
import { useParams } from "react-router-dom";

const DocumentationDetailPage = () => {
  const { id } = useParams();

//   const data_article = destinations.find(
//     (article) => article.id === parseInt(id)
//   );

//   if (!data_article) {
//     return <NotFoundArticle />;
//   }

  console.log("DocumentationPage ID:", id);
  return <div>DocumentationDetailPage</div>;
};

export default DocumentationDetailPage;
