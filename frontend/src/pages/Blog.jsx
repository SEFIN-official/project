import React from "react";

const blogData = [
  {
    domain: "AI / Machine Learning",
    highlight: {
      title: "Google launches Gemini 1.5 Pro",
      image: "https://storage.googleapis.com/gemini-gemini/hero_gemini15.webp",
      link: "https://ai.googleblog.com/2025/07/introducing-gemini-15-pro.html",
      description:
        "Google’s Gemini 1.5 Pro introduces an extended context window and dramatically improves code generation performance.",
    },
    articles: [
      {
        title: "Meta open-sources Llama 4 100B",
        description:
          "Meta’s most capable model yet is optimized for research and large-scale applications.",
        link: "https://ai.meta.com/blog/llama-4-100b/",
      },
      {
        title: "GenAI is Transforming Healthcare Diagnostics",
        link: "https://towardsdatascience.com/genai-in-healthcare-2025",
        description:
          "A deep dive into how generative AI tools improve radiology outcomes.",
      },
    ],
    trending: [
      "OpenAI, Google, Meta, Anthropic announce AI Safety Pact.",
      "LLMs now integrated into EHR systems for hospitals.",
    ],
  },
  {
    domain: "Web Development",
    highlight: {
      title: "React 19 is Here!",
      image: "https://reactjs.org/logo-og.png",
      link: "https://react.dev/blog/2025/07/19/react-19-announcement",
      description:
        "Server Components, streaming, and new suspense updates mark a huge shift in React.",
    },
    articles: [
      {
        title: "Microsoft Edge debuts AI debugging tools",
        description:
          "Edge DevTools now leverage GPT-based assistance for real-time help.",
        link: "https://blogs.windows.com/msedgedev/2025/07/edge-ai-devtools/",
      },
      {
        title: "WebAssembly takes over CMS platforms",
        link: "https://webassembly.org/",
        description:
          "Full CMS engines now compile directly to Wasm for blazing performance.",
      },
    ],
    trending: [
      "Astro 4.0 and Qwik race toward instant-loading websites.",
      "Edge functions and Serverless are the new backend norm.",
    ],
  },
  {
    domain: "Cybersecurity",
    highlight: {
      title: "Real Attack Simulations by TryHackMe",
      image: "https://tryhackme-images.s3.amazonaws.com/blog/attack-simulations.png",
      link: "https://tryhackme.com/blog/real-attack-simulations",
      description:
        "TryHackMe launches its most realistic training path yet — with real-world cyber threat emulation.",
    },
    articles: [
      {
        title: "Microsoft warns of deepfake phishing",
        description:
          "2025's most dangerous phishing campaigns mimic real executives using AI.",
        link: "https://www.microsoft.com/security/blog/",
      },
      {
        title: "Passwordless Authentication is Here",
        description:
          "Google, Apple, and Microsoft unify around passkeys and FIDO2 as default login methods.",
        link: "https://blog.google/technology/safety-security/passwordless-authentication/",
      },
    ],
    trending: [
      "Zero-trust architecture becomes standard in enterprises.",
      "Cloudflare pushes universal security telemetry API.",
    ],
  },
];

export default function Blog() {
  return (
    <div style={{
      backgroundColor: "#000000",
      color: "#ffffff",
      padding: "48px 24px",
      fontFamily: "Segoe UI, sans-serif",
      minHeight: "100vh",
    }}>
      <h1 style={{
        fontSize: 38,
        fontWeight: 700,
        marginBottom: 32,
        textAlign: "center",
      }}>
        📰 Tech Blog Highlights — 2025
      </h1>

      {blogData.map(({ domain, highlight, articles, trending }) => (
        <section key={domain} style={{
          backgroundColor: "#1a1a1a",
          borderRadius: 16,
          padding: 28,
          marginBottom: 48,
          boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
        }}>
          <h2 style={{ fontSize: 28, color: "#00bfff", marginBottom: 20 }}>
            {domain}
          </h2>

          {/* Highlight Blog Card */}
          <a
            href={highlight.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              backgroundColor: "#111",
              borderRadius: 12,
              overflow: "hidden",
              textDecoration: "none",
              marginBottom: 24,
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={highlight.image}
              alt={highlight.title}
              style={{ width: "38%", objectFit: "cover" }}
            />
            <div style={{ padding: 20, color: "#fff" }}>
              <h3 style={{ fontSize: 20 }}>{highlight.title}</h3>
              <p style={{ fontSize: 14, color: "#ccc", marginTop: 8 }}>
                {highlight.description}
              </p>
            </div>
          </a>

          {/* Articles */}
          <h4 style={{ marginBottom: 10, fontSize: 18, color: "#ccc" }}>
            🗞️ Articles from Tech Giants
          </h4>
          <ul style={{ paddingLeft: 20 }}>
            {articles.map(({ title, description, link }, idx) => (
              <li key={idx} style={{ marginBottom: 14 }}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: "bold",
                    color: "#00bfff",
                    textDecoration: "none",
                    fontSize: 15,
                  }}
                >
                  {title}
                </a>
                <p style={{ margin: "4px 0", fontSize: 13, color: "#aaa" }}>
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Trending */}
          <div style={{ marginTop: 28 }}>
            <h4 style={{ fontSize: 16, marginBottom: 12, color: "#ccc" }}>
              🔥 Trending Topics
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {trending.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "#222",
                    padding: "6px 12px",
                    borderRadius: 20,
                    fontSize: 13,
                    color: "#ddd",
                    border: "1px solid #333",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
