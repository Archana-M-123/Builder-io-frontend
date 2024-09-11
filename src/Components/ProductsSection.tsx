import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api"; // Adjust the import path as needed

interface Product {
  imgSrc: string;
  altText: string;
  title: string;
  price: string;
}

interface ProductCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  altText,
  title,
  price,
}) => (
  <article className="flex flex-col flex-1">
    <div className="flex flex-col px-px pt-3 pb-px bg-yellow-100 rounded-2xl border border-gray-200 border-solid">
      <img
        loading="lazy"
        src={imgSrc}
        className="object-contain self-center max-w-full aspect-square w-[159px]"
        alt={altText}
      />
      <div className="flex flex-col items-start pt-3 pr-11 pb-5 pl-3 mt-5 bg-white rounded-none max-md:pr-5">
        <h3 className="font-semibold leading-5 text-zinc-600">{title}</h3>
        <p className="mt-5 font-medium leading-none text-zinc-500">{price}</p>
      </div>
    </div>
  </article>
);

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="mt-24 max-md:mt-10 ml-32 mr-32">
      <div className="flex flex-wrap gap-5 justify-between self-center w-full mb-5 w-[1580px]">
        <h2 className="relative text-3xl font-bold leading-none text-zinc-600">
          Popular Products
        </h2>
        <a
          href="#all-products"
          className="flex gap-1.5 items-center my-auto text-base font-medium leading-none text-right text-neutral-800"
        >
          View All
          <img
            loading="lazy"
            src="arrow.png"
            className="object-contain shrink-0 aspect-square w-[18px]"
            alt=""
          />
        </a>
      </div>

      <div className="relative w-[1580px] h-px bg-gray-200">
        <div className="absolute top-0 left-0 w-[320px] bg-yellow-400 h-[4px] rounded-full"></div>
      </div>

      <div className="flex flex-wrap gap-6 self-end mt-10 w-full text-base w-[1610px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc={product.imgSrc}
            altText={product.altText}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
