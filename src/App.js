import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import agriconnectAward from './assets/agriconnect-award.jpg';
import etakaloAward from './assets/etakalo-award.jpg';
import helenStorrowPhoto from './assets/helen-storrow-seminar-2026.jpg';
import hackhuntPhoto from './assets/hackhunt-ikom.jpg';
import wicePhoto from './assets/wice-speaker.jpg';

const Icon = ({ name, size = 20 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const icons = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    shield: <><path d="M12 3 4.5 6v5.6c0 4.7 3.2 7.7 7.5 9.4 4.3-1.7 7.5-4.7 7.5-9.4V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M12 7v4" /><path d="M12 11 6.4 16" /><path d="M12 11 17.6 16" /></>,
    terminal: <><path d="m5 7 4 4-4 4" /><path d="M11 17h8" /><rect x="3" y="4" width="18" height="16" rx="2" /></>,
    external: <><path d="M14 5h5v5" /><path d="M10 14 19 5" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9 0S17.7-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.3-.4 4.1 0 4.1 0A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    sun: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.42 1.42" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.42" /></>,
    moon: <path d="M20.5 14.3A8 8 0 0 1 9.7 3.5 8.1 8.1 0 1 0 20.5 14.3Z" />,
    trophy: <><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v3a5 5 0 0 1-10 0V4Z" /><path d="M7 5H5a2 2 0 0 0 0 4h2" /><path d="M17 5h2a2 2 0 0 1 0 4h-2" /></>,
    spark: <><path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" /><path d="M5 18h.01" /><path d="M19 18h.01" /><path d="M7 21h10" /></>,
  };

  return <svg {...common}>{icons[name]}</svg>;
};

