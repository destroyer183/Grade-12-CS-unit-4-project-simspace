// src/rendering/renderer.ts
import { Planet } from "../../core/main";
import { FacilityType } from "../../core/dataTypes";
const CELL_SIZE = 15; // Pixels per grid cell
const COLORS = {
    [FacilityType.PowerPlant]: "#ff5555", // Red
    [FacilityType.LuxuryResidential]: "#55ff55", // Green
    [FacilityType.Factory]: "#5555ff", // Blue
    // Add colors for all FacilityTypes
};
export function render(canvas) {
    const ctx = canvas.getContext('2d');
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
            if (cell === null || cell === void 0 ? void 0 : cell.FacilityType) { // Check if it's a Facility
                ctx.fillStyle = COLORS[cell.FacilityType] || "#999";
                ctx.fillRect(x * CELL_SIZE + 1, y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
            }
        });
    });
}
// Debug hover tooltip
export function setupHoverDebug(canvas, debugDiv) {
    canvas.addEventListener('mousemove', (e) => {
        var _a;
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / CELL_SIZE);
        const y = Math.floor((e.clientY - rect.top) / CELL_SIZE);
        const cell = (_a = Planet.grid[y]) === null || _a === void 0 ? void 0 : _a[x];
        debugDiv.textContent = cell
            ? `(${x},${y}) ${cell.FacilityType}`
            : `(${x},${y}) Empty`;
    });
}
//# sourceMappingURL=renderer.js.map