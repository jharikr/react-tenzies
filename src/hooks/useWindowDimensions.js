import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
  }

function useWindowDimensions() {
    const [windowDimensions, setWindowDimension] = useState(getWindowDimensions())

    useEffect(() => {
        function handleResize() {
            setWindowDimension(getWindowDimensions())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    return windowDimensions
}

export default useWindowDimensions 