const CONTENT = {
  en: {
    nav: { about: 'About', projects: 'Projects', activities: 'Activities', journey: 'Journey', contact: 'Contact', talk: 'Let’s talk' },
    accessibility: {
      home: 'Back to home',
      nav: 'Main navigation',
      terminal: 'Interactive terminal',
      terminalCommand: 'Terminal command',
      light: 'Switch to light mode',
      dark: 'Switch to dark mode',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Switch language',
      email: 'Send an email',
    },
    hero: {
      eyebrow: 'CYBERSECURITY · FRONTEND · SYSTEMS & NETWORKS',
      line1: 'I secure systems and build',
      line2: 'interfaces with character.',
      lead: 'Frontend developer and cybersecurity enthusiast, I build modern web experiences backed by a strong foundation in systems, networks and security.',
      projects: 'View my projects',
      contact: 'Contact me',
      availability: 'Open to opportunities',
      meta: 'Frontend · Cybersecurity · Product mindset',
      chip2: 'Frontend',
      chip3: 'Winner',
    },
    about: {
      kicker: '01 / PROFILE',
      title1: 'Security, interface, impact.',
      title2: 'Three strengths, one standard.',
      p1: 'My profile sits at the intersection of cybersecurity, frontend development and systems and network administration. I enjoy protecting technical environments as much as creating interfaces people genuinely want to use.',
      p2: 'Internships, hackathons and competitions have taught me how to turn ideas into working solutions, collaborate under pressure and keep a high standard in both technical depth and execution.',
    },
    expertise: [
      { icon: 'shield', title: 'Cybersecurity', text: 'SOC monitoring, incident analysis, malware analysis, IDS/IPS and infrastructure security.' },
      { icon: 'code', title: 'Frontend Development', text: 'Modern, responsive interfaces with strong attention to product thinking, usability and visual detail.' },
      { icon: 'network', title: 'Systems & Networks', text: 'Linux, Windows, Active Directory, LDAP, network administration and secure service deployment.' },
    ],
    projects: {
      kicker: '02 / PROJECTS',
      title1: 'Useful projects,',
      title2: 'visible and tangible.',
      intro: 'A selection of projects reflecting my dual focus: crafting polished web products and building technical solutions with real-world value.',
      visit: 'Visit website',
      featured: [
        {
          index: '01', category: 'AGRITECH / PRODUCT', title: 'AgriConnect',
          description: 'An intelligent platform connecting farmers, producers and transporters to reduce logistical friction and make market access easier for farmers.',
          impact: '1st place · Agritech Pitch',
          details: '1st place at the Agritech Pitch organized by the Ministry of Agriculture and Food Sovereignty, with AgriConnect selected as the winning solution.',
          tags: ['Frontend', 'Product', 'Marketplace', 'Agritech'], link: 'https://agriconnect.ik0m.tech/', image: agriconnectAward,
        },
        {
          index: '02', category: 'WEB PLATFORM / CIRCULAR ECONOMY', title: 'E-Takalo',
          description: 'A platform for exchanging unused goods and services, designed to encourage reuse, mutual support and practical exchanges between users.',
          impact: '1st place · ITOVIA National Hackathon',
          details: '1st place at the ITOVIA National Hackathon with E-Takalo, a web platform focused on the circular economy and service exchange.',
          tags: ['Frontend', 'Platform', 'Circular Economy', 'Team'], link: 'https://etakalo.me/', image: etakaloAward,
        },
      ],
      highlights: [
        { index: '03', type: 'CYBERSECURITY / SOC', title: 'Infrastructure SIEM', description: 'Centralized logs and security-event monitoring for suspicious activity detection and incident analysis.', tags: ['ELK Stack', 'Suricata', 'Defender EDR', 'Event Logs'], accent: 'rose' },
        { index: '04', type: 'WEBCUP / UX', title: 'The End Page', description: 'A web experience designed to help people navigate the emotional impact of romantic, professional or academic breakups.', tags: ['Web', 'UX', 'Frontend', 'Product'], accent: 'fuchsia' },
        { index: '05', type: 'MALWARE ANALYSIS', title: 'Static & Dynamic Analysis', description: 'Static and dynamic analysis of suspicious files in a controlled environment to identify behavior, IOCs, and system/network interactions.', tags: ['YARA', 'REMnux', 'Wireshark', 'Procmon'], accent: 'deep' },
      ],
    },
    activities: {
      kicker: '03 / ACTIVITIES & COMMUNITY',
      title1: 'Share, organize,',
      title2: 'connect with the world.',
      intro: 'Beyond projects and competitions, I invest in international experiences, cybersecurity communities and sharing my journey in tech.',
      items: [
        { index: '01', year: '2026', type: 'INTERNATIONAL / SEMINAR', title: 'Helen Storrow Seminar 2026', location: 'Switzerland', description: 'Participant at the Helen Storrow Seminar 2026 in Switzerland, an international experience centered on exchange, collaboration and learning with participants from different countries.', image: helenStorrowPhoto, position: 'center 44%' },
        { index: '02', year: '2026', type: 'CYBERSECURITY / COMMUNITY', title: 'Hackhunt CTF Organization', location: 'ENI · MegaEvent · IKOM Community', description: 'Co-organized Hackhunt, a cybersecurity CTF at the National School of Computer Science (ENI), as part of MegaEvent and my involvement with IKOM Community.', image: hackhuntPhoto, position: 'center 48%' },
        { index: '03', year: '2026', type: 'SPEAKER / WOMEN IN TECH', title: 'Speaker in the WICE Program', location: 'Women in Cybersecurity Education', description: 'Speaker in the WICE program, sharing my experience and journey to encourage and inspire more women to grow in technology and cybersecurity.', image: wicePhoto, position: 'center' },
      ],
    },
    journey: {
      kicker: '04 / JOURNEY',
      title1: 'Build, test,',
      title2: 'grow through challenges.',
      intro: 'Technical competitions are an important part of my journey: they strengthen my creativity, discipline and ability to deliver meaningful results under pressure.',
      items: [
        { year: '2026', label: 'CYBER LEAGUE PLAYOFFS', title: 'Qualified for the Playoffs', detail: 'Qualified for the 2026 Cyber League Playoffs, with a Blue Team-oriented competition format.' },
        { year: '2026', label: 'ALGO GAMES', title: '2nd place', detail: '2nd place in August 2026 in algorithmic challenges and a zero-player game event.' },
        { year: 'RECENT', label: 'PITCH AGRITECH', title: '1st place · AgriConnect', detail: 'Won with AgriConnect, an intelligent platform connecting stakeholders across the agricultural ecosystem.' },
        { year: 'RECENT', label: 'ITOVIA NATIONAL HACKATHON', title: '1st place · E-Takalo', detail: 'Won with E-Takalo, a platform for exchanging unused goods and services.' },
        { year: '2026', label: 'INDIAN OCEAN CYBERCUP', title: 'Top 5 · Best female participant', detail: 'Qualified through several competition phases covering cryptography, forensics, web security, reverse engineering and networking.' },
        { year: '2025', label: 'CYBERCUP TEAM EDITION', title: 'Top 3', detail: 'Team qualification rounds involving cybersecurity challenges across several technical domains.' },
        { year: '2025', label: 'DEVFEST ANTSIRABE', title: '3rd place · Frontend Developer', detail: 'Worked as a frontend developer on an AI-powered application designed to optimize product costs.' },
        { year: '2025', label: 'WEBCUP', title: '3rd place', detail: 'Built “The End Page”, a web application focused on user experience and emotional support.' },
        { year: '2024', label: 'HACKHUNT', title: '1st place', detail: 'Solved cybersecurity and networking challenges in a competitive environment.' },
      ],
    },
    contact: {
      kicker: '05 / CONTACT',
      title1: 'A project, a mission',
      title2: 'or a competition?',
      text: 'I’m open to opportunities in frontend development, cybersecurity, systems and networks, as well as high-impact product projects.',
      email: 'Email me',
    },
    terminal: {
      intro: 'Interactive terminal — type “help” to list commands.',
      profile: 'Cybersecurity · Frontend · Systems & Networks',
      status: '● building / learning / competing',
      unknown: 'Unknown command',
      typeHelp: 'Type “help”.',
      switched: 'Language switched to English.',
    },
  },
  fr: {
    nav: { about: 'À propos', projects: 'Projets', activities: 'Activités', journey: 'Parcours', contact: 'Contact', talk: 'Discutons' },
    accessibility: {
      home: 'Retour à l’accueil',
      nav: 'Navigation principale',
      terminal: 'Terminal interactif',
      terminalCommand: 'Commande du terminal',
      light: 'Passer en mode clair',
      dark: 'Passer en mode sombre',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      language: 'Changer de langue',
      email: 'Envoyer un e-mail',
    },
    hero: {
      eyebrow: 'CYBERSÉCURITÉ · FRONTEND · SYSTÈMES & RÉSEAUX',
      line1: 'Je sécurise les systèmes et je construis',
      line2: 'des interfaces qui ont du caractère.',
      lead: 'Développeuse frontend passionnée par la cybersécurité, je conçois des expériences web modernes avec une solide base en systèmes, réseaux et sécurité.',
      projects: 'Voir mes projets',
      contact: 'Me contacter',
      availability: 'Ouverte aux opportunités',
      meta: 'Frontend · Cybersécurité · Vision produit',
      chip2: 'Frontend',
      chip3: 'Lauréate',
    },
    about: {
      kicker: '01 / PROFIL',
      title1: 'Sécurité, interface, impact.',
      title2: 'Trois forces, une même exigence.',
      p1: 'Mon profil se situe à l’intersection de la cybersécurité, du développement frontend et de l’administration systèmes et réseaux. J’aime autant protéger des environnements techniques que créer des interfaces réellement agréables à utiliser.',
      p2: 'Stages, hackathons et compétitions m’ont appris à transformer des idées en solutions fonctionnelles, à collaborer sous pression et à maintenir un niveau d’exigence élevé, autant sur la profondeur technique que sur l’exécution.',
    },
    expertise: [
      { icon: 'shield', title: 'Cybersécurité', text: 'Supervision SOC, analyse d’incidents, analyse de malwares, IDS/IPS et sécurisation des infrastructures.' },
      { icon: 'code', title: 'Développement Frontend', text: 'Interfaces modernes et responsives, avec une attention particulière au produit, à l’utilisabilité et aux détails visuels.' },
      { icon: 'network', title: 'Systèmes & Réseaux', text: 'Linux, Windows, Active Directory, LDAP, administration réseau et déploiement sécurisé de services.' },
    ],
    projects: {
      kicker: '02 / PROJETS',
      title1: 'Des projets utiles,',
      title2: 'visibles et concrets.',
      intro: 'Une sélection de projets qui reflètent ma double orientation : créer des produits web soignés et développer des solutions techniques à valeur réelle.',
      visit: 'Voir le site',
      featured: [
        {
          index: '01', category: 'AGRITECH / PRODUIT', title: 'AgriConnect',
          description: 'Une plateforme intelligente qui met en relation agriculteurs, producteurs et transporteurs afin de réduire les frictions logistiques et de faciliter l’accès des agriculteurs au marché.',
          impact: '1re place · Pitch Agritech',
          details: '1re place au Pitch Agritech organisé par le Ministère de l’Agriculture et de la Souveraineté Alimentaire, avec AgriConnect comme solution lauréate.',
          tags: ['Frontend', 'Produit', 'Marketplace', 'Agritech'], link: 'https://agriconnect.ik0m.tech/', image: agriconnectAward,
        },
        {
          index: '02', category: 'PLATEFORME WEB / ÉCONOMIE CIRCULAIRE', title: 'E-Takalo',
          description: 'Une plateforme d’échange de biens inutilisés et de services, pensée pour encourager le réemploi, l’entraide et les échanges pratiques entre utilisateurs.',
          impact: '1re place · Hackathon National ITOVIA',
          details: '1re place au Hackathon National ITOVIA avec E-Takalo, une plateforme web centrée sur l’économie circulaire et l’échange de services.',
          tags: ['Frontend', 'Plateforme', 'Économie circulaire', 'Équipe'], link: 'https://etakalo.me/', image: etakaloAward,
        },
      ],
      highlights: [
        { index: '03', type: 'CYBERSÉCURITÉ / SOC', title: 'Infrastructure SIEM', description: 'Centralisation des journaux et supervision des événements de sécurité pour détecter les activités suspectes et analyser les incidents.', tags: ['ELK Stack', 'Suricata', 'Defender EDR', 'Event Logs'], accent: 'rose' },
        { index: '04', type: 'WEBCUP / UX', title: 'The End Page', description: 'Une expérience web conçue pour accompagner les utilisateurs face à l’impact émotionnel d’une rupture amoureuse, professionnelle ou académique.', tags: ['Web', 'UX', 'Frontend', 'Produit'], accent: 'fuchsia' },
        { index: '05', type: 'ANALYSE DE MALWARE', title: 'Analyse statique & dynamique', description: 'Analyse statique et dynamique de fichiers suspects en environnement contrôlé afin d’identifier leur comportement, les IOC et les interactions système/réseau.', tags: ['YARA', 'REMnux', 'Wireshark', 'Procmon'], accent: 'deep' },
      ],
    },
    activities: {
      kicker: '03 / ACTIVITÉS & COMMUNAUTÉ',
      title1: 'Partager, organiser,',
      title2: 's’ouvrir au monde.',
      intro: 'Au-delà des projets et des compétitions, je m’investis dans des expériences internationales, des communautés cybersécurité et le partage de mon parcours dans la tech.',
      items: [
        { index: '01', year: '2026', type: 'INTERNATIONAL / SÉMINAIRE', title: 'Helen Storrow Seminar 2026', location: 'Suisse', description: 'Participation au Helen Storrow Seminar 2026 en Suisse, une expérience internationale centrée sur l’échange, la collaboration et l’apprentissage avec des participantes et participants de plusieurs pays.', image: helenStorrowPhoto, position: 'center 44%' },
        { index: '02', year: '2026', type: 'CYBERSÉCURITÉ / COMMUNAUTÉ', title: 'Organisation du CTF Hackhunt', location: 'ENI · MegaEvent · IKOM Community', description: 'Co-organisation de Hackhunt, une compétition CTF de cybersécurité à l’École Nationale d’Informatique (ENI), dans le cadre de MegaEvent et de mon engagement au sein d’IKOM Community.', image: hackhuntPhoto, position: 'center 48%' },
        { index: '03', year: '2026', type: 'SPEAKER / FEMMES DANS LA TECH', title: 'Speaker au programme WICE', location: 'Women in Cybersecurity Education', description: 'Intervention comme speaker au programme WICE pour partager mon expérience et mon parcours, et encourager davantage de femmes à évoluer dans la technologie et la cybersécurité.', image: wicePhoto, position: 'center' },
      ],
    },
    journey: {
      kicker: '04 / PARCOURS',
      title1: 'Construire, tester,',
      title2: 'progresser par les défis.',
      intro: 'Les compétitions techniques font partie intégrante de mon parcours : elles renforcent ma créativité, ma rigueur et ma capacité à produire des résultats utiles sous pression.',
      items: [
        { year: '2026', label: 'CYBER LEAGUE PLAYOFFS', title: 'Qualifiée pour les Playoffs', detail: 'Qualification pour les Cyber League Playoffs 2026, avec un format de compétition orienté Blue Team.' },
        { year: '2026', label: 'ALGO GAMES', title: '2e place', detail: '2e place en août 2026 sur des épreuves d’algorithmique et un événement de jeu zero-player.' },
        { year: 'RÉCENT', label: 'PITCH AGRITECH', title: '1re place · AgriConnect', detail: 'Victoire avec AgriConnect, une plateforme intelligente reliant les acteurs de l’écosystème agricole.' },
        { year: 'RÉCENT', label: 'HACKATHON NATIONAL ITOVIA', title: '1re place · E-Takalo', detail: 'Victoire avec E-Takalo, une plateforme d’échange de biens inutilisés et de services.' },
        { year: '2026', label: 'CYBERCUP DE L’OCÉAN INDIEN', title: 'Top 5 · Meilleure participante', detail: 'Qualification à travers plusieurs phases couvrant la cryptographie, le forensic, la sécurité web, le reverse engineering et le réseau.' },
        { year: '2025', label: 'CYBERCUP TEAM EDITION', title: 'Top 3', detail: 'Phases qualificatives en équipe avec des défis de cybersécurité dans plusieurs domaines techniques.' },
        { year: '2025', label: 'DEVFEST ANTSIRABE', title: '3e place · Développeuse Frontend', detail: 'Participation comme développeuse frontend à une application basée sur l’IA pour optimiser les coûts de produits.' },
        { year: '2025', label: 'WEBCUP', title: '3e place', detail: 'Développement de “The End Page”, une application web centrée sur l’expérience utilisateur et l’accompagnement émotionnel.' },
        { year: '2024', label: 'HACKHUNT', title: '1re place', detail: 'Résolution de défis de cybersécurité et de networking dans un cadre compétitif.' },
      ],
    },
    contact: {
      kicker: '05 / CONTACT',
      title1: 'Un projet, une mission',
      title2: 'ou une compétition ?',
      text: 'Je suis ouverte aux opportunités en développement frontend, cybersécurité, systèmes et réseaux, ainsi qu’aux projets produit à fort impact.',
      email: 'M’écrire',
    },
    terminal: {
      intro: 'Terminal interactif — tapez “help” pour voir les commandes.',
      profile: 'Cybersécurité · Frontend · Systèmes & Réseaux',
      status: '● construire / apprendre / concourir',
      unknown: 'Commande inconnue',
      typeHelp: 'Tapez “help”.',
      switched: 'Langue changée en français.',
    },
  },
};

