import { useEffect, useRef } from "react";

const LEAF_PALETTES = [
  { base:"#2d6a2d", mid:"#3a8c3a", light:"#5ab85a", dark:"#1a4a1a", vein:"rgba(20,80,20,0.5)" },
  { base:"#1e5c1e", mid:"#2a7a2a", light:"#4aaa4a", dark:"#123812", vein:"rgba(15,60,15,0.5)" },
  { base:"#3d7a1a", mid:"#52a022", light:"#78cc3a", dark:"#254d0e", vein:"rgba(30,70,10,0.5)" },
  { base:"#7a6010", mid:"#a88018", light:"#d4aa3a", dark:"#4a3a08", vein:"rgba(80,55,8,0.45)" },
  { base:"#8a5010", mid:"#b87020", light:"#dda040", dark:"#522e08", vein:"rgba(90,50,10,0.45)" },
  { base:"#4a7a15", mid:"#66aa1e", light:"#8ed030", dark:"#2a500c", vein:"rgba(35,70,8,0.5)" },
];

type Palette = typeof LEAF_PALETTES[0];

interface Leaf {
  x: number; y: number;
  vx: number; vy: number;
  rot: number; vrot: number;
  pal: Palette; size: number;
  wS: number; wA: number; wP: number;
  flipS: number; flipP: number;
  lightAngle: number;
  bendX: number; bendY: number;
  delay: number; alpha: number; maxAlpha: number;
  dead: boolean;
}

function drawRealistic3DLeaf(
  ctx: CanvasRenderingContext2D,
  pal: Palette,
  size: number,
  bendX: number,
  bendY: number,
  lightAngle: number
) {
  const lx = Math.cos(lightAngle) * size;
  const ly = Math.sin(lightAngle) * size;

  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.18)";
  ctx.shadowBlur = size * 0.6;
  ctx.shadowOffsetX = size * 0.15;
  ctx.shadowOffsetY = size * 0.2;

  const leafPath = new Path2D();
  leafPath.moveTo(0, -size);
  leafPath.bezierCurveTo( size*0.9, -size*0.3,  size*1.0,  size*0.4,  size*0.2, size*1.0);
  leafPath.bezierCurveTo( 0,  size*1.15, -size*0.2, size*1.0, -size*1.0,  size*0.4);
  leafPath.bezierCurveTo(-size*0.9, -size*0.3, 0, -size, 0, -size);

  const grd = ctx.createRadialGradient(lx*0.3, ly*0.3, size*0.05, lx*0.1, ly*0.1, size*1.4);
  grd.addColorStop(0,   pal.light);
  grd.addColorStop(0.3, pal.mid);
  grd.addColorStop(0.7, pal.base);
  grd.addColorStop(1,   pal.dark);
  ctx.fillStyle = grd;
  ctx.fill(leafPath);
  ctx.shadowColor = "transparent";

  ctx.strokeStyle = pal.dark;
  ctx.lineWidth = 0.6;
  ctx.globalAlpha *= 0.6;
  ctx.stroke(leafPath);
  ctx.globalAlpha /= 0.6;

  ctx.beginPath();
  ctx.moveTo(0, -size * 0.95);
  ctx.bezierCurveTo(bendX*0.3, -size*0.3, bendX*0.5, size*0.3, bendX*0.15 + size*0.1, size*1.0);
  ctx.strokeStyle = pal.vein;
  ctx.lineWidth = 1.2;
  ctx.stroke();

  const pairs = 6;
  for (let i = 0; i < pairs; i++) {
    const t = (i + 1) / (pairs + 1);
    const my = -size + t * size * 2.0;
    const halfW = size * (0.85 - t * 0.55);
    const curve = bendY * 0.4 * t;

    ctx.beginPath();
    ctx.moveTo(bendX * t * 0.2, my);
    ctx.quadraticCurveTo(halfW * 0.55, my + size * 0.08 + curve, halfW, my + size * 0.16 + curve);
    ctx.strokeStyle = pal.vein;
    ctx.lineWidth = 0.55 - t * 0.2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(bendX * t * 0.2, my);
    ctx.quadraticCurveTo(-halfW * 0.55, my + size * 0.08 + curve, -halfW, my + size * 0.16 + curve);
    ctx.strokeStyle = pal.vein;
    ctx.lineWidth = 0.55 - t * 0.2;
    ctx.stroke();

    if (i % 2 === 0) {
      ctx.beginPath();
      ctx.moveTo(halfW * 0.5, my + size * 0.1 + curve * 0.5);
      ctx.lineTo(halfW * 0.85, my + size * 0.05 + curve * 0.5);
      ctx.strokeStyle = pal.vein;
      ctx.lineWidth = 0.25;
      ctx.stroke();
    }
  }

  const specGrd = ctx.createRadialGradient(lx*0.25, ly*0.2, 0, lx*0.25, ly*0.2, size*0.35);
  specGrd.addColorStop(0, "rgba(255,255,255,0.22)");
  specGrd.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = specGrd;
  ctx.fill(leafPath);

  ctx.restore();
}

