import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LoveMessage() {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <section
      style={{
        padding: "50px 20px",
        background: "#ffe0f0",
        borderRadius: "30px",
        margin: "30px 20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h3>iseng aja sih, coba kamu klik dulu ini yaaw 💌</h3>

      <button
        style={{
          padding: "12px 28px",
          marginTop: "15px",
          background: "#ff4d6d",
          border: "none",
          borderRadius: "12px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => setShow(!show)}
      >
        {show ? "DAHH ❤️" : "INI ❤️"}
      </button>

      {show && (
        <p
          style={{
            marginTop: "25px",
            fontSize: "1.3rem",
            animation: "fadeIn 0.6s ease-in-out",
          }}
        >
          ketemu kamu tuh bikin aku senyum-senyum sendiri teruss <br />
          seneng aja waktu frist meet sama kamu kemarin ahhaha <br />
          aku tebak mesti kamu lagi senyum senyum sendiri jujurrr <br />
          btw ini frist time aku gawe website
          alay yaaw, gajls emang hahahaa
          dahlah lanjutt nih bawahnya masih ada
        </p>
      )}
    </section>
    </motion.div>
  );
}
