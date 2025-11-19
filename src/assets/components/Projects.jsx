export default function Projects() {
  const projectList = [
    { title: "Modern Villa", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1470&q=80" },
    { title: "Urban Apartment", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1470&q=80" },
    { title: "Eco-friendly Home", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1470&q=80" },
    { title: "Office Space", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1470&q=80" },
  ];

  return (
    <section style={{ padding: "4rem 2rem", backgroundColor: "#E9D8A6" }}>
      <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem", color: "#6B705C" }}>
        Our Projects
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {projectList.map((proj, idx) => (
          <div key={idx} style={{ position: "relative", overflow: "hidden", borderRadius: "0.5rem" }}>
            <img src={proj.image} alt={proj.title} style={{ width: "100%", display: "block", transition: "transform 0.3s", cursor: "pointer" }}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"} />
            <div style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              background: "rgba(0,0,0,0.5)",
              color: "#F5F3EF",
              padding: "0.5rem 1rem",
              fontFamily: "Playfair Display, serif",
              fontSize: "1.2rem",
              textAlign: "center"
            }}>
              {proj.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
