export const listResources = (req, res) => {
  res.json([
    { title: "DSA in 100 Days", domain: "DSA", link: "https://example.com/dsa" },
    { title: "React Crash Course", domain: "Web", link: "https://example.com/react" },
    { title: "Career Guidance Book", domain: "Career", link: "https://example.com/careerbook" },
  ]);
};
