import React, { useEffect, useRef } from "react";

export default function BackgroundHearts() {
  const canvasRef = useRef(null);

useEffect(() => {
  console.log("💖 BackgroundHearts aktif!");
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

    let hearts = [];
    const colors = ["#ff4d6d", "#ff8fab", "#ffc2d1", "#ffb3c6"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Heart {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 12 + 8;
        this.speed = Math.random() * 1 + 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
    draw() {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.scale(this.size / 15, this.size / 15); // biar scalable
  ctx.beginPath();
  ctx.moveTo(0, -5);

  for (let t = 0; t < Math.PI * 2; t += 0.1) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      -(
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t)
      );
    ctx.lineTo(x, y);
  }

  ctx.closePath();
  ctx.fillStyle = this.color + "aa"; // transparansi lembut
  ctx.shadowColor = this.color;
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.restore();
}
      update() {
        this.y -= this.speed;
        if (this.y < -20) {
          this.y = canvas.height + 20;
          this.x = Math.random() * canvas.width;
        }
        this.draw();
      }
    }

    const createHearts = () => {
      hearts = [];
      for (let i = 0; i < 40; i++) {
        hearts.push(new Heart());
      }
    };
    createHearts();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((h) => h.update());
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "linear-gradient(180deg, #fff0f5, #ffe6eb, #ffe0f0)",
      }}
    />
  );
}
