import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import annotationAsset from "@/assets/nemetrix/annotation.webp.asset.json";
import armAssemblyAsset from "@/assets/nemetrix/arm-assembly.webp.asset.json";
import dexterousArmAsset from "@/assets/nemetrix/dexterous-arm.webp.asset.json";
import kitchenAsset from "@/assets/nemetrix/egocentric-kitchen.webp.asset.json";
import warehouseAsset from "@/assets/nemetrix/egocentric-warehouse.webp.asset.json";
import dashboardAsset from "@/assets/nemetrix/hero-dashboard.webp.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nemetrix — AI Data & Engineering Partner" },
      { name: "description", content: "Data collection, annotation, model development, and production engineering for AI and robotics teams." },
      { property: "og:title", content: "Nemetrix — AI Data & Engineering Partner" },
      { property: "og:description", content: "One accountable partner from raw-world data to shipped AI products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  { href: "#solutions", label: "Solutions" }, { href: "#work", label: "Work" },
  { href: "#industries", label: "Industries" }, { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" }, { href: "#contact", label: "Contact" },
];

const pipeline = [
  { id: "03.1", title: "Collect", copy: "Real-world data capture—egocentric, robotic, wearable.", services: ["Egocentric Data Collection", "Dexterous Arm & Robotic Manipulation Data"] },
  { id: "03.2", title: "Label", copy: "Annotation and transcription with layered QA.", services: ["Data Annotation", "Transcription"] },
  { id: "03.3", title: "Build", copy: "Model training, fine-tuning, and custom development.", services: ["AI / LLM Training", "AI Model Development", "Custom Development"] },
  { id: "03.4", title: "Ship", copy: "Applications, deployment infrastructure, and advisory.", services: ["App & Web Development", "MLOps & Deployment", "AI Strategy & Consulting"] },
];

const caseStudies = [
  { number: "01", metric: "500K+", unit: "egocentric clips", title: "Wearable Vision Corpus", text: "First-person footage across kitchens, workshops, and warehouses, enriched with pose, depth, and segmentation.", image: kitchenAsset.url, alt: "Egocentric kitchen task data collection" },
  { number: "02", metric: "12+", unit: "robot platforms", title: "Dexterous Manipulation Set", text: "Teleoperated demonstrations with synchronized video, joint angles, and trajectories across hardware.", image: dexterousArmAsset.url, alt: "Dexterous robotic arm data collection system" },
  { number: "03", metric: "99.9%", unit: "annotation accuracy", title: "Multimodal Annotation", text: "Audited image, video, and audio labels delivered weekly through layered QA and gold-standard tasks.", image: annotationAsset.url, alt: "Visual data annotation workspace" },
  { number: "04", metric: "50+", unit: "languages", title: "Multilingual Transcription", text: "Time-aligned, speaker-labeled transcripts delivered to a strict downstream training schema.", image: dashboardAsset.url, alt: "AI training data pipeline dashboard" },
];

const showcase = [
  { src: kitchenAsset.url, alt: "Hands preparing food in an egocentric kitchen recording", label: "KITCHEN · EGOCENTRIC" },
  { src: warehouseAsset.url, alt: "Worker collecting egocentric footage in a warehouse", label: "WAREHOUSE · EGOCENTRIC" },
  { src: dexterousArmAsset.url, alt: "Dual robotic arms capturing manipulation data", label: "DUAL ARM · MANIPULATION" },
  { src: armAssemblyAsset.url, alt: "Robotic arm performing a precision assembly task", label: "SINGLE ARM · ASSEMBLY" },
];

const industries = [
  ["PHYSICAL AI", "Robotics & Embodied AI", "Egocentric and manipulation data for perception and control."],
  ["PHYSICAL AI", "Autonomous Vehicles", "Sensor-fusion annotation, edge-case curation, and evaluation."],
  ["REGULATED", "Healthcare & Life Sciences", "Clinical transcription and medical-imaging annotation."],
  ["RESEARCH", "Research Labs & Academia", "Reproducible datasets and evaluation harnesses."],
  ["PRODUCT", "Enterprise & SaaS", "Internal tooling, custom models, and production applications."],
  ["PRODUCT", "Consumer AI Products", "AI-native web and mobile products from prototype to deployment."],
];

const faqs = [
  ["How do you handle data security and NDAs?", "Every engagement can start under NDA. Data is handled on access-controlled infrastructure by vetted teams, aligned to your compliance posture including SOC 2 and GDPR on request."],
  ["What are typical turnaround times?", "Most annotation and transcription batches run weekly. Collection programs generally ramp within a few weeks of scoping, with SLAs agreed up front."],
  ["What is the minimum engagement size?", "We support focused pilots and sustained multi-quarter programs. A scoped pilot is often the best way to validate quality before scaling."],
  ["How does pricing work?", "Annotation and transcription are priced per unit; collection and custom development are scoped. You receive a clear quote after a short call."],
  ["Can you work with our hardware and stack?", "Yes. We integrate specific robot platforms, capture rigs, data schemas, infrastructure, and research workflows into the delivery plan."],
];

function FlowArrow({ label, long = false }: { label: string; long?: boolean }) {
  return <div className={`flow-arrow ${long ? "is-long" : ""}`} aria-hidden="true"><em>{label}</em><i /><span>▼</span></div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <main className="diagram-page">
      <header className="nav-shell">
        <nav className="diagram-nav" aria-label="Main navigation">
          <a href="#start" className="diagram-brand" aria-label="Nemetrix home"><b>N</b><span>NEMETRIX</span></a>
          <div className="desktop-nav">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
          <a href="mailto:hello@nemetrix.ai" className="nav-action">EMAIL US <Mail aria-hidden="true" /></a>
          <Button className="mobile-menu-button" variant="ghost" size="icon" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X /> : <Menu />}</Button>
        </nav>
        {menuOpen && <div id="mobile-navigation" className="mobile-nav">{navigation.map((item, index) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}</div>}
      </header>
      <div className="chart-grid" aria-hidden="true" />

      <section id="start" className="chart-stage start-stage">
        <div className="terminal-node start-node"><span className="node-id">START · AI DATA + ENGINEERING</span><h1>The team behind<br />your training data.</h1><p>Nemetrix builds the data pipelines, collection programs, custom models, and production tools that AI and robotics teams need to ship.</p><div className="hero-actions"><a href="#solutions">RUN THE FLOW <span>↓</span></a><a href="#work" className="secondary-action">SEE THE PROOF <ArrowUpRight /></a></div></div>
        <div className="floating-chip chip-one">VISION <b>●</b></div><div className="floating-chip chip-two">ROBOTICS <b>●</b></div><div className="floating-chip chip-three">LANGUAGE <b>●</b></div>
      </section>

      <FlowArrow label="raw signal enters" long />
      <section id="about" className="chart-stage input-stage"><article className="process-node input-node"><header><span className="node-id">CONTEXT · 01</span><b>THE UNGLAMOROUS MIDDLE</b></header><div><h2>Great models start long before training.</h2><div className="input-copy"><p>Most AI projects stall between an ambitious research goal and a dependable production pipeline.</p><p>We own that gap—capture, annotation, transcription, tooling, model work, and deployment—so your researchers can focus on intelligence, not vendor handoffs.</p></div></div></article></section>

      <FlowArrow label="inspect the bottleneck" />
      <section className="chart-stage decision-stage"><div className="decision-diamond"><div><span className="node-id">DECISION · 02</span><h2>Patch four vendors together?</h2></div></div><svg className="decision-branches" viewBox="0 0 1000 330" preserveAspectRatio="none" aria-hidden="true"><path d="M500 5 V80 C500 150 220 125 220 230 V325" /><path d="M500 5 V80 C500 150 780 125 780 230 V325" /><circle r="6"><animateMotion dur="2.8s" repeatCount="indefinite" path="M500 5 V80 C500 150 220 125 220 230 V325" /></circle><circle r="6"><animateMotion dur="2.8s" begin="-1.4s" repeatCount="indefinite" path="M500 5 V80 C500 150 780 125 780 230 V325" /></circle></svg><div className="decision-options"><article className="option-node option-no"><span>YES / FRAGMENT</span><h3>More handoffs</h3><p>Scattered accountability, inconsistent QA, and brittle glue code.</p></article><article className="option-node option-yes"><span>NO / CONNECT</span><h3>One Nemetrix flow</h3><p>One accountable team from real-world capture to a shipped product.</p></article></div></section>

      <FlowArrow label="route to one partner" long />
      <section id="solutions" className="chart-stage pipeline-stage"><div className="section-terminal"><span className="node-id">SOLUTIONS · 03</span><h2>One pipeline.<br />Ten services deep.</h2><p>Choose one stage or connect the entire path.</p></div><div className="pipeline-map"><div className="pipeline-spine" aria-hidden="true"><i /><i /><i /></div>{pipeline.map((stage, index) => <article className={`pipeline-node node-${index + 1}`} key={stage.id}><span className="node-id">{stage.id}</span><h3>{stage.title}</h3><p>{stage.copy}</p><ul>{stage.services.map((service) => <li key={service}>{service}</li>)}</ul><b aria-hidden="true">{index === pipeline.length - 1 ? "✓" : "→"}</b></article>)}</div></section>

      <FlowArrow label="verified output" long />
      <section id="work" className="chart-stage work-stage"><div className="work-heading"><span className="node-id">SELECTED WORK · 04</span><h2>Proof from the field,<br />not the pitch deck.</h2></div><div className="case-flow">{caseStudies.map((study) => <article key={study.number} className="case-node"><div className="case-image"><img src={study.image} alt={study.alt} loading="lazy" /><span>{study.number}</span></div><div className="case-content"><div className="case-metric"><b>{study.metric}</b><small>{study.unit}</small></div><h3>{study.title}</h3><p>{study.text}</p></div></article>)}</div><div className="proof-strip"><span>MEASURED OUTPUT</span><b>500K+ clips</b><i>→</i><b>99.9% accuracy</b><i>→</i><b>50+ languages</b><i>→</i><b>12+ platforms</b></div></section>

      <FlowArrow label="physical signal samples" />
      <section className="chart-stage showcase-stage"><div className="showcase-header"><span className="node-id">PHYSICAL AI · 05</span><h2>Captured where intelligence operates.</h2><p>First-person capture and robotic demonstrations, enriched and delivered directly into your training pipeline.</p></div><div className="showcase-grid">{showcase.map((item) => <figure key={item.label}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><span className="live-dot" />{item.label}</figcaption></figure>)}</div><div className="signal-steps"><span>CAPTURED</span><i>→</i><span>ENRICHED</span><i>→</i><span>ANNOTATED</span><i>→</i><span>DELIVERED</span></div></section>

      <FlowArrow label="choose operating environment" long />
      <section id="industries" className="chart-stage industries-stage"><div className="hex-node"><span className="node-id">ROUTER · 06</span><h2>Built for the real world.</h2></div><div className="industry-branches">{industries.map(([group, title, text]) => <article key={title}><span>{group}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <FlowArrow label="operating details" long />
      <section id="faq" className="chart-stage faq-stage"><div className="faq-title"><span className="node-id">CHECKPOINT · 07</span><h2>Before<br />we begin.</h2><p>Clear scope, measurable quality, and delivery dates your roadmap can depend on.</p></div><div className="faq-nodes">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <FlowArrow label="start with a focused pilot" long />
      <section id="contact" className="chart-stage end-stage"><div className="terminal-node end-node"><span className="node-id">END · 08 / NEW BEGINNING</span><h2>Bring us the data problem nobody wants to own.</h2><p>We’ll define the first practical milestone, the quality bar, and the path to scale.</p><a href="mailto:hello@nemetrix.ai">HELLO@NEMETRIX.AI <ArrowUpRight /></a></div></section>

      <footer className="site-footer"><div className="footer-brand"><b>N</b><span>NEMETRIX TECHNOLOGIES<small>AI DATA + ENGINEERING PARTNER</small></span></div><div className="footer-links">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div><div className="footer-status"><span><i /> FLOW STATUS: ACTIVE</span><span>© 2026</span></div></footer>
    </main>
  );
}