const getInitialTheme = () => {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return 'dark';
};

const getInitialLanguage = () => {
  const saved = localStorage.getItem('portfolio-language');
  return saved === 'fr' ? 'fr' : 'en';
};

const terminalIntro = (language) => [
  { type: 'muted', text: CONTENT[language].terminal.intro },
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'RAZANAPARANY Ladydi Jénnysca' },
  { type: 'output', text: CONTENT[language].terminal.profile },
  { type: 'success', text: CONTENT[language].terminal.status },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguage] = useState(getInitialLanguage);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLines, setTerminalLines] = useState(() => terminalIntro(getInitialLanguage()));
  const terminalBodyRef = useRef(null);
  const terminalInputRef = useRef(null);
  const heroVisualRef = useRef(null);
  const t = CONTENT[language];

  const quickCommands = useMemo(() => ['help', 'projects', 'activities', 'awards'], []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      document.documentElement.style.setProperty('--scroll-progress', `${progress * 100}%`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    const terminalBody = terminalBodyRef.current;
    if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;
  }, [terminalLines]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    const visual = heroVisualRef.current;
    if (!visual || typeof window.matchMedia !== 'function' || !window.matchMedia('(pointer: fine)').matches) return undefined;

    const onMove = (event) => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      visual.style.setProperty('--pointer-x', `${x * 10}px`);
      visual.style.setProperty('--pointer-y', `${y * 8}px`);
    };
    const onLeave = () => {
      visual.style.setProperty('--pointer-x', '0px');
      visual.style.setProperty('--pointer-y', '0px');
    };

    visual.addEventListener('pointermove', onMove);
    visual.addEventListener('pointerleave', onLeave);
    return () => {
      visual.removeEventListener('pointermove', onMove);
      visual.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((value) => (value === 'dark' ? 'light' : 'dark'));
  const focusTerminal = () => {
    const editor = terminalInputRef.current;
    if (!editor) return;
    editor.focus();

    // Keep the caret at the end, like a real shell prompt.
    if (typeof window !== 'undefined' && window.getSelection && document.createRange) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  const applyLanguage = (nextLanguage) => {
    if (nextLanguage === language) return;
    setLanguage(nextLanguage);
    setMenuOpen(false);
    setTerminalInput('');
    setTerminalLines(terminalIntro(nextLanguage));
  };

  const runTerminalCommand = (rawCommand) => {
    const command = rawCommand.trim();
    if (!command) return;

    const normalized = command.toLowerCase().replace(/\s+/g, ' ');

    if (normalized === 'clear' || normalized === 'cls') {
      setTerminalLines([]);
      clearTerminalEditor();
      return;
    }

    if (normalized === 'lang fr' || normalized === 'language fr') {
      applyLanguage('fr');
      return;
    }
    if (normalized === 'lang en' || normalized === 'language en') {
      applyLanguage('en');
      return;
    }

    let output = [];

    if (normalized === 'help') {
      output = language === 'en' ? [
        { type: 'output', text: 'whoami     — show my profile' },
        { type: 'output', text: 'focus      — show my focus areas' },
        { type: 'output', text: 'projects   — show featured projects' },
        { type: 'output', text: 'activities — show activities & community work' },
        { type: 'output', text: 'awards     — show recent achievements' },
        { type: 'output', text: 'contact    — show contact details' },
        { type: 'output', text: 'theme      — toggle dark / light mode' },
        { type: 'output', text: 'lang fr    — passer le site en français' },
        { type: 'output', text: 'open agriconnect | open etakalo' },
        { type: 'output', text: 'ls · pwd · clear' },
      ] : [
        { type: 'output', text: 'whoami     — afficher mon profil' },
        { type: 'output', text: 'focus      — afficher mes domaines principaux' },
        { type: 'output', text: 'projects   — afficher les projets phares' },
        { type: 'output', text: 'activities — afficher mes activités et engagements' },
        { type: 'output', text: 'awards     — afficher les distinctions récentes' },
        { type: 'output', text: 'contact    — afficher mes coordonnées' },
        { type: 'output', text: 'theme      — changer le mode sombre / clair' },
        { type: 'output', text: 'lang en    — switch the website to English' },
        { type: 'output', text: 'open agriconnect | open etakalo' },
        { type: 'output', text: 'ls · pwd · clear' },
      ];
    } else if (normalized === 'whoami') {
      output = [
        { type: 'output', text: 'RAZANAPARANY Ladydi Jénnysca' },
        { type: 'output', text: language === 'en' ? 'Frontend Developer · Cybersecurity · Systems & Networks' : 'Développeuse Frontend · Cybersécurité · Systèmes & Réseaux' },
        { type: 'muted', text: language === 'en' ? 'Madagascar · open to opportunities' : 'Madagascar · ouverte aux opportunités' },
      ];
    } else if (normalized === 'focus' || normalized === 'focus --current') {
      output = language === 'en' ? [
        { type: 'output', text: 'Frontend UI / UX · SOC / Blue Team' },
        { type: 'output', text: 'SIEM · Malware Analysis · Systems & Networks' },
      ] : [
        { type: 'output', text: 'Frontend UI / UX · SOC / Blue Team' },
        { type: 'output', text: 'SIEM · Analyse de malware · Systèmes & Réseaux' },
      ];
    } else if (normalized === 'projects' || normalized === 'projects --featured') {
      output = language === 'en' ? [
        { type: 'output', text: '01  AgriConnect — 1st place Agritech Pitch' },
        { type: 'output', text: '02  E-Takalo — 1st place ITOVIA National Hackathon' },
        { type: 'output', text: '03  Infrastructure SIEM' },
        { type: 'output', text: '04  The End Page · WebCup' },
      ] : [
        { type: 'output', text: '01  AgriConnect — 1re place Pitch Agritech' },
        { type: 'output', text: '02  E-Takalo — 1re place Hackathon National ITOVIA' },
        { type: 'output', text: '03  Infrastructure SIEM' },
        { type: 'output', text: '04  The End Page · WebCup' },
      ];
    } else if (normalized === 'activities' || normalized === 'activity' || normalized === 'engagements') {
      output = language === 'en' ? [
        { type: 'output', text: '01  Helen Storrow Seminar 2026 — Switzerland' },
        { type: 'output', text: '02  Hackhunt — CTF organization · ENI / MegaEvent / IKOM' },
        { type: 'output', text: '03  WICE — speaker · Women in Cybersecurity Education' },
      ] : [
        { type: 'output', text: '01  Helen Storrow Seminar 2026 — Suisse' },
        { type: 'output', text: '02  Hackhunt — organisation CTF · ENI / MegaEvent / IKOM' },
        { type: 'output', text: '03  WICE — speaker · Women in Cybersecurity Education' },
      ];
    } else if (normalized === 'awards' || normalized === 'awards --latest') {
      output = language === 'en' ? [
        { type: 'success', text: 'Cyber League 2026 — qualified for the Playoffs' },
        { type: 'output', text: 'Algo Games — 2nd place · August 2026' },
        { type: 'output', text: 'Indian Ocean CyberCup — Top 5 · Best female participant' },
      ] : [
        { type: 'success', text: 'Cyber League 2026 — qualifiée pour les Playoffs' },
        { type: 'output', text: 'Algo Games — 2e place · août 2026' },
        { type: 'output', text: 'CyberCup Océan Indien — Top 5 · Meilleure participante' },
      ];
    } else if (normalized === 'contact') {
      output = [
        { type: 'output', text: 'Email  : jennysclady@gmail.com' },
        { type: 'output', text: 'GitHub : github.com/jennylady' },
      ];
    } else if (normalized === 'theme' || normalized === 'theme toggle') {
      const next = theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
      output = [{ type: 'success', text: language === 'en' ? `Theme switched to ${next}.` : `Thème passé en mode ${next === 'dark' ? 'sombre' : 'clair'}.` }];
    } else if (normalized === 'theme dark') {
      setTheme('dark');
      output = [{ type: 'success', text: language === 'en' ? 'Theme switched to dark.' : 'Thème passé en mode sombre.' }];
    } else if (normalized === 'theme light') {
      setTheme('light');
      output = [{ type: 'success', text: language === 'en' ? 'Theme switched to light.' : 'Thème passé en mode clair.' }];
    } else if (normalized === 'open agriconnect' || normalized === 'agriconnect') {
      window.open('https://agriconnect.ik0m.tech/', '_blank', 'noopener,noreferrer');
      output = [{ type: 'success', text: language === 'en' ? 'Opening AgriConnect…' : 'Ouverture d’AgriConnect…' }];
    } else if (normalized === 'open etakalo' || normalized === 'etakalo') {
      window.open('https://etakalo.me/', '_blank', 'noopener,noreferrer');
      output = [{ type: 'success', text: language === 'en' ? 'Opening E-Takalo…' : 'Ouverture d’E-Takalo…' }];
    } else if (normalized === 'ls') {
      output = [{ type: 'output', text: 'about/  projects/  activities/  journey/  contact/' }];
    } else if (normalized === 'pwd') {
      output = [{ type: 'output', text: '~/portfolio/lady-jennysca' }];
    } else {
      output = [{ type: 'error', text: `${t.terminal.unknown}: ${command}. ${t.terminal.typeHelp}` }];
    }

    setTerminalLines((lines) => [...lines, { type: 'command', text: command }, ...output].slice(-36));
    setTerminalInput('');
    focusTerminal();
  };

  const clearTerminalEditor = () => {
    if (terminalInputRef.current) terminalInputRef.current.textContent = '';
    setTerminalInput('');
  };

  const handleTerminalInput = (event) => {
    // contentEditable gives us direct, visible terminal typing without a hidden input.
    // Strip line breaks so the prompt always behaves like a one-line shell.
    const nextValue = (event.currentTarget.textContent || '').replace(/[\r\n]+/g, '');
    if (event.currentTarget.textContent !== nextValue) event.currentTarget.textContent = nextValue;
    setTerminalInput(nextValue);
  };

  const handleTerminalKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const command = (event.currentTarget.textContent || terminalInput || '').replace(/[\r\n]+/g, '');
      clearTerminalEditor();
      runTerminalCommand(command);
    } else if (event.key === 'Escape') {
      event.currentTarget.blur();
    }
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label={t.accessibility.home}>
          <span className="brand-mark">LJ</span>
          <span className="brand-text">LADY JÉNNYSCA</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label={t.accessibility.nav}>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#projects" onClick={closeMenu}>{t.nav.projects}</a>
          <a href="#activities" onClick={closeMenu}>{t.nav.activities}</a>
          <a href="#journey" onClick={closeMenu}>{t.nav.journey}</a>
          <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
        </nav>

        <div className="topbar-actions">
          <div className="language-switch" aria-label={t.accessibility.language}>
            <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => applyLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            <button type="button" className={language === 'fr' ? 'active' : ''} onClick={() => applyLanguage('fr')} aria-pressed={language === 'fr'}>FR</button>
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.accessibility.light : t.accessibility.dark}
            title={theme === 'dark' ? t.accessibility.light : t.accessibility.dark}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <a className="nav-cta" href="#contact">{t.nav.talk} <Icon name="arrow" size={17} /></a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? t.accessibility.closeMenu : t.accessibility.openMenu}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy" data-reveal="left">
            <div className="eyebrow"><span /> {t.hero.eyebrow}</div>
            <h1>{t.hero.line1}<span className="gradient-text"> {t.hero.line2}</span></h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{t.hero.projects} <Icon name="arrow" size={18} /></a>
              <a className="button button-ghost" href="mailto:jennysclady@gmail.com">{t.hero.contact}</a>
            </div>
            <div className="hero-meta">
              <div><span className="status-dot" /> {t.hero.availability}</div>
              <div>{t.hero.meta}</div>
            </div>
          </div>

          <div className="hero-visual" data-reveal="right" ref={heroVisualRef}>
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="visual-card terminal-card" onClick={focusTerminal} role="region" aria-label={t.accessibility.terminal}>
              <div className="terminal-top">
                <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
                <span>lady.profile</span>
                <Icon name="terminal" size={16} />
              </div>
              <div className="terminal-body" ref={terminalBodyRef} aria-live="polite">
                {terminalLines.map((line, index) => (
                  <p key={`${line.type}-${index}-${line.text}`} className={`term-line term-${line.type}`}>
                    {line.type === 'command' ? <><span className="term-muted">$</span> {line.text}</> : line.text}
                  </p>
                ))}
                <div className="terminal-live-line">
                  <span className="terminal-live-prompt" aria-hidden="true">$</span>
                  <span
                    ref={terminalInputRef}
                    className="terminal-live-editor"
                    role="textbox"
                    contentEditable
                    suppressContentEditableWarning
                    spellCheck={false}
                    aria-label={t.accessibility.terminalCommand}
                    onInput={handleTerminalInput}
                    onKeyDown={handleTerminalKeyDown}
                  />
                  <span className="terminal-cursor" aria-hidden="true" />
                </div>
              </div>
              <div className="terminal-quick" aria-hidden="true">
                {quickCommands.map((cmd) => <span key={cmd}>{cmd}</span>)}
              </div>
            </div>
            <div className="floating-chip chip-one" aria-hidden="true"><span>01</span> SOC</div>
            <div className="floating-chip chip-two" aria-hidden="true"><span>02</span> {t.hero.chip2}</div>
            <div className="floating-chip chip-three" aria-hidden="true"><span>03</span> {t.hero.chip3}</div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-kicker" data-reveal>{t.about.kicker}</div>
          <div className="about-grid">
            <div className="section-heading" data-reveal="left">
              <h2>{t.about.title1}<br /><span>{t.about.title2}</span></h2>
            </div>
            <div className="about-copy" data-reveal="right">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>

          <div className="expertise-grid">
            {t.expertise.map((item, index) => (
              <article className="expertise-card" key={item.title} data-reveal="up" style={{ '--reveal-delay': `${index * 90}ms` }}>
                <div className="expertise-top">
                  <span className="expertise-icon"><Icon name={item.icon} size={23} /></span>
                  <span className="expertise-number">0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-bar">
            <div data-reveal="left">
              <div className="section-kicker">{t.projects.kicker}</div>
              <h2>{t.projects.title1}<br /><span>{t.projects.title2}</span></h2>
            </div>
            <p data-reveal="right">{t.projects.intro}</p>
          </div>

          <div className="featured-projects">
            {t.projects.featured.map((project, index) => (
              <article className="featured-card" key={project.index} data-reveal="up" style={{ '--reveal-delay': `${index * 120}ms` }}>
                <div className="featured-media"><img src={project.image} alt={project.title} /></div>
                <div className="featured-body">
                  <div className="featured-topline"><span className="featured-index">{project.index}</span><span className="featured-category">{project.category}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="featured-impact"><Icon name="trophy" size={16} /> {project.impact}</div>
                  <div className="featured-detail">{project.details}</div>
                  <div className="project-tags project-tags-start">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="featured-actions">
                    <a className="button button-primary button-small" href={project.link} target="_blank" rel="noreferrer">{t.projects.visit} <Icon name="external" size={16} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="project-list compact-project-list">
            {t.projects.highlights.map((project, index) => (
              <article className={`project-row accent-${project.accent}`} key={project.index} data-reveal="up" style={{ '--reveal-delay': `${index * 70}ms` }}>
                <div className="project-index">{project.index}</div>
                <div className="project-main">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-link" aria-hidden="true"><Icon name="spark" size={18} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section activities" id="activities">
          <div className="activities-head">
            <div data-reveal="left">
              <div className="section-kicker">{t.activities.kicker}</div>
              <h2>{t.activities.title1}<br /><span>{t.activities.title2}</span></h2>
            </div>
            <p data-reveal="right">{t.activities.intro}</p>
          </div>

          <div className="activity-grid">
            {t.activities.items.map((activity, index) => (
              <article className="activity-card" key={activity.index} data-reveal="up" style={{ '--reveal-delay': `${index * 100}ms` }}>
                <div className="activity-media">
                  <img src={activity.image} alt={activity.title} style={{ objectPosition: activity.position }} />
                  <div className="activity-badge">{activity.year}</div>
                </div>
                <div className="activity-body">
                  <div className="activity-meta"><span>{activity.index}</span><span>{activity.type}</span></div>
                  <h3>{activity.title}</h3>
                  <div className="activity-location">{activity.location}</div>
                  <p>{activity.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey" id="journey">
          <div className="journey-layout">
            <div className="journey-sticky" data-reveal="left">
              <div className="section-kicker">{t.journey.kicker}</div>
              <div className="journey-intro">
                <h2>{t.journey.title1}<br /><span>{t.journey.title2}</span></h2>
                <p>{t.journey.intro}</p>
              </div>
            </div>

            <div className="timeline">
              {t.journey.items.map((item, index) => (
                <article className="timeline-item" key={`${item.year}-${item.label}`} data-reveal="up" style={{ '--reveal-delay': `${Math.min(index, 4) * 60}ms` }}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-marker"><span /></div>
                  <div className="timeline-content"><span>{item.label}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="cta-panel" data-reveal="up">
            <div className="cta-orb" />
            <div className="section-kicker">{t.contact.kicker}</div>
            <h2>{t.contact.title1}<br />{t.contact.title2}</h2>
            <p>{t.contact.text}</p>
            <div className="cta-actions">
              <a className="button button-light" href="mailto:jennysclady@gmail.com"><Icon name="mail" size={18} /> {t.contact.email}</a>
              <a className="button button-outline-light" href="https://github.com/jennylady" target="_blank" rel="noreferrer"><Icon name="github" size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" data-reveal="up">
        <div className="footer-left"><span className="brand-mark small">LJ</span><p>Portfolio · Ladydi Jénnysca Razanaparany</p></div>
        <div className="footer-links">
          <a href="https://github.com/jennylady" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
          <a href="mailto:jennysclady@gmail.com" aria-label={t.accessibility.email}><Icon name="mail" size={18} /></a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}

export default App;
