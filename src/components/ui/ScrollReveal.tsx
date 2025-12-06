'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    className = '',
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally unobserve after revealing
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            {
                threshold,
                rootMargin: '0px',
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold]);

    const getAnimationStyles = () => {
        const baseStyles = {
            opacity: isVisible ? 1 : 0,
            transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        };

        const animationMap = {
            'fade-up': {
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            },
            'fade-down': {
                transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            },
            'fade-left': {
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            },
            'fade-right': {
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            },
            'scale': {
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            },
            'none': {},
        };

        return { ...baseStyles, ...animationMap[animation] };
    };

    return (
        <div ref={elementRef} style={getAnimationStyles()} className={className}>
            {children}
        </div>
    );
};

export default ScrollReveal;
