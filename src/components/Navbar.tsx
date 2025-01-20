"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { HomeIcon as House, Github, Linkedin, Mail } from "lucide-react";

interface NavbarProps {
  scrollToContact: () => void;
  scrollToHead: () => void;
}

export default function Navbar({ scrollToContact,scrollToHead }: NavbarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedWidth, setExpandedWidth] = useState(216);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const defaultWidth = 4 * 40 + 16;
      const expandedWidth = defaultWidth + 20;
      setExpandedWidth(expandedWidth);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full mt-4 fixed bottom-4 sm:sticky sm:top-4 z-50">
      <div
        ref={navRef}
        className="rounded-full border z-50 pointer-events-auto relative flex items-center justify-center bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          width:
            hoveredIndex !== null ? `${expandedWidth}px` : `${4 * 40 + 16}px`,
          height: "60px",
        }}
      >
        <NavItem
          label="Home"
          icon={<House />}
          index={0}
          hoveredIndex={hoveredIndex}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          onClick={scrollToHead}
          href={undefined}
        />
        <NavItem
          href="https://github.com/ArkornPat"
          label="Github"
          icon={<Github />}
          index={2}
          hoveredIndex={hoveredIndex}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <NavItem
          href="https://www.linkedin.com/in/arkornpat/"
          label="Linkedin"
          icon={<Linkedin />}
          index={3}
          hoveredIndex={hoveredIndex}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <NavItem
          label="Contact"
          icon={<Mail />}
          index={4}
          hoveredIndex={hoveredIndex}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          onClick={scrollToContact}
          href={undefined}
        />
      </div>
    </div>
  );
}

interface NavItemProps {
  href?: string;
  label: string;
  icon: React.ReactNode;
  index: number;
  hoveredIndex: number | null;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
  onClick?: () => void;
}

function NavItem({
  href,
  label,
  icon,
  index,
  hoveredIndex,
  handleMouseEnter,
  handleMouseLeave,
  onClick,
}: NavItemProps) {
  return (
    <div
      className="flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out"
      style={{
        width: hoveredIndex === index ? "50px" : "40px",
        height: "50px",
        marginRight: hoveredIndex === index ? "10px" : "0",
      }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {href ? (
        <Link
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 rounded-full ${
            hoveredIndex === index ? "text-lg" : "text-base"
          }`}
          aria-label={label}
          href={href}
        >
          {icon}
        </Link>
      ) : (
        <div
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 rounded-full ${
            hoveredIndex === index ? "text-lg" : "text-base"
          }`}
          aria-label={label}
          onClick={onClick} 
        >
          {icon}
        </div>
      )}
    </div>
  );
}
