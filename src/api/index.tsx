import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3333" });

export const getStock = async () => {
  const response = await api.get("stock");
  const data = await response.data;
  return data;
};

export const getProducts = async () => {
  const response = await api.get("products");
  const data = await response.data;
  return data;
};
