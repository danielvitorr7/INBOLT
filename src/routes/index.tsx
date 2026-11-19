import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import inboltCss from "../styles/inbolt.css?url";
import { startInbolt } from "@/lib/inbolt-app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INBOLT — Gestão de vendas e finanças" },
      { name: "description", content: "Controle suas vendas, clientes, serviços, despesas e metas com o INBOLT." },
      { property: "og:title", content: "INBOLT — Gestão de vendas e finanças" },
      { property: "og:description", content: "Controle suas vendas, clientes, serviços, despesas e metas com o INBOLT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: inboltCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  staticData: { importedDocument: { html: { lang: "pt-BR", "data-theme": "dark" } } },
  component: Index,
});

function Index() {
  useEffect(() => { startInbolt(); }, []);
  return <>
    <div id="toast" role="status" />
    <div className="wrap">
      <header>
        <div className="logo">
          <img className="lg-l" alt="INBOLT" src="/site-assets/inbolt-logo-light.png" />
          <img className="lg-d" alt="INBOLT" src="/site-assets/inbolt-logo-dark.png" />
        </div>
        <nav id="nav" aria-label="Navegação principal" />
        <div className="row" id="usr" />
      </header>
      <main id="app" />
      <div className="credit">Criado por <a href="https://instagram.com/_daniielvitor" target="_blank" rel="noopener noreferrer">@_daniielvitor</a></div>
    </div>
    <button className="btn fab" id="fab" aria-label="Nova venda">+</button>
    <div id="modal" />
  </>;
}
