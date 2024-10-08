"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //prevent any errors by modals (hydration errors)
    //ensuring none of the modals can be seen or opened during server side rendering

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) { 
        return null;
    }
    return ( 
        <>
            <AuthModal />
            <UploadModal />
        </>
     );
}
 
export default ModalProvider;