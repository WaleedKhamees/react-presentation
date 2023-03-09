import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
// @ts-expect-error
export const SlideToTopWrapper = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};