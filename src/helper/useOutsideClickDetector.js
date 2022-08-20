import React, { useEffect } from 'react';

function useOutsideClickDetector(ref, callback) {
    const handleClickOutSide = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback(event);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutSide);
        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };
    }, [ref]);
    return [];
}

export default useOutsideClickDetector;
