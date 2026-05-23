import React, { useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContactButton, FadeIn, LiveProjectButton } from './components/ui';
import AnimatedText from './components/AnimatedText';
import Magnet from './components/Magnet';

const navLinks = ['About', 'Price', 'Projects', 'Contact'];
const heroPortrait = 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const services = [
  {
    title: 'Editing',
    description:
      'Professional editing services for video, motion, and visual storytelling that elevate your message and polish every project.',
  },
  {
    title: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    title: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    title: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    title: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

const projects = [
  {
    number: '01',
    label: 'Client',
    title: 'Nextlevel Studio',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    label: 'Personal',
    title: 'Aura Brand Identity',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    label: 'Client',
    title: 'Solaris Digital',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
];

const aboutText = `# ABOUT ME

I am a future-focused student, creator, and builder who is deeply passionate about technology, artificial intelligence, coding, futuristic systems, psychology, and self-improvement. I constantly explore new ideas and challenge myself to grow mentally, physically, and creatively. My goal is not just to become successful, but to transform myself into a disciplined, intelligent, and independent person capable of building meaningful innovations.

I enjoy learning web development, creating futuristic projects, editing videos, understanding human behavior, and designing systems that solve real-world problems. I believe imagination becomes powerful only when combined with action, consistency, and discipline.

Currently, I am focused on improving my mindset, mastering valuable skills, building projects like AI-powered applications, and developing the strongest version of myself step by step.

━━━━━━━━━━━━━━━━━━━

# CORE IDENTITY

Student
↓
Creator
↓
Builder
↓
Future Innovator

━━━━━━━━━━━━━━━━━━━

# MY INTERESTS

• Artificial Intelligence
• Coding & Web Development
• Futuristic Technology
• Psychology & Human Behavior
• Content Creation & Editing
• Innovation & Startup Ideas
• Self Improvement & Discipline

━━━━━━━━━━━━━━━━━━━

# MY MISSION

Build consistency.
Control distractions.
Master skills.
Create meaningful systems.
Turn imagination into reality.

━━━━━━━━━━━━━━━━━━━

# MY VISION

I do not want to live an ordinary life.

I want to:
• build powerful skills
• create futuristic projects
• become financially independent
• inspire people through creation
• and continuously evolve into a stronger version of myself.
`;

function App() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const rowOneRef = useRef<HTMLDivElement | null>(null);
  const rowTwoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMarquee = () => {
      if (!marqueeRef.current || !rowOneRef.current || !rowTwoRef.current) return;
      const sectionTop = marqueeRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      rowOneRef.current.style.transform = `translateX(${offset - 200}px)`;
      rowTwoRef.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    window.addEventListener('scroll', updateMarquee, { passive: true });
    updateMarquee();
    return () => window.removeEventListener('scroll', updateMarquee);
  }, []);

  const repeatedRow = useMemo(
    () => [...marqueeImages.slice(0, 11), ...marqueeImages.slice(0, 11), ...marqueeImages.slice(0, 11)],
    [],
  );

  const repeatedRowTwo = useMemo(
    () => [...marqueeImages.slice(11), ...marqueeImages.slice(11), ...marqueeImages.slice(11)],
    [],
  );

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ['start end', 'end start'],
  });

  const projectScales = projects.map((_, index) => {
    const targetScale = 1 - (projects.length - 1 - index) * 0.03;
    return useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  });

  return (
    <main className="min-h-screen bg-page text-[#D7E2EA] overflow-x-clip">
      <section className="relative h-screen overflow-x-clip px-6 md:px-10 lg:px-14">
        <FadeIn tag="nav" delay={0} y={-20} className="flex items-center justify-between pt-6 md:pt-8 text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] uppercase tracking-wider font-medium">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition-opacity duration-200 hover:opacity-70">
              {link}
            </a>
          ))}
        </FadeIn>

        <div className="mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
          <FadeIn tag="h1" delay={0.15} y={40} className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15.5vw]">
            Hi, i&apos;m Anurag
          </FadeIn>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col-reverse items-center justify-between gap-6 pb-7 sm:pb-8 md:pb-10 md:flex-row">
          <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]">
            a 3d creator driven by crafting striking and unforgettable projects
          </FadeIn>
          <FadeIn delay={0.5} y={20} className="">
            <ContactButton />
          </FadeIn>
        </div>

        <FadeIn delay={0.6} y={30} className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 sm:w-[360px] md:w-[440px] lg:w-[520px]">
          <div className="relative mx-auto w-full">
            <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
              <img src={heroPortrait} alt="Jack portrait" className="w-full rounded-[36px] object-cover" />
            </Magnet>
          </div>
        </FadeIn>
      </section>

      <section ref={marqueeRef} className="bg-page pt-24 sm:pt-32 md:pt-40 pb-10 px-5 sm:px-8 md:px-10">
        <div className="space-y-3 overflow-hidden">
          <div className="flex gap-3 will-change-transform" ref={rowOneRef}>
            {repeatedRow.map((src, idx) => (
              <img key={`r1-${idx}`} src={src} loading="lazy" alt="motion preview" className="h-[270px] w-[420px] rounded-2xl object-cover" />
            ))}
          </div>
          <div className="flex gap-3 will-change-transform" ref={rowTwoRef}>
            {repeatedRowTwo.map((src, idx) => (
              <img key={`r2-${idx}`} src={src} loading="lazy" alt="motion preview" className="h-[270px] w-[420px] rounded-2xl object-cover" />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
        <FadeIn tag="img" delay={0.1} x={-80} className="pointer-events-none absolute top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="moon decoration" />
        <FadeIn tag="img" delay={0.25} x={-80} className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3d object decoration" />
        <FadeIn tag="img" delay={0.15} x={80} className="pointer-events-none absolute top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="lego decoration" />
        <FadeIn tag="img" delay={0.3} x={80} className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3d group decoration" />

        <FadeIn tag="h2" delay={0} y={40} className="hero-heading text-center font-black uppercase tracking-tight leading-none text-[clamp(3rem,12vw,160px)]">
          About me
        </FadeIn>

        <div className="mt-14 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <AnimatedText text={aboutText} />
          <ContactButton />
        </div>
      </section>

      <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]">
        <h2 className="text-center font-black uppercase text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
        <div className="mx-auto max-w-5xl space-y-4">
          {services.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={0.1 + index * 0.1}
              x={0}
              y={20}
              className="border-b border-[rgba(12,12,12,0.15)] pb-8 sm:pb-10 md:pb-12"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)]">{`0${index + 1}`}</span>
                <div className="flex-1 space-y-3">
                  <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">{item.title}</h3>
                  <p className="max-w-2xl font-light leading-relaxed text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section ref={projectsRef} id="projects" className="relative bg-page rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-16 sm:pt-20 md:pt-24 z-10 px-5 sm:px-8 md:px-10 pb-24">
        <FadeIn tag="h2" delay={0} y={40} className="hero-heading text-center font-black uppercase tracking-tight leading-none text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-24">
          Project
        </FadeIn>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const scale = projectScales[index];

            return (
              <motion.div
                key={project.title}
                style={{ scale, top: `${24 + index * 28}px`, zIndex: projects.length - index }}
                className="sticky top-24"
              >
                <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-page p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
                    <div className="flex items-end gap-4">
                      <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)]">{project.number}</span>
                      <div>
                        <p className="uppercase tracking-[0.35em] text-sm sm:text-base text-[#D7E2EA] opacity-80">
                          {project.label}
                        </p>
                        <h3 className="mt-2 text-3xl sm:text-[2.6rem] font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <LiveProjectButton />
                  </div>
                  <div className="mt-8 grid gap-4 md:grid-cols-[40%_60%]">
                    <div className="grid gap-4">
                      <img src={project.images[0]} alt={`${project.title} preview 1`} className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(130px,16vw,230px)] object-cover" />
                      <img src={project.images[1]} alt={`${project.title} preview 2`} className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(160px,22vw,340px)] object-cover" />
                    </div>
                    <img src={project.images[2]} alt={`${project.title} preview 3`} className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[320px] object-cover" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
