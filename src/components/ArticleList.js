
import Article from "./Article";

function ArticleList({ posts }) {
  const articleArray = posts.map(posts => {
    return <Article key={posts.id}
      title={posts.title}
      date={posts.date}
      preview={posts.preview}
    />;
  })
    return <main>
      {articleArray}
    </main>;
}

export default ArticleList;