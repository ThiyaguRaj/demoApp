import React from 'react';
import { ArrowRight, ArrowLeft } from "react-feather"
import { linkItems } from './Header';
import { useRouter } from 'next/router';

function Footer(props) {

    const router = useRouter()

    const getRoute = isNext => {
        if (linkItems?.length && router?.pathname) {
            const currentPage = linkItems.findIndex(item => item?.url === router.pathname)
            const lastIndex = linkItems.length - 1
            if(isNext) {
               return linkItems[currentPage < lastIndex ? currentPage + 1 : 0]?.url
            }
           return linkItems[currentPage > 0 ? currentPage - 1 : lastIndex]?.url
        }
       return linkItems[0]?.url
    }
    return (
        <div className=' flex items-center gap-10 justify-center text-center p-10 py-1 border-t border-gray-200 text-gray-400 sticky bottom-0 bg-white text-xs font-semibold'>
            <ArrowLeft onClick={() => router.push(getRoute(false))} className="h-8 w-10 text-white bg-gray-600 hover:bg-gray-400 border rounded-full p-1 cursor-pointer" />
            <ArrowRight onClick={() => router.push(getRoute(true))} className="h-8 w-10 text-white bg-gray-600 hover:bg-gray-400 border rounded-full p-1 cursor-pointer" />
        </div>
    );
}

export default Footer;