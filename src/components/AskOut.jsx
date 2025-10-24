import React from "react";

export default function AskOut() {
  const phoneNumber = "6289651077558"; // GANTI ke nomor WhatsApp kamu (format internasional tanpa +)
  const messageYes = encodeURIComponent("Iyaa aku mau, GELEM POLL 😍💞");
  const messageNo = encodeURIComponent("Belum bisa sabtu ini tapi makasih yaa ❤️");

  const handleYes = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${messageYes}`, "_blank");
  };

  const handleNo = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${messageNo}`, "_blank");
  };

  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#fff0f5",
        borderRadius: "30px",
        margin: "40px 20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#ff4d6d" }}>Riss💕</h2>
      <p style={{ fontSize: "1.3rem" }}>
        Hari Sabtu ini... kamu mau jalan bareng aku gak? 🥺
      </p>

      <div style={{ marginTop: "25px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <button
          onClick={handleYes}
          style={{
            background: "#ff8fab",
            border: "none",
            padding: "12px 25px",
            borderRadius: "15px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          Iyaa mau 😍
        </button>

        <button
          onClick={handleNo}
          style={{
            background: "#ccc",
            border: "none",
            padding: "12px 25px",
            borderRadius: "15px",
            color: "#333",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1.1rem",
          }}
        >
          Belum bisa 😢
        </button>
      </div>
    </section>
  );
}
