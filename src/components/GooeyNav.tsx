"use client";

import { useRef, useEffect, useState } from 'react';
import './GooeyNav.css';

interface NavItem {
  label: string;
  href: string;
}

export const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0
}: {
  items: NavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: number[];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance: number, pointIndex: number, totalPoints: number) => {
    const angle = (360 + noise(8)) / totalPoints * pointIndex * (Math.PI / 180);
    return {
      x: distance * Math.cos(angle),
      y: distance * Math.sin(angle),
    };
  };

  const createParticle = (pointIndex: number, container: HTMLElement) => {
    const el = document.createElement('div');
    el.className = `effect color-${colors[pointIndex % colors.length]}`;
    container.appendChild(el);

    const distance = particleDistances[0] + Math.random() * particleDistances[1];
    const { x, y } = getXY(distance, pointIndex, particleCount);
    const duration = animationTime + Math.random() * timeVariance;

    const anim = el.animate(
      [
        { transform: `translate(0, 0) scale(0)`, opacity: 0 },
        { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 0.8, offset: 0.2 },
        { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 0.8, offset: 0.6 },
        { transform: `translate(0, 0) scale(0)`, opacity: 0 }
      ],
      {
        duration,
        easing: 'cubic-bezier(0.1, 0.5, 0.1, 1)',
      }
    );

    anim.onfinish = () => el.remove();
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };

    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number, href: string) => {
    setActiveIndex(index);
    updateEffectPosition(e.currentTarget);

    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
          if (filterRef.current) {
            createParticle(i, filterRef.current);
          }
        }, i * 30);
    }
    
    // Support smooth scrolling
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (navRef.current) {
      const activeItem = navRef.current.querySelector('.active') as HTMLElement;
      if (activeItem) updateEffectPosition(activeItem);
    }
    
    // Handle scroll to highlight active link
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let activeIdx = 0;
      
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if(item.href.startsWith('#')) {
          const element = document.getElementById(item.href.replace('#', ''));
          if (element && element.offsetTop <= scrollPosition) {
            activeIdx = i;
            break;
          }
        }
      }
      
      if (activeIdx !== activeIndex && navRef.current) {
        setActiveIndex(activeIdx);
        const listItems = Array.from(navRef.current.querySelectorAll('li'));
        if (listItems[activeIdx]) {
          updateEffectPosition(listItems[activeIdx]);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, activeIndex]);

  return (
    <div className='gooey-nav-container' ref={containerRef}>
      <nav ref={navRef}>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={e => handleClick(e, index, item.href)}
            >
              <a href={item.href} onClick={e => e.preventDefault()}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='effect-container' ref={filterRef} />
      <div className='text-effect-container' ref={textRef} />

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
