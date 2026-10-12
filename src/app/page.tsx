import BannerPage from "@/components/Banner";
import ProductCardPage from "@/components/ProductCard";
import { getProducts } from "@/lib/api";
import { IProducts } from "@/type/type";


export default async function Home() {
  const products: IProducts[] = await getProducts();
  // console.log(products);
  return (
    <div className="container mx-auto max-w-6xl">
      <BannerPage />

      <div className="mt-10 flex justify-between items-center">
        <div className="my-5 flex items-center gap-2">
          <h2 className="sm:text-xl font-bold text-sm text-center sm:text-left"><span className="text-lg">⚡</span> All Products</h2>
          <p className="bg-gray-200 px-2 py-1 rounded-3xl flex items-center justify-center">{products.length} products</p>
        </div>
        <div className="">
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
          </label>
        </div>

        {/* product card  */}
        <div className="">
          {products.map(p => {
            return (
              <ProductCardPage key={p._id} {...p} />
            )
          })}
        </div>
      </div>
    </div>
  );
}
