"use client";

import { Container } from "@mantine/core";
import Link from "next/link";
import styles from "../style/header.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { links } from "@/mock/mock";

export type HeaderProps = {
  logo: string;
  carouselHeight?: number;
  backgroundColor?: string;
  borderRadius?: string;
  linkColor?: string;
  linkFont?: string;
  linkWeight?: string;
  hoverColor?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export default function Header({
  linkColor = "white",
  hoverColor = "black",

  ...props
}: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  const carouselHeight = props.carouselHeight || 600;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > carouselHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [carouselHeight]);

  // Observer per tracciare la visibilità delle sezioni
  useEffect(() => {
    const sectionsToObserve = links
      .filter((link) => link.scrollTo)
      .map((link) => link.scrollTo);

    const observers: IntersectionObserver[] = [];

    sectionsToObserve.forEach((sectionId) => {
      const element = document.getElementById(sectionId!);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId!);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: "-100px 0px -100px 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [pathname]);

  // Gestisce lo scroll quando c'è un hash nell'URL
  // Gestisce lo scroll quando c'è un hash nell'URL
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Aggiungi un piccolo delay prima di scrollare
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [pathname]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof links)[0]
  ) => {
    if (link.scrollTo) {
      e.preventDefault();

      const scrollToElement = () => {
        const element = document.getElementById(link.scrollTo!);
        if (element) {
          // Usa un offset per compensare l'header
          const headerOffset = 80; // Altezza dell'header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };

      // Se il menu mobile è aperto
      if (isMobileMenuOpen) {
        // 1. Prima ripristina lo scroll del body
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflowY = "";

        // 2. Ripristina la posizione dello scroll
        const savedScrollPosition = parseInt(scrollY || "0") * -1;
        window.scrollTo(0, savedScrollPosition);

        // 3. Chiudi il menu
        setIsMobileMenuOpen(false);

        // 4. Attendi che tutto sia completato, POI scrolla
        setTimeout(() => {
          // Se non dobbiamo navigare, scrolla direttamente
          if (link.link === null || pathname === link.link) {
            scrollToElement();
          } else {
            // Naviga con hash
            router.push(`${link.link}#${link.scrollTo}`);
          }
        }, 300); // Aumentato il delay per dare tempo al browser
      } else {
        // Desktop: comportamento normale
        if (link.link === null || pathname === link.link) {
          scrollToElement();
        } else {
          router.push(`${link.link}#${link.scrollTo}`);
        }
      }
    } else {
      // Link normale senza scroll
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Salva la posizione corrente dello scroll
      const scrollY = window.scrollY;

      // Blocca lo scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; // Mantiene la scrollbar per evitare il "jump"
    } else {
      // Ripristina lo scroll
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      // Ripristina la posizione dello scroll
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    // Cleanup quando il componente viene smontato
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, [isMobileMenuOpen]);
  return (
    <header
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
      }}
      className={`${styles.header} ${!isVisible ? styles.hidden : ""}`}
    >
      <Container size="xxl" h={60} className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src={props.logo}
            alt="Logo"
            width={props.logoWidth || 150}
            height={props.logoHeight || 150}
            priority
            className={styles.logoImage}
          />
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}
        >
          {links.map((link, index) => {
            const isActive =
              (pathname === link.link && !link.scrollTo) ||
              (link.scrollTo && activeSection === link.scrollTo);

            const href = link.link === null ? pathname : link.link;

            return (
              <Link
                key={index}
                href={href}
                style={{
                  color: linkColor,
                  fontWeight: props.linkWeight,
                }}
                className={`${styles.link} ${props.linkFont}  ${
                  isActive ? styles.activeLink : ""
                }`}
                onClick={(e) => handleLinkClick(e, link)}
                onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)} // Modifica colore su hover
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
