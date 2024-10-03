"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

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
            <Modal 
                title='Test modal' 
                description="Test Description"
                isOpen
                onChange={() => {}} 
                >
                    Test Children
            </Modal>
        </>
     );
}
 
export default ModalProvider;