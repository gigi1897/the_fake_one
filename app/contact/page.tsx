import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import imageCocktail from '../../public/bg-contacts.jpg';

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
                    <Link href="https://maps.app.goo.gl/EXCvqEYBpweYuwsT8">Get directions</Link>
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
