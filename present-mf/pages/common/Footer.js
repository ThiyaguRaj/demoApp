import Link from 'next/link';
import React from 'react';
import { ArrowRight, ArrowLeft } from "react-feather"
import { linkItems } from './Header';

function Footer(props) {
    return (
        <div className=' flex items-center gap-10 justify-center text-center p-10 py-1 border-t border-gray-200 text-gray-400 sticky bottom-0 bg-white text-xs font-semibold'>
            <Link href="/"><ArrowLeft className="h-8 w-10 text-white bg-gray-600 hover:bg-gray-400 border rounded-full p-1 cursor-pointer" /></Link>
            <Link href="/nbnbnb"><ArrowRight className="h-8 w-10 text-white bg-gray-600 hover:bg-gray-400 border rounded-full p-1 cursor-pointer" /></Link>
        </div>
    );
}

export default Footer;