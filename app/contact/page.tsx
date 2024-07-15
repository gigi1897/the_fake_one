import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function page() {
    return (
        <main>
            <div className="flex place-content-center">
                <Link href="/">
                    <Image src="/Logo.png" alt="Logo" width={300} height={7} />
                </Link>
            </div>
            <br />

            <div className='flex place-content-center sm:flex-col p-8'>
                <p className='font-extrabold text-2xl underline'>Contact & Hours</p>
                <br />
                <p>
                    Rue incroyable 87,<br />
                    1815, Clarens
                </p>
                <br />
                <p>                    
                    <button className="bg-transparent hover:bg-black text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <Link href="https://maps.app.goo.gl/EXCvqEYBpweYuwsT8">Get directions</Link>
                    </button>
                </p>
                <br />
                <p>
                    <span className='font-extrabold'>Monday - Friday: </span>
                    08:00 AM - 05:00 PM
                </p>
            </div>
        </main>
    );
}
