import Link from 'next/link';
import React from 'react';

interface INavbar {
    _id: string
    name: string
    slug: string
    icon: string
    description: string
}

const Navbar = ({ category }: { category: INavbar[] }) => {
    return (
        <nav className='bg-white py-4'>
             <div className='flex justify-between items-center max-w-6xl mx-auto container'>
            <div className="flex gap-2 items-center">
                <p className='text-lg p-1 bg-indigo-600 rounded-xl'>⚡</p>
                <h2 className='text-xl font-bold text-indigo-600'>TechPulse</h2>
            </div>

            {/* category */}
            <div className="sm:flex gap-6 items-center hidden">
                <Link href={'/'} className='text-[15px] font-bold'>Home</Link>
                {category.map(cat => <div key={cat._id} className=''>
                    <Link href={cat.slug} className='flex gap-2 items-center'>
                        <p className='text-lg'>{cat.icon}</p>
                        <h3 className='text-[15px] font-bold'>{cat.name}</h3>
                    </Link>
                </div>)}
            </div>

            <div className="flex gap-2">
                <div className="inline-flex items-center gap-2 bg-gray-300 px-3 py-1.5 rounded-2xl"><span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span><span className="text-sm font-medium text-gray-800">Live</span></div>
                <button className='btn btn-md rounded-xl bg-indigo-600 text-white'>Sign In</button>
            </div>
        </div> 
        </nav>
      
    );
};

export default Navbar;