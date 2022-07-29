const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

// This function gets the data, fetch the data, return and also handles the loading as well as the error
const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    // console.log(error);
    productsDOM.innerHTML = '<p class="error">There was an error</p>';
  }
};
// this function is going to be responsible for rendering
const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // id, name, price, img
      return `<a href="product.html?id=${id}&name=nerijus&age=29" class="single-product">
            <img class="single-product-img img" src="${img}" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$ ${formatPrice}</span>
            </footer>
          </a>`;
    })
    // join together with an empty string
    .join("");
  // Success stay
  productsDOM.innerHTML = `<div class="products-container">
    ${productList}
    </div>`;
};

//Place in Display products
const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
