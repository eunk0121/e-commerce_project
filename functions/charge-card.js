const fs = require('fs');
const matter = require('gray-matter');
const stripe = requrie('stripe');

const getProducts = () => {
  const filenames = fs.readdirSync(directory);
  const products = filenames.map((filename) => {
    //read the file from fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    //pull out frontmatter => name
    const { data } = matter(fileContent);
    return data;
  });
  return products;
};

exports.handler = async (event, context) => {
  const { cart } = JSON.pasrse(event.body);

  const products = getProducts();

  const cartWithProducts = cart.map(({ id, qty }) => {
    const product = products.find((p) => p.id === id);
    return {
      ...product,
      qty,
    };
  });
  //talking to stripe
  const lineItems = cartWithProducts.map((product) => ({
    price_data: {
      currency: 'INR',
      product_data: {
        name: product.name,
      },
      unit_amount: product.price,
    },
    quantity: product.qty,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cancelled`,
  });

  //charging the card
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  };
};
