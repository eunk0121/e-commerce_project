import fs from 'fs';
import matter from 'gray-matter';
import marked, { use } from 'marked';
import styled from 'styled-components';
import Page from '../../components/styled/Page';

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const SubTitle = styled.div`
  padding: 0.75rem 0.5rem;
  color: #666;
`;

const Price = styled.span`
  font-size: 2rem;
  background: #05d7df;
  padding: 0.25rem 1rem;
  border-radius: 5px;
  color: white;
  font-weight: 800;
  margin-bottom: 1rem;
  display: inline-block;
`;

const Container = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  min-height: 200px;
  position: relative;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Product = ({ product: { data, content } }) => {
  const html = marked(content);
  return (
    <Container>
      <Title>
        <h1>{data.name}</h1>
        <SubTitle>{data.description}</SubTitle>
      </Title>
      <Price>${data.price / 100}</Price>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
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
