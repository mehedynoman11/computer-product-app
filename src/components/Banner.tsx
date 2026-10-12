import React from 'react';
import BaseUrl from './BaseUrl';
import { getCategory } from '@/lib/api';
import Link from 'next/link';

interface INavbar {
    _id: string
    name: string
    slug: string
    icon: string
    description: string
}

const BannerPage = async () => {
    const category: INavbar[] = await getCategory();
    return (
        <header className='mt-10'>
            <div className="flex flex-col gap-4">
                <h1 className='text-4xl font-bold text-center'>Compare Tech Prices Easily</h1>
                <p className='text-lg font-semibold text-gray-400 text-center'>Find the best deals for CPUs, GPUs, Laptops & Phones across top shops.

                </p>
                <div className="flex gap-3 justify-center items-center">
                    <button className='btn bg-indigo-600 text-white rounded-xl'>Browse Produts</button>
                    <button className='btn btn-outline rounded-xl'>Sign Up</button>
                </div>
                <div className="flex gap-6 items-center justify-center my-8">
                    <p className='px-2 py-1 bg-indigo-700 font-bold text-white text-[15px] rounded-full'><span>🔥</span> All</p>
                    {category.map(cat => <div key={cat._id} className=''>
                        <Link href={cat.slug} className='flex gap-2 px-2 py-1 bg-white border-base-300 border-2 hover:bg-indigo-50 rounded-full items-center'>
                            <p className='text-lg'>{cat.icon}</p>
                            <h3 className='text-[15px] font-bold'>{cat.name}</h3>
                        </Link>
                    </div>)}
                </div>
            </div>
        </header>
    );
};

export default BannerPage;