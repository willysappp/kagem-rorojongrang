import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true }); // animasi halus, muncul sekali
  }, []);

  const images = [
    process.env.PUBLIC_URL + "/images/foto1.jpg",
    process.env.PUBLIC_URL + "/images/foto2.jpg",
    process.env.PUBLIC_URL + "/images/foto4.jpg",
    process.env.PUBLIC_URL + "/images/foto5.jpg",
    process.env.PUBLIC_URL + "/images/foto6.jpg",
    process.env.PUBLIC_URL + "/images/foto7.jpg",
  ];

  return (
    <section
      style={{
        padding: "50px 20px",
        background: "linear-gradient(180deg, #fff0f5 0%, #ffe6eb 100%)",
        textAlign: "center",
      }}
    >
      <h3
        data-aos="fade-down"
        style={{
          color: "#ff4d6d",
          fontSize: "1.8rem",
          fontWeight: "600",
          marginBottom: "30px",
        }}
      >
        ni orang cantikk bangeett aww 💖
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "25px",
          maxWidth: "800px",
          margin: "0 auto",
          paddingBottom: "30px",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 200} // muncul bergantian
            style={{
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={img}
              alt={`gallery-${i}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                display: "block",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