function makeLeaf(W: number, H: number, preplace: boolean): Leaf {
  const pal = LEAF_PALETTES[Math.floor(Math.random() * LEAF_PALETTES.length)];
  const size = 18 + Math.random() * 22;
  const x = Math.random() * W * 1.1 - W * 0.05;
  const y = preplace ? Math.random() * H : -40 - Math.random() * 150;
  const maxAlpha = 0.72 + Math.random() * 0.2;
  return {
    x, y,
    vx: (Math.random() - 0.5) * 0.9,
    vy: 0.45 + Math.random() * 0.85,
    rot: Math.random() * Math.PI * 2,
    vrot: (Math.random() - 0.5) * 0.022,
    pal, size,
    wS: 0.018 + Math.random() * 0.015,
    wA: 0.5 + Math.random() * 1.4,
    wP: Math.random() * Math.PI * 2,
    flipS: 0.012 + Math.random() * 0.01,
    flipP: Math.random() * Math.PI * 2,
    lightAngle: Math.random() * Math.PI * 2,
    bendX: (Math.random() - 0.5) * size * 0.4,
    bendY: (Math.random() - 0.5) * size * 0.3,
    delay: preplace ? 0 : Math.floor(Math.random() * 500),
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

    let W = 0, H = 0, leaves: Leaf[] = [], tick = 0, animId = 0;

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W;
      canvas!.height = H;
    }

    function init() {
      leaves = [];
      for (let i = 0; i < 12; i++) leaves.push(makeLeaf(W, H, true));
      for (let i = 0; i < 20; i++) leaves.push(makeLeaf(W, H, false));
    }

    function draw() {
      tick++;
      ctx!.clearRect(0, 0, W, H);

      leaves.forEach(l => {
        if (l.delay > 0) { l.delay--; return; }
        if (l.alpha < l.maxAlpha) l.alpha = Math.min(l.maxAlpha, l.alpha + 0.025);

        l.x += l.vx + Math.sin(tick * l.wS + l.wP) * l.wA;
        l.y += l.vy;
        l.rot += l.vrot;
        l.vy = Math.min(l.vy + 0.005, 1.8);

        if (l.y > H + 80 || l.x < -150 || l.x > W + 150) { l.dead = true; return; }

        const flip = Math.cos(tick * l.flipS + l.flipP);
        const tilt = Math.sin(tick * l.flipS + l.flipP) * 0.18;

        ctx!.save();
        ctx!.translate(l.x, l.y);
        ctx!.rotate(l.rot);
        ctx!.transform(flip, tilt, 0, 1, 0, 0);
        ctx!.globalAlpha = l.alpha;
        drawRealistic3DLeaf(ctx!, l.pal, l.size, l.bendX, l.bendY, l.lightAngle + tick * 0.005);
        ctx!.restore();
      });

      leaves = leaves.filter(l => !l.dead);
      if (leaves.length < 28) leaves.push(makeLeaf(W, H, false));

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
