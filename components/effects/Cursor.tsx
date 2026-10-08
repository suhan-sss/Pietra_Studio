"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor — custom cursor:
 *  • Dot (10 px) + Ring (40 px) follow the mouse.
 *  • Ring uses mix-blend-mode: exclusion so it stays visible against any
 *    background without needing per-element background sampling.
 *  • Trail line (2 thin strokes: 1.5 px glow + 0.8 px core) — fades in 1.5 s.
 *  • Star particles spawn along the trail (every ~38 ms during movement).
 *  • Auto-hides only on real touch devices via @media (hover: none) CSS.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsHostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const canvas = canvasRef.current!;
    const starsHost = starsHostRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const trail: { x: number; y: number; t: number }[] = [];
    const TRAIL_LEN = 48;
    // Fade window — how long ink stays on the page after the cursor stops.
    // 1.5 s — within the 1–2 s window: full alpha at the head, full alpha
    // drops to 0 at the tail. Smoothstep easing so the head holds longer.
    const FADE_MS = 1500;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastX = mouseX;
    let lastY = mouseY;
    let lastSpawn = 0;
    let lastMoveAt = performance.now();
    let visible = true;
    let inDarkSection = false;

    function getInversion(): "light" | "dark" {
      try {
        let el: Element | null = document.elementFromPoint(mouseX, mouseY);
        let depth = 0;
        while (el && depth < 8) {
          const bg = window
            .getComputedStyle(el as HTMLElement)
            .getPropertyValue("background-color");
          const match = bg.match(
            /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/
          );
          if (match && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const a = match[4] ? parseFloat(match[4]) : 1;
            if (a > 0.5) {
              const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
              return lum < 0.5 ? "light" : "dark";
            }
          }
          el = (el as HTMLElement).parentElement;
          depth += 1;
        }
      } catch {
        /* noop */
      }
      return "dark";
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function applyInversion() {
      // Dot has no blend mode — flip raw colour per section.
      if (inDarkSection) {
        dot.style.background = "#F4EFE6";
      } else {
        dot.style.background = "#1A1715";
      }
      // Ring uses mix-blend-mode: exclusion, which inverts whatever colour
      // we paint. We pick a single cream-ish colour (#F4EFE6) so that:
      //   on cream bg  → renders near-black (highly visible)
      //   on dark bg   → renders light cream (highly visible)
      // No per-section flip needed. Border colour stays constant in inline
      // styles — do NOT touch ring.style.borderColor here.
    }

    function spawnStar(x: number, y: number, _light: boolean) {
      const star = document.createElement("div");
      star.className = "cursor-star";
      const size = 5 + Math.random() * 7;
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = x + offsetX + "px";
      star.style.top = y + offsetY + "px";
      // FIX (boundary snap): use a single ink for stars; the stars host has
      // mix-blend-mode: exclusion so it inverts against any background
      // automatically, so stars stay visible across section boundaries.
      const arms = 4 + Math.floor(Math.random() * 2);
      let points = "";
      const inner = size * 0.32;
      const outer = size / 2;
      for (let i = 0; i < arms * 2; i++) {
        const r = i % 2 === 0 ? outer : inner;
        const angle = (Math.PI * 2 * i) / (arms * 2) - Math.PI / 2;
        const px = size / 2 + Math.cos(angle) * r;
        const py = size / 2 + Math.sin(angle) * r;
        points += `${px},${py} `;
      }
      star.innerHTML = `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><polygon points="${points}" fill="#FFFFFF" /></svg>`;
      const dur = 0.7 + Math.random() * 0.6;
      star.style.animationDuration = dur + "s";
      starsHost.appendChild(star);
      setTimeout(() => {
        if (star.parentNode) star.parentNode.removeChild(star);
      }, dur * 1000 + 80);
    }

    function setVisible(v: boolean) {
      if (visible === v) return;
      visible = v;
      dot.style.opacity = v ? "1" : "0";
      ring.style.opacity = v ? "1" : "0";
    }

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveAt = performance.now();

      const wasDark = inDarkSection;
      inDarkSection = getInversion() === "light";
      if (wasDark !== inDarkSection) applyInversion();

      setVisible(true);

      const now = performance.now();
      if (now - lastSpawn > 38) {
        lastSpawn = now;
        // On dark sections use light stars, on light sections use dark stars
        spawnStar(mouseX, mouseY, inDarkSection);
      }
    }

    function onLeave() {
      setVisible(false);
      trail.length = 0;
      ctx!.clearRect(0, 0, width, height);
    }
    function onEnter() {
      setVisible(true);
    }
    function onDown() {
      ring.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(0.7)`;
    }
    function onUp() {
      ring.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
    }
    function onBlur() {
      setVisible(false);
    }
    function onFocus() {
      setVisible(true);
    }

    function frame(now: number) {
      // Position via translate3d (composited, no layout).
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.3) {
        trail.push({ x: mouseX, y: mouseY, t: now });
        if (trail.length > TRAIL_LEN) trail.shift();
        lastX = mouseX;
        lastY = mouseY;
      }

      const idle = now - lastMoveAt;
      ctx!.clearRect(0, 0, width, height);

      if (idle < FADE_MS && trail.length > 1) {
        ctx!.lineCap = "round";
        ctx!.lineJoin = "round";
        // FIX (boundary snap): do NOT flip ink colour per section. The canvas
        // is set to mix-blend-mode: exclusion, which makes any ink colour
        // automatically invert against the bg. So a single fixed white
        // ink becomes a dark line on cream and a light line on dark — and
        // stays continuous when the cursor crosses a section boundary.
        // Single thin pass — 1 px core, no halo. Alpha is per-segment and
        // tapers from 1 at the head (closest to cursor) to 0 at the tail
        // over FADE_MS, so the line visibly fades from the last point
        // toward the cursor in 1.5 s.
        for (let i = 1; i < trail.length; i++) {
          const p0 = trail[i - 1];
          const p1 = trail[i];
          const age = (now - p1.t) / FADE_MS;
          // Smoothstep — alpha holds at the head and tapers smoothly to 0.
          const faded = Math.max(0, 1 - age);
          const eased = faded * faded * (3 - 2 * faded);
          ctx!.strokeStyle = `rgba(255, 255, 255, ${eased})`;
          ctx!.lineWidth = 1.0;
          ctx!.beginPath();
          ctx!.moveTo(p0.x, p0.y);
          ctx!.lineTo(p1.x, p1.y);
          ctx!.stroke();
        }
      }

      requestAnimationFrame(frame);
    }

    function onScroll() {
      lastMoveAt = performance.now();
      const wasDark = inDarkSection;
      inDarkSection = getInversion() === "light";
      if (wasDark !== inDarkSection) applyInversion();
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    resize();
    applyInversion();
    setVisible(true);
    document.documentElement.classList.add("has-custom-cursor");
    const raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      document.documentElement.classList.remove("has-custom-cursor");
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot — solid, no blend mode. Always visible. */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width: 10,
          height: 10,
          background: "#1A1715",
          borderRadius: 999,
          opacity: 1,
          display: "block",
          visibility: "visible",
          zIndex: 2147483647,
          boxShadow: "0 0 0 1.5px rgba(244, 239, 230, 0.35)",
          transition:
            "opacity 0.2s ease, background-color 0.25s ease",
          willChange: "transform",
        }}
      />
      {/* Ring — uses mix-blend-mode: exclusion so it always stays visible
          against light or dark backgrounds without needing to detect the
          underlying colour. */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: 40,
          height: 40,
          // Cream border + mix-blend-mode: exclusion below → renders near-black
          // against cream backgrounds and light cream against dark sections,
          // so the ring is always clearly visible (and DARK on cream — exactly
          // what was asked).
          border: "1.5px solid #F4EFE6",
          borderRadius: 999,
          background: "transparent",
          opacity: 1,
          display: "block",
          visibility: "visible",
          zIndex: 2147483646,
          mixBlendMode: "exclusion",
          transition:
            "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease, width 0.25s ease, height 0.25s ease",
          willChange: "transform",
        }}
      />
      <canvas
        ref={canvasRef}
        className="cursor-line-canvas"
        style={{ mixBlendMode: "exclusion" }}
      />
      <div
        ref={starsHostRef}
        className="cursor-stars-canvas"
        style={{ mixBlendMode: "exclusion" }}
      />
    </>
  );
}
