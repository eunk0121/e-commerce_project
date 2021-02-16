import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';

const Product = ({ product: { data, content } }) => {
  const html = marked(content);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>${data.price / 100}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/content`; //string value
  const filenames = fs.readdirSync(directory);

  const paths = filenames.map((filename) => {
    return {
      params: {
        product: filename.replace('.md', ''),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const productName = context.params.product;
  const filePath = `${process.cwd()}/content/${productName}.md`;
  const fileContent = fs.readFileSync(filePath).toString();
  const { data, content } = matter(fileContent);
  return {
    props: {
      product: { data, content },
    },
  };
};

export default Product;
