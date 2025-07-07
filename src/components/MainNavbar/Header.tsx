import React, { useState, useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import "./MainNavbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { I18nContext } from "../../utils/i18nProvider";

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const burgerRef = useRef<SVGSVGElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuBgRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const context = useContext(I18nContext);

  const menu = [
    { name: context?.t.translate("nav.home"), redirect: "/" },
    { name: context?.t.translate("nav.about"), redirect: "/about" },
    { name: context?.t.translate("nav.portfolio"), redirect: "/portfolio" },
    { name: context?.t.translate("nav.contact"), redirect: "/contact" },
    { name: context?.t.translate("nav.yourWeb"), redirect: "/tu-web" },
  ];

  useEffect(() => {
    // Asegúrate de que las referencias estén listas
    if (menuItemsRef.current.length && menuBgRef.current) {
      gsap.set(menuItemsRef.current, { x: -150 });
      gsap.set(menuBgRef.current, { skewX: 10 });
    }
  }, []);

  const openMenu = () => {
    setMenuIsOpen(true);
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: -300,
        duration: 0.55,
        ease: "elastic.out(1.01, 0.8)",
      });
    }

    if (menuBgRef.current) {
      gsap.to(menuBgRef.current, {
        skewX: 0,
        duration: 0.55,
        ease: "elastic.out(1.01, 0.8)",
      });
    }

    menuItemsRef.current.forEach((item, i) => {
      if (item) {
        gsap.to(item, {
          x: 0,
          duration: 0.7 + i * 0.05,
          delay: i * 0.02,
          ease: "elastic.out(1.1, 0.6)",
        });
      }
    });

    // Animación del icono hamburguesa
    if (burgerRef.current) {
      gsap.to(burgerRef.current.querySelector(".top"), {
        y: "5px",
        rotationZ: 45,
        transformOrigin: "50% 50%",
        duration: 0.2,
      });

      gsap.to(burgerRef.current.querySelector(".mid"), {
        scale: 0,
        opacity: 0,
        duration: 0.2,
      });

      gsap.to(burgerRef.current.querySelector(".bot"), {
        y: "-5px",
        rotationZ: -45,
        transformOrigin: "50% 50%",
        duration: 0.2,
      });
    }
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: 100,
        duration: 0.2,
        ease: "power1.in",
      });
    }

    if (menuBgRef.current) {
      gsap.set(menuBgRef.current, {
        delay: 0.2,
        skewX: 10,
      });
    }

    menuItemsRef.current.forEach((item, i) => {
      if (item) {
        gsap.to(item, {
          x: -150,
          duration: 0.3 + i * 0.05,
          ease: "power1.in",
        });
      }
    });

    // Animación del icono hamburguesa
    if (burgerRef.current) {
      gsap.to(burgerRef.current.querySelector(".top"), {
        y: "0px",
        rotationZ: 0,
        transformOrigin: "50% 50%",
        duration: 0.2,
      });

      gsap.to(burgerRef.current.querySelector(".mid"), {
        scale: 1,
        opacity: 1,
        duration: 0.2,
      });

      gsap.to(burgerRef.current.querySelector(".bot"), {
        y: "0px",
        rotationZ: 0,
        transformOrigin: "50% 50%",
        duration: 0.2,
      });
    }
  };

  const toggleMenu = () => {
    if (menuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <div className="container">
      <div className="menu" ref={menuRef}>
        <div className="menu-bg" ref={menuBgRef}></div>

        <nav className="menu-items ">
          <div>
            {menu.map((item, index) => (
              <a
                href={item.redirect}
                className="menu-item"
                ref={(el) => {
                  if (el && !menuItemsRef.current.includes(el)) {
                    menuItemsRef.current[index] = el;
                  }
                }}
                key={index}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          <div className="text-white">
            <ul>
              <li>
                <a
                  className="flex gap-2 items-center hover:opacity-80 "
                  target="__blank"
                  href="https://www.linkedin.com/in/franco-de-paulo/"
                >
                  <FaLinkedin size={22} /> LinkedIn
                </a>
              </li>
              <li className="my-1">
                <a
                  target="__blank"
                  href="https://github.com/frandepe"
                  className="flex gap-2 items-center hover:opacity-80"
                >
                  <FaGithub size={22} /> GitHub
                </a>
              </li>

              <li>&copy;2025</li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="language-selector">
        <LanguageSelector />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <svg
          id="burger"
          ref={burgerRef}
          width="30"
          height="30"
          className="openmenu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          {/* Línea superior */}
          <path className="top stroke-white" d="M0 6h30v2H0z" strokeWidth="2" />

          {/* Línea del medio */}
          <line
            className="mid stroke-white"
            x1="0"
            y1="14"
            x2="30"
            y2="14"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />

          {/* Línea inferior */}
          <path
            className="bot stroke-white"
            d="M0 20h30v2H0z"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
