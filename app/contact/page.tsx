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
            <div className='flex'>
                
            </div>
        </main>
    );
}
