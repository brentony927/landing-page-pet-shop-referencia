/** Retorna se o pet shop está aberto agora baseado no horário de funcionamento */
export function useOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0=Dom, 6=Sáb
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour + min / 60;

  // Seg-Sex 8h-19h, Sáb 8h-16h, Dom fechado
  if (day === 0) return { isOpen: false, label: "Fechado agora", nextOpen: "Abre segunda às 8h" };
  if (day === 6) {
    if (time >= 8 && time < 16) return { isOpen: true, label: "Aberto agora", closes: "Fecha às 16h" };
    return { isOpen: false, label: "Fechado agora", nextOpen: time < 8 ? "Abre às 8h" : "Abre segunda às 8h" };
  }
  // Seg-Sex
  if (time >= 8 && time < 19) return { isOpen: true, label: "Aberto agora", closes: "Fecha às 19h" };
  return { isOpen: false, label: "Fechado agora", nextOpen: time < 8 ? "Abre às 8h" : "Abre amanhã às 8h" };
}
