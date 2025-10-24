import React from "react";

export default function Hero() {
  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ fontSize: "2.8rem" }}>assalamualaikum Riska Atika Zahra 💕</h2>
      <p style={{ fontSize: "1.3rem", marginTop: "10px" }}>
        masi inget engga HAHAHAH? 🌸
      </p>
      <img
        src={process.env.PUBLIC_URL + "/images/foto3.jpg"}
        alt="cute love"
        style={{
          marginTop: "30px",
          borderRadius: "20px",
          width: "320px",
          boxShadow: "0 6px 12px rgba(255,77,109,0.25)",
        }}
      />
    </section>
  );
}
