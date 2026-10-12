import { IProducts } from '@/type/type';
import Image from 'next/image';
import React from 'react';

const ProductCardPage = (p:IProducts) => {
     const isDown = p.trend === "down";
  const hasDiscount = p.previousPrice > p.currentPrice;
  const discountPercent = hasDiscount
    ? Math.round(((p.previousPrice - p.currentPrice) / p.previousPrice) * 100)
    : 0;

  const cheapestStore = p.stores?.length
    ? p.stores.reduce((min, s) => (s.price < min.price ? s : min), p.stores[0])
    : null;

  return (
    <div className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Discount badge */}
      {hasDiscount && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow">
          -{discountPercent}%
        </span>
      )}

      {/* Trend badge */}
      <span
        className={`absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow ${
          isDown
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        <span>{isDown ? "▼" : "▲"}</span>
        <span>
          {isDown ? "-" : "+"}
          {Math.abs(p.trendPercent)}%
        </span>
      </span>

      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-t-2xl bg-gray-50">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Category + brand */}
        <div className="flex items-center justify-between text-xs">
          <span className="rounded-full bg-blue-50 px-2 py-0.5 font-medium capitalize text-blue-600">
            {p.category}
          </span>
          <span className="font-semibold uppercase tracking-wide text-gray-400">
            {p.brand}
          </span>
        </div>

        {/* Name */}
        <h3
          className="line-clamp-2 text-base font-semibold text-gray-900"
          title={p.name}
        >
          {p.name}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-gray-500">{p.description}</p>

        {/* Price */}
        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">
                ${p.currentPrice.toLocaleString()}
              </span>
              <span className="text-xs text-gray-400">/ {p.unit}</span>
            </div>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                ${p.previousPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Cheapest store */}
        {cheapestStore && (
          <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-1.5 text-xs text-gray-600">
            <span className="font-medium">Best at</span>
            <span className="truncate font-semibold text-gray-800">
              {cheapestStore.name ?? "Store"}
            </span>
          </div>
        )}

        {/* CTA */}
        <button
          type="button"
          className="mt-2 w-full rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 active:bg-black"
        >
          View Deals
        </button>
      </div>
    </div>
    );
};

export default ProductCardPage;