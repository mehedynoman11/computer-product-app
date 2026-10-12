import BannerPage from "@/components/Banner";
import { getProducts } from "@/lib/api";


export default async function Home() {
  const products = await getProducts();
  // console.log(products);
  return (
    <div className="container mx-auto max-w-6xl">
      <BannerPage />
      
      <div className="mt-10">

      </div>
    </div>
  );
}
