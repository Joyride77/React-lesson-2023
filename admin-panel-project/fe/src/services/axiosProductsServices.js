import axios from "axios";

async function fetchAllData(URL, setProduct) {
  const FETCHED_DATA = await axios.get(URL);
  setProduct(FETCHED_DATA.data.data);
}

async function deleteProduct(productId, URL, setProduct) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      productId: productId,
    },
  });
  setProduct(FETCHED_DATA.data.data);
}

async function createProduct(e, URL, setProduct) {
  const postData = {
    title: e.target.title.value,
    subTitle: e.target.subTitle.value,
    price: e.target.price.value,
    description: e.target.description.value,
    color: e.target.color.value,
  };
  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: { ...postData },
  });
  setProduct(FETCHED_DATA.data.data);
}

async function updateProduct(currentProduct, URL, setProduct) {
  const putData = {
    id: currentProduct.id,
    title: currentProduct.title,
    subTitle: currentProduct.subTitle,
    price: currentProduct.price,
    description: currentProduct.description,
    color: currentProduct.color,
  };
  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: { ...putData },
  });
  setProduct(FETCHED_DATA.data.data);
}
export { fetchAllData, deleteProduct, createProduct, updateProduct };
