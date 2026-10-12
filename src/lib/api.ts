import BaseUrl from "@/components/BaseUrl";

export const getCategory = async () => {
  const res = await fetch(`${BaseUrl}/api/categories`);
  const data = await res.json();
  return data;
}

export const getProducts = async () => {
  const res = await fetch(`${BaseUrl}/api/products`);
  const data = await res.json();
  return data;
}
