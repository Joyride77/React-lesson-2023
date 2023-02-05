// async function fetchAllData() {
//     const FETCHED_DATA = await fetch(URL);
//     const FETCHED_JSON = await FETCHED_DATA.json();
//     setProduct(FETCHED_JSON.data)
//     const filteredProduct = product.filter(data => data.id === id)
//     console.log(filteredProduct);
//     setCurrentProduct(filteredProduct[0]);
// }

// async function handleDelete(productId) {
//   console.log("delete", productId);
//   const options = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       productId: productId,
//     }),
//   };
//   const FETCHED_DATA = await fetch(URL, options);
//   const FETCHED_JSON = await FETCHED_DATA.json();
//   setProduct(FETCHED_JSON.data);
// }

// async function handleSubmit(e) {
//     e.preventDefault();
//     const postData = {
//         title: e.target.title.value,
//         subTitle: e.target.subTitle.value,
//         price: e.target.price.value,
//         description: e.target.description.value,
//         color: e.target.color.value,
//     }
//     console.log("data", postData);

//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(postData),
//     }

//     const FETCHED_DATA = await fetch(URL, options);
//     const FETCHED_JSON = await FETCHED_DATA.json();
//     setProduct(FETCHED_JSON.data);
// }

// async function handleEdit() {
//     const putData = {
//         id: currentProduct.id,
//         title: currentProduct.title,
//         subTitle: currentProduct.subTitle,
//         price: currentProduct.price,
//         description: currentProduct.description,
//         color: currentProduct.color
//     }
//     const options = {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(putData),
//     };
//     const FETCHED_DATA = await fetch(URL, options);
//     const FETCHED_JSON = await FETCHED_DATA.json();
//     setProduct(FETCHED_JSON.data);
// }
