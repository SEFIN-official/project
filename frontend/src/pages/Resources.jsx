import React from "react";

const resources = [
  {
    domain: "AI/ML",
    color: "#1a1a1a",
    content: (
      <>
        <p>
          <b>About:</b> AI/ML transforms industries with automation, prediction, and optimization.
        </p>
      </>
    ),
    items: [
      {
        title: "Coursera - Deep Learning Specialization",
        link: "https://www.coursera.org/specializations/deep-learning",
        description: "Andrew Ng’s 5-course deep learning series."
      },
      {
        title: "Fast.ai Practical Deep Learning",
        link: "https://course.fast.ai/",
        description: "Hands-on deep learning using PyTorch."
      },
      {
        title: "GitHub - 100 Days of ML Code",
        link: "https://github.com/Avik-Jain/100-Days-Of-ML-Code",
        description: "Daily ML coding challenge."
      },
      {
        title: "YouTube - Krish Naik Playlist",
        link: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPkl7oRvzyNnyj1HS4wt2K-",
        description: "ML/DL tutorials in Python."
      },
      {
        title: "Udemy - Machine Learning A-Z™",
        link: "https://www.udemy.com/course/machinelearning/",
        description: "Theory + practical ML course."
      }
    ]
  },
  {
    domain: "Web Development",
    color: "#1a1a1a",
    content: (
      <>
        <p>
          <b>About:</b> Build modern websites with frontend and backend technologies.
        </p>
      </>
    ),
    items: [
      {
        title: "Full Stack Open",
        link: "https://fullstackopen.com/en/",
        description: "React, Node.js, GraphQL, and more."
      },
      {
        title: "The Odin Project",
        link: "https://www.theodinproject.com/",
        description: "Free full-stack curriculum."
      },
      {
        title: "React Official Docs",
        link: "https://react.dev/",
        description: "Learn React from the source."
      },
      {
        title: "YouTube - Traversy Media",
        link: "https://www.youtube.com/c/TraversyMedia",
        description: "Frontend and backend tutorials."
      },
      {
        title: "Coursera - Full Stack with React",
        link: "https://www.coursera.org/specializations/full-stack-react",
        description: "Specialization by HKUST."
      }
    ]
  },
  {
    domain: "Cybersecurity",
    color: "#1a1a1a",
    content: (
      <>
        <p>
          <b>About:</b> Learn to defend and ethically attack systems.
        </p>
      </>
    ),
    items: [
      {
        title: "TryHackMe",
        link: "https://tryhackme.com/",
        description: "Hands-on cybersecurity labs."
      },
      {
        title: "Hack The Box",
        link: "https://www.hackthebox.com/",
        description: "Advanced hacking labs."
      },
      {
        title: "Awesome Security GitHub",
        link: "https://github.com/sbilly/awesome-security",
        description: "Massive curated list."
      },
      {
        title: "Udemy - Cyber Security Course",
        link: "https://www.udemy.com/course/the-complete-cyber-security-course-hacker-exposed/",
        description: "Hackers Exposed series."
      },
      {
        title: "YouTube - NetworkChuck",
        link: "https://www.youtube.com/c/NetworkChuck",
        description: "Cybersecurity and hacking."
      }
    ]
  },
  {
    domain: "Data Science",
    color: "#1a1a1a",
    content: (
      <>
        <p>
          <b>About:</b> Turn raw data into actionable insights with statistics, Python, and data tools.
        </p>
      </>
    ),
    items: [
      {
        title: "Coursera - IBM Data Science Professional Cert",
        link: "https://www.coursera.org/professional-certificates/ibm-data-science",
        description: "Foundational to advanced data science."
      },
      {
        title: "Kaggle Learn",
        link: "https://www.kaggle.com/learn",
        description: "Mini-courses in Python, Pandas, ML."
      },
      {
        title: "Udemy - Data Science Bootcamp",
        link: "https://www.udemy.com/course/data-science-and-machine-learning-bootcamp-with-r/",
        description: "R and Python bootcamp."
      },
      {
        title: "YouTube - Data School",
        link: "https://www.youtube.com/c/DataSchool",
        description: "Pandas, Scikit-learn tutorials."
      }
    ]
  },
  {
    domain: "Virtual Reality / XR",
    color: "#1a1a1a",
    content: (
      <>
        <p>
          <b>About:</b> Build immersive AR/VR experiences using Unity, Unreal, and 3D design.
        </p>
      </>
    ),
    items: [
      {
        title: "Coursera - Introduction to AR/VR",
        link: "https://www.coursera.org/learn/introduction-virtual-reality",
        description: "Goldsmiths, University of London."
      },
      {
        title: "Unity Learn XR",
        link: "https://learn.unity.com/paths/xr-development",
        description: "Official Unity XR path."
      },
      {
        title: "Udemy - VR Development with Unity",
        link: "https://www.udemy.com/course/learn-to-build-virtual-reality-games/",
        description: "Build games for Oculus, SteamVR."
      },
      {
        title: "YouTube - Valem Tutorials (Unity VR)",
        link: "https://www.youtube.com/c/ValemTutorials",
        description: "Beginner-friendly Unity VR dev."
      }
    ]
  }
];

function ResourceBox({ domain, color, content, items }) {
  return (
    <div style={{
      background: color,
      borderRadius: 16,
      padding: 28,
      minHeight: 260,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 4px 18px rgba(0, 0, 0, 0.6)",
      transition: "transform 0.3s",
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <h2 style={{ color: "#ffffff", fontSize: 22 }}>{domain}</h2>
      <div style={{ fontSize: 15, color: "#bbbbbb" }}>{content}</div>
      <ul style={{ marginTop: 16, paddingLeft: 20 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 12 }}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00bfff", fontWeight: "bold", textDecoration: "none" }}
            >
              {item.title}
            </a>
            <br />
            <span style={{ color: "#888", fontSize: 14 }}>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resources() {
  return (
    <div style={{
      backgroundColor: "#000000",
      minHeight: "100vh",
      padding: "36px 24px",
      maxWidth: 1300,
      margin: "auto",
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <h1 style={{ color: "#ffffff", fontSize: 38, fontWeight: 700, marginBottom: 12 }}>
        🚀 Career Resources
      </h1>
      <p style={{ color: "#999", fontSize: 16, marginBottom: 28 }}>
        Curated tutorials, courses, and tools for tech enthusiasts in every domain.
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: 32,
      }}>
        {resources.map((r) => (
          <ResourceBox key={r.domain} {...r} />
        ))}
      </div>
    </div>
  );
}
