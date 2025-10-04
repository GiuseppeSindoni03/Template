"use client";

import { Container } from "@mantine/core";
import Link from "next/link";
import styles from "../style/header.module.css";
import Image from "next/image";
import { roboto } from "../../theme/fonts";
import { useState, useEffect } from "react";
import { link } from "fs";

type HeaderProps = {
  logo: string;
  carouselHeight?: number;
};

const links = [
  {
    label: "Chi siamo",
    link: "/",
  },
  {
    label: "Contatti",
    link: "/",
  },
  {
    label: "Servizi",
    link: "/servizi",
  },
];

export default function Header(props: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Altezza del carousel (puoi passarla come prop o usare il default)
  const carouselHeight = props.carouselHeight || 600;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Nascondi l'header quando si scorre oltre il carousel
      if (scrollPosition > carouselHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Aggiungi l'event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [carouselHeight]);

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ""}`}>
      <Container size="xxl" h={60} className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src={props.logo}
            alt="Logo"
            width={150}
            height={150}
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Hamburger button per mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={`${styles.link} ${roboto.className} link`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
