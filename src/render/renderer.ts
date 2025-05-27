// src/rendering/renderer.ts
import { Planet } from "../core/main";
import { FacilityType } from "../core/main";

const CELL_SIZE = 15; // Pixels per grid cell
const COLORS: Partial<Record<FacilityType, string>> = {
  [FacilityType.PowerPlant]: "#ff5555",      // Red
  [FacilityType.LuxuryResidential]: "#55ff55", // Green
  [FacilityType.Factory]: "#5555ff",        // Blue
  // Add colors for all FacilityTypes
};

export function render(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw grid lines
  ctx.strokeStyle = "#333";
  for (let y = 0; y < 50; y++) {
    for (let x = 0; x < 50; x++) {
      ctx.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }

  // Draw facilities
  Planet.grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell?.facilityType) { // Check if it's a Facility
        ctx.fillStyle = COLORS[cell.facilityType] || "#999";
        ctx.fillRect(
          x * CELL_SIZE + 1, 
          y * CELL_SIZE + 1, 
          CELL_SIZE - 2, 
          CELL_SIZE - 2
        );
      }
    });
  });
}

// Debug hover tooltip
export function setupHoverDebug(canvas: HTMLCanvasElement, debugDiv: HTMLElement) {
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / CELL_SIZE);
    const y = Math.floor((e.clientY - rect.top) / CELL_SIZE);
    
    const cell = Planet.grid[y]?.[x];
    debugDiv.textContent = cell 
      ? `(${x},${y}) ${cell.facilityType}` 
      : `(${x},${y}) Empty`;
  });
}