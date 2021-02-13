import { useRouter } from 'next/router';

const Name = () => {
  const router = useRouter();
  const { name } = router.query;

  return <h1>welcome {name}</h1>;
};

export default Name;
