import { getPosts, getPostById } from "./index.js";

const main = async () => {
  const posts = await getPosts();
  console.log(posts);

  const post = await getPostById(1);
  console.log(post);
};

main();