import api from "./axios";

// -----------USERS----------

// USERS API
export const syncUser = async (userData) => {
  const { data } = await api.post("/users/sync", userData);
  return data;
};

// -----------PRODUCTS----------

// PRODUCTS API
export const getAllProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

// PRODUCT BY ID API
export const getProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

// PRODUCT BY ID API
export const getMyProducts = async () => {
  const { data } = await api.get(`/products/my`);
  return data;
};

// CREATE PRODUCT API
export const createProduct = async (productData) => {
  const { data } = await api.post(`/products`, productData);
  return data;
};

// UPDATE PRODUCT API
export const updateProduct = async ({ id, ...productData }) => {
  const { data } = await api.put(`/products/${id}`, productData);
  return data;
};

// DELETE PRODUCT API
export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};

// -----------COMMENTS----------

// CREATE COMMENT API
export const createComment = async ({ productId, content }) => {
  const { data } = await api.post(`/comments/${productId}`, { content });
  return data;
};

// DELETE COMMENT API
export const deleteComment = async (commentId) => {
  const { data } = await api.delete(`/comments${commentId}`);
  return data;
};
