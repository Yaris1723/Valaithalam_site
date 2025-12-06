'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    disabled?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    children,
    speed = 0.5,
    className = '',
    disabled = false,
}) => {
    const [offset, setOffset] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (disabled) return;

        const handleScroll = () => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Only apply parallax when element is in viewport
            if (
                scrolled + windowHeight > elementTop &&
                scrolled < elementTop + elementHeight
            ) {
                const yPos = (scrolled - elementTop) * speed;
                setOffset(yPos);
            }
        };

        // Use passive listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed, disabled]);

    return (
        <div
            ref={elementRef}
            className={className}
            style={{
                transform: disabled ? 'none' : `translateY(${offset}px)`,
                willChange: disabled ? 'auto' : 'transform',
            }}
        >
            {children}
        </div>
    );
};

export default ParallaxSection;
