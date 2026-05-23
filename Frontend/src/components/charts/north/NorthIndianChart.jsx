"use client";
// Planet colors
const planetColors = {
    Sun: "#F59E0B",
    Moon: "#60A5FA",
    Mars: "#EF4444",
    Mercury: "#10B981",
    Jupiter: "#8B5CF6",
    Venus: "#EC4899",
    Saturn: "#64748B",
    Rahu: "#7C3AED",
    Ketu: "#6366F1",
};
// Default planets for demo
const defaultPlanets = [
    { name: "Rahu", house: 1, abbreviation: "Ra" },
    { name: "Sun", house: 2, abbreviation: "Su" },
    { name: "Mercury", house: 3, abbreviation: "Me" },
    { name: "Venus", house: 3, abbreviation: "Ve" },
    { name: "Saturn", house: 4, abbreviation: "Sa" },
    { name: "Mars", house: 5, abbreviation: "Ma" },
    { name: "Ketu", house: 7, abbreviation: "Ke" },
    { name: "Jupiter", house: 9, abbreviation: "Ju" },
    { name: "Moon", house: 11, abbreviation: "Mo" },
];
export function NorthIndianChart({ planets = defaultPlanets, chartType = "D1" }) {
    // Group planets by house
    const planetsByHouse = planets.reduce((acc, planet) => {
        if (!acc[planet.house])
            acc[planet.house] = [];
        acc[planet.house].push(planet);
        return acc;
    }, {});
    // House positions (centers for diamond layout)
    const housePositions = {
        1: { x: 250, y: 100 }, // Top center
        2: { x: 385, y: 135 }, // Top right corner
        3: { x: 415, y: 250 }, // Right center (corner)
        4: { x: 385, y: 365 }, // Bottom right corner
        5: { x: 250, y: 400 }, // Bottom center
        6: { x: 115, y: 365 }, // Bottom left corner
        7: { x: 85, y: 250 }, // Left center (corner)
        8: { x: 115, y: 135 }, // Top left corner
        9: { x: 185, y: 185 }, // Center left diamond
        10: { x: 315, y: 185 }, // Center right diamond
        11: { x: 315, y: 315 }, // Center bottom diamond
        12: { x: 185, y: 315 }, // Center top diamond
    };
    return (<div className="flex items-center justify-center w-full">
      <svg viewBox="0 0 500 500" className="w-full max-w-[520px] h-auto">
        {/* Outer border */}
        <rect x="20" y="20" width="460" height="460" fill="none" stroke="#D4AF37" strokeWidth="3" rx="12"/>

        {/* Inner border */}
        <rect x="40" y="40" width="420" height="420" fill="none" stroke="#FCD34D" strokeWidth="1.5" opacity="0.3" rx="10"/>

        {/* Center point */}
        <circle cx="250" cy="250" r="6" fill="#D4AF37" opacity="0.5"/>
        <circle cx="250" cy="250" r="3" fill="#B8860B"/>

        {/* North Indian Diamond Layout - 12 Houses */}
        
        {/* House 1 - Top Center */}
        <path d="M 250 40 L 315 185 L 185 185 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[1].x} y={housePositions[1].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          1
        </text>
        {planetsByHouse[1]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[1].x} y={housePositions[1].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 2 - Top Right Corner */}
        <path d="M 315 185 L 460 40 L 460 185 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[2].x} y={housePositions[2].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          2
        </text>
        {planetsByHouse[2]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[2].x} y={housePositions[2].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 3 - Right Center Corner */}
        <path d="M 460 185 L 460 315 L 415 250 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[3].x} y={housePositions[3].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          3
        </text>
        {planetsByHouse[3]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[3].x} y={housePositions[3].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 4 - Bottom Right Corner */}
        <path d="M 415 250 L 460 315 L 315 365 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[4].x} y={housePositions[4].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          4
        </text>
        {planetsByHouse[4]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[4].x} y={housePositions[4].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 5 - Bottom Center */}
        <path d="M 315 365 L 250 460 L 185 365 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[5].x} y={housePositions[5].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          5
        </text>
        {planetsByHouse[5]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[5].x} y={housePositions[5].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 6 - Bottom Left Corner */}
        <path d="M 185 365 L 40 315 L 115 365 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[6].x} y={housePositions[6].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          6
        </text>
        {planetsByHouse[6]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[6].x} y={housePositions[6].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 7 - Left Center Corner */}
        <path d="M 85 250 L 40 315 L 40 185 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[7].x} y={housePositions[7].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          7
        </text>
        {planetsByHouse[7]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[7].x} y={housePositions[7].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 8 - Top Left Corner */}
        <path d="M 115 135 L 40 185 L 40 40 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[8].x} y={housePositions[8].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          8
        </text>
        {planetsByHouse[8]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[8].x} y={housePositions[8].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 9 - Center Left Diamond */}
        <path d="M 185 185 L 185 315 L 250 250 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[9].x} y={housePositions[9].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          9
        </text>
        {planetsByHouse[9]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[9].x} y={housePositions[9].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 10 - Center Right Diamond */}
        <path d="M 315 185 L 250 250 L 315 315 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[10].x} y={housePositions[10].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          10
        </text>
        {planetsByHouse[10]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[10].x} y={housePositions[10].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 11 - Center Bottom Diamond */}
        <path d="M 185 315 L 250 250 L 315 315 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[11].x} y={housePositions[11].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          11
        </text>
        {planetsByHouse[11]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[11].x} y={housePositions[11].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* House 12 - Center Top Diamond */}
        <path d="M 185 185 L 250 250 L 315 185 Z" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.5" className="transition-opacity hover:opacity-90"/>
        <text x={housePositions[12].x} y={housePositions[12].y} textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          12
        </text>
        {planetsByHouse[12]?.map((planet, idx) => (<text key={`${planet.name}-${idx}`} x={housePositions[12].x} y={housePositions[12].y + 20 + idx * 15} textAnchor="middle" fill={planetColors[planet.name] || "#64748B"} fontSize="11" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            {planet.abbreviation}
          </text>))}

        {/* Subtle grid lines */}
        <line x1="250" y1="40" x2="250" y2="460" stroke="#FCD34D" strokeWidth="1" opacity="0.1"/>
        <line x1="40" y1="250" x2="460" y2="250" stroke="#FCD34D" strokeWidth="1" opacity="0.1"/>

        {/* Chart type label */}
        <text x="250" y="260" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" opacity="0.7">
          {chartType}
        </text>
      </svg>
    </div>);
}
