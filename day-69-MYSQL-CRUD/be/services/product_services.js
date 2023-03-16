import { pool } from "../config/mysql-config.js";

export async function getAllProducts() {
  const [rows] = await pool.query(`select * from products`);

  await Promise.all(
    rows.map(async (row) => {
      const descriptions = await getDescriptions(row.id);
      const reviews = await getReviews(row.id);
      const images = await getImages(row.id);
      const sizes = await getSizes(row.id);
      const colors = await getColors(row.id);
      row.description = descriptions.map((d) => d.description);
      row.reviews = reviews;
      row.imgUrl = images;
      row.size = sizes.map((s) => s.size);
      row.color = colors.map((c) => c.color);
    })
  );
  return rows;
}

export async function search(keyword) {
  const [rows] = await pool.query(
    `select * from products WHERE title LIKE '%${keyword}%'`
  );

  await Promise.all(
    rows.map(async (row) => {
      console.log(row);
      const descriptions = await getDescriptions(row.id);
      const reviews = await getReviews(row.id);
      const images = await getImages(row.id);
      const sizes = await getSizes(row.id);
      const colors = await getColors(row.id);
      row.description = descriptions.map((d) => d.description);
      row.reviews = reviews;
      row.imgUrl = images;
      row.size = sizes.map((s) => s.size);
      row.color = colors.map((c) => c.color);
      //   console.log(descriptions);
    })
  );

  return rows;
}

export async function getDescriptions(productId) {
  const [rows] = await pool.query(
    `select * from product_description WHERE product_id = ?`,
    [productId]
  );

  return rows;
}

export async function getReviews(productId) {
  const [rows] = await pool.query(
    `select customer, review from product_reviews WHERE product_id = ?`,
    [productId]
  );

  return rows;
}

export async function getImages(productId) {
  const [rows] = await pool.query(
    `select original,thumbnail from product_images WHERE product_id = ?`,
    [productId]
  );

  return rows;
}

export async function getSizes(productId) {
  const [rows] = await pool.query(
    `select s.size from product_size ps LEFT JOIN size s on s.id = ps.size_id WHERE product_id = ?`,
    [productId]
  );

  return rows;
}

export async function getColors(productId) {
  const [rows] = await pool.query(
    `select c.color from product_colors pc LEFT JOIN color c on c.id = pc.color_id WHERE product_id = ?`,
    [productId]
  );

  return rows;
}
