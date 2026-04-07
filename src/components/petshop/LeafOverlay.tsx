import { useEffect, useRef } from "react";
import leaf1 from "@/assets/leaf-1.png";
import leaf2 from "@/assets/leaf-2.png";
import leaf3 from "@/assets/leaf-3.png";
import leaf4 from "@/assets/leaf-4.png";
import leaf5 from "@/assets/leaf-5.png";
import leaf6 from "@/assets/leaf-6.png";

const LEAF_SRCS = [leaf1, leaf2, leaf3, leaf4, leaf5, leaf6];

interface Leaf {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  size: number;
  imgIdx: number;
  wS: number;
  wA: number;
  wP: number;
  flipS: number;
  flipP: number;
  delay: number;
  alpha: number;
  maxAlpha: number;
  dead: boolean;
}

function makeLeaf(W: number, H: number, preplace: boolean): Leaf {
  const size = 30 + Math.random() * 35;
  const x = Math.random() * W * 1.1 - W * 0.05;
  const y = preplace ? Math.random() * H : -60 - Math.random() * 200;
  const maxAlpha = 0.55 + Math.random() * 0.25;
  return {
    x,
    y,
    vx: (Math.random() - 0.5) * 0.7,
    vy: 0.4 + Math.random() * 0.7,
    rot: Math.random() * Math.PI * 2,
    vrot: (Math.random() - 0.5) * 0.018,
    size,
    imgIdx: Math.floor(Math.random() * LEAF_SRCS.length),
    wS: 0.015 + Math.random() * 0.012,
    wA: 0.4 + Math.random() * 1.2,
    wP: Math.random() * Math.PI * 2,
    flipS: 0.01 + Math.random() * 0.008,
    flipP: Math.random() * Math.PI * 2,
    delay: preplace ? 0 : Math.floor(Math.random() * 400),
    alpha: preplace ? maxAlpha : 0,
    maxAlpha,
    dead: false,
  };
}

const LeafOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let leaves: Leaf[] = [];
    let tick = 0;
    let animId = 0;

    // Pre-load all leaf images
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    let allLoaded = false;

    LEAF_SRCS.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === LEAF_SRCS.length) {
          allLoaded = true;
        }
      };
      images[i] = img;
    });

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W;
      canvas!.height = H;
    }

    function init() {
      leaves = [];
      for (let i = 0; i < 8; i++) leaves.push(makeLeaf(W, H, true));
      for (let i = 0; i < 14; i++) leaves.push(makeLeaf(W, H, false));
    }

    function draw() {
      tick++;
      ctx!.clearRect(0, 0, W, H);

      if (!allLoaded) {
        animId = requestAnimationFrame(draw);
        return;
      }

      leaves.forEach((l) => {
        if (l.delay > 0) {
          l.delay--;
          return;
        }
        if (l.alpha < l.maxAlpha)
          l.alpha = Math.min(l.maxAlpha, l.alpha + 0.018);

        l.x += l.vx + Math.sin(tick * l.wS + l.wP) * l.wA;
        l.y += l.vy;
        l.rot += l.vrot;
        l.vy = Math.min(l.vy + 0.003, 1.5);

        if (l.y > H + 80 || l.x < -150 || l.x > W + 150) {
          l.dead = true;
          return;
        }

        const flip = Math.cos(tick * l.flipS + l.flipP);
        const tilt = Math.sin(tick * l.flipS + l.flipP) * 0.12;

        const img = images[l.imgIdx];
        if (!img) return;

        const aspect = img.naturalWidth / img.naturalHeight;
        const drawH = l.size;
        const drawW = drawH * aspect;

        ctx!.save();
        ctx!.translate(l.x, l.y);
        ctx!.rotate(l.rot);
        ctx!.transform(flip, tilt, 0, 1, 0, 0);
        ctx!.globalAlpha = l.alpha;

        // Shadow
        ctx!.shadowColor = "rgba(0,0,0,0.15)";
        ctx!.shadowBlur = 8;
        ctx!.shadowOffsetX = 3;
        ctx!.shadowOffsetY = 4;

        ctx!.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
        ctx!.restore();
      });

      leaves = leaves.filter((l) => !l.dead);
      if (leaves.length < 20) leaves.push(makeLeaf(W, H, false));

      animId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  );
};

export default LeafOverlay;
