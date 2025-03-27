export const searchArticles = (articles, query) => {
    return articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
  };