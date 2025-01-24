"use client";
import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimationProps {
    children: ReactNode;
}

const Animation: React.FC<AnimationProps> = ({ children }) => {
    const ref = useRef<HTMLSpanElement | null>(null); 
    const isInView = useInView(ref, { once: true });
    


    return (
        <section ref={ref} style={{ minHeight: "100px" }}>

            
            <span
                style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                }}
            >
                {children}
            </span>
        </section>
    );
};

export default Animation;
