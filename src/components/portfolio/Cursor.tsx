import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    let raf = 0;
    let tx = 0, ty = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx - 4}px, ${ty - 4}px, 0)`;
      }
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest("a,button,[role=button],input,textarea,label,select,.cursor-pointer");
      setHovering(interactive);
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
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full"
        style={{
          background: "#3B82F6",
          boxShadow: "0 0 14px rgba(59,130,246,0.9), 0 0 28px rgba(59,130,246,0.5)",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[199] rounded-full transition-[width,height,border-color,background] duration-200 ease-out"
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          marginLeft: hovering ? -10 : 0,
          marginTop: hovering ? -10 : 0,
          border: "1.5px solid rgba(59,130,246,0.6)",
          background: hovering ? "rgba(59,130,246,0.12)" : "transparent",
          backdropFilter: hovering ? "blur(2px)" : undefined,
        }}
      />
    </>
  );
}
