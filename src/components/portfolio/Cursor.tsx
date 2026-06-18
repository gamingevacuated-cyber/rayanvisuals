import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    let raf = 0;
    let tx = 0, ty = 0, rx = 0, ry = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx - 4}px, ${ty - 4}px, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const next = !!el?.closest("a,button,[role=button],input,textarea,label,select,.cursor-pointer");
      if (next !== hovering) {
        hovering = next;
        if (ringRef.current) {
          ringRef.current.dataset.hover = next ? "1" : "0";
        }
      }
    };

    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    if (dotRef.current) dotRef.current.style.display = "block";
    if (ringRef.current) ringRef.current.style.display = "block";
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full"
        style={{
          display: "none",
          background: "#6D5DFE",
          boxShadow: "0 0 14px rgba(109,93,254,0.9), 0 0 28px rgba(168,85,247,0.5)",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        data-hover="0"
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[199] rounded-full"
        style={{
          display: "none",
          width: 36,
          height: 36,
          border: "1.5px solid rgba(109,93,254,0.6)",
          willChange: "transform",
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease",
        }}
      />
      <style>{`
        .cursor-ring[data-hover="1"] {
          width: 56px !important;
          height: 56px !important;
          background: rgba(109,93,254,0.14);
        }
      `}</style>
    </>
  );
}
