import Link from 'next/link';
import React, { useState } from 'react';
import { Menu } from "react-feather"
import { ObSlider } from '../ObUik';
import router from 'next/router';

export const linkItems = [
    {
        url: "/",
        name: "Introduction"
    },
    {
        url: "/components/OnebillAndMf",
        name: "Onebill & MF"
    },
    {
        url: "/components/Walkthrough",
        name: "Brief walkthrough"
    },
    {
        url: "/components/Limitations",
        name: "Limitations"
    },
    {
        url: "/components/Conclusion",
        name: "Conclusion"
    },
]

function Header(props) {

    const [showLink, setShowLink] = useState(false)
    const getUiLink = (url, name) => <Link href={url}><li className={`py-3 cursor-pointer text-white w-full pl-12 hover:bg-white hover:text-gray-500 ${router.pathname === url ? "text-gray-300" : ""}`}>{name}</li></Link>
    return (
        <div className='p-10 py-6 border-b border-gray-200 sticky top-0 bg-white z-100'>
            <Menu onClick={() => setShowLink(true)} className="h-10 w-10 text-gray-500 cursor-pointer" />
            {
                showLink && <ObSlider.SliderDialog disableDialogBtn className="max-w-[200px]" onClose={() => setShowLink(false)}>
                    <ObSlider.Body className=" bg-gray-400 pt-10">
                        <ul className='flex flex-col items-center justify-center'>
                            {
                                linkItems.map(item => getUiLink(item.url, item.name))
                            }
                        </ul>
                    </ObSlider.Body>
                </ObSlider.SliderDialog>
            }
        </div>
    );
}

export default Header;