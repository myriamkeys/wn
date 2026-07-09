const pageArt = (page, y, x = 28, size = 188) => ({
  src: `./assets/pages/page-${String(page).padStart(2, "0")}.png`,
  position: `${x}% ${y}%`,
  size: `${size}%`,
});

const ratingMap = {
  "Finca Resalso": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Finca%20Resalso" },
  "Pepe Yllera": { score: 3.9, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Pepe%20Yllera" },
  "Pruno": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Pruno" },
  "Cillar de Silos": { score: 3.9, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Cillar%20de%20Silos" },
  "Acontia Flor y Nata": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Acontia%20Flor%20y%20Nata" },
  "Protos": { score: 3.9, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Protos" },
  "Vizcarra": { score: 4.0, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Vizcarra" },
  "Cepa 21": { score: 4.0, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Cepa%2021" },
  "Jesus Yllera": { score: 3.9, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Jesus%20Yllera" },
  "Vicenta Mater": { score: 3.9, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Vicenta%20Mater" },
  "Matarromera": { score: 4.0, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Matarromera" },
  "Emilio Moro": { score: 4.0, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Emilio%20Moro" },
  "Pago de los Capellanes": { score: 4.2, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Pago%20de%20los%20Capellanes" },
  "Bosque de Matasnos": { score: 4.1, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Bosque%20de%20Matasnos" },
  "Valduero Una Cepa": { score: 4.1, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Valduero%20Una%20Cepa" },
  "Malleolus": { score: 4.3, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Malleolus" },
  "PSI": { score: 4.2, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=PSI" },
  "Pago de Carraovejas": { score: 4.3, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Pago%20de%20Carraovejas" },
  "Tomás Postigo": { score: 4.2, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Tom%C3%A1s%20Postigo" },
  "Mauro": { score: 4.3, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Mauro" },
  "Hacienda Monasterio": { score: 4.3, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Hacienda%20Monasterio" },
  "Bosque de Matasnos E.L.": { score: 4.2, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Bosque%20de%20Matasnos%20E.L." },
  "La Oficina": { score: 4.1, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=La%20Oficina" },
  "Milsetenyseis": { score: 4.2, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Milsetenyseis" },
  "Mauro VS": { score: 4.4, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Mauro%20VS" },
  "Celia": { score: 4.3, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Celia" },
  "Inés": { score: 4.2, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=In%C3%A9s" },
  "El Añejon": { score: 4.4, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=El%20A%C3%B1ejon" },
  "Alion": { score: 4.5, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Alion" },
  "Flor de Pingus": { score: 4.5, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Flor%20de%20Pingus" },
  "Cuesta de las Liebres": { score: 4.4, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Cuesta%20de%20las%20Liebres" },
  "Valbuena Nº5": { score: 4.6, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Valbuena%20N%C2%BA5" },
  "Acontia 365": { score: 3.7, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Acontia%20365" },
  "San Román": { score: 4.2, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=San%20Rom%C3%A1n" },
  "Vatan": { score: 4.3, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Vatan" },
  "Lan Rioja": { score: 3.6, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Lan%20Rioja" },
  "Marqués de Cáceres": { score: 3.5, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Marqu%C3%A9s%20de%20C%C3%A1ceres" },
  "Ramón Bilbao": { score: 3.6, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Ram%C3%B3n%20Bilbao" },
  "Viuda Negra Crianza": { score: 3.7, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Viuda%20Negra%20Crianza" },
  "Paco Garcia Crianza": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Paco%20Garcia%20Crianza" },
  "Andén de la Estación (Muga)": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=And%C3%A9n%20de%20la%20Estaci%C3%B3n%20%28Muga%29" },
  "CM de Matarromera": { score: 3.7, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=CM%20de%20Matarromera" },
  "Viuda Negra Nunca Jamás": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Viuda%20Negra%20Nunca%20Jam%C3%A1s" },
  "Muga": { score: 4.0, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Muga" },
  "Paco García La Villa": { score: 4.0, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Paco%20Garc%C3%ADa%20La%20Villa" },
  "Lan Reserva": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Lan%20Reserva" },
  "Marqués de Murrieta": { score: 4.1, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Marqu%C3%A9s%20de%20Murrieta" },
  "Marqués de Riscal": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Marqu%C3%A9s%20de%20Riscal" },
  "Marques de Riscal": { score: 3.6, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Marques%20de%20Riscal" },
  "Marques de Riscal Sauvignon Blanc": { score: 3.7, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Marques%20de%20Riscal%20Sauvignon%20Blanc" },
  "Barbadillo": { score: 3.5, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Barbadillo" },
  "Viñasol": { score: 3.4, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Vi%C3%B1asol" },
  "Yllera 5.5": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Yllera%205.5" },
  "Cuñas Davia": { score: 3.9, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Cu%C3%B1as%20Davia" },
  "Chan de Rosas": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Chan%20de%20Rosas" },
  "Mar de Frades": { score: 4.0, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Mar%20de%20Frades" },
  "Pazos de Rubianes": { score: 4.0, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Pazos%20de%20Rubianes" },
  "Avancia": { score: 4.1, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Avancia" },
  "O'Luar do Sil": { score: 3.9, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=O%27Luar%20do%20Sil" },
  "NOC": { score: 3.7, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=NOC" },
  "Peñascal": { score: 3.4, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Pe%C3%B1ascal" },
  "Mateus": { score: 3.5, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Mateus" },
  "Lambrusco": { score: 3.6, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Lambrusco" },
  "Sierra Cantabria": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Sierra%20Cantabria" },
  "Unzu": { score: 3.8, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Unzu" },
  "Roger de Flor": { score: 3.4, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Roger%20de%20Flor" },
  "Louis Perdrier": { score: 3.6, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Louis%20Perdrier" },
  "Louis Perdier Rose": { score: 3.6, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Louis%20Perdier%20Rose" },
  "Möet & Chandon Brut Impérial": { score: 4.1, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=M%C3%B6et%20%26%20Chandon%20Brut%20Imp%C3%A9rial" },
  "Möet & Chandon Rosé": { score: 4.2, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=M%C3%B6et%20%26%20Chandon%20Ros%C3%A9" },
  "Dom Pérignon": { score: 4.6, scale: 5, source: "Vivino", sourceUrl: "https://www.vivino.com/search/wines?q=Dom%20P%C3%A9rignon" },
};

const splitVarieties = (value) =>
  value
    .replaceAll(" y ", ", ")
    .replaceAll(" - ", ", ")
    .replaceAll(".", ",")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const priceBand = (price) => {
  if (price <= 25) return "Hasta 25 €";
  if (price <= 50) return "26 € - 50 €";
  if (price <= 100) return "51 € - 100 €";
  return "Más de 100 €";
};

let nextId = 1;

const buildSection = ({ family, zone, section, page, positions, entries, x, size }) =>
  entries.map(([name, variety, price], index) => ({
    id: nextId++,
    name,
    family,
    zone,
    section,
    variety,
    price,
    priceBand: priceBand(price),
    art: pageArt(page, positions[index], x, size),
    filters: {
      family,
      denomination: zone,
      priceBand: priceBand(price),
      varieties: splitVarieties(variety),
    },
  }));

const wines = [
  ...buildSection({
    family: "Tinto",
    zone: "Ribera del Duero",
    section: "Ribera del Duero",
    page: 1,
    positions: [18, 31, 44, 57, 69, 81, 93],
    entries: [
      ["Finca Resalso", "Tempranillo", 22],
      ["Pepe Yllera", "Tempranillo, Cabernet Sauvignon", 22],
      ["Pruno", "Tempranillo, Cabernet Sauvignon", 24],
      ["Cillar de Silos", "Tempranillo", 27],
      ["Acontia Flor y Nata", "Tempranillo", 28],
      ["Protos", "Tempranillo, Cabernet Sauvignon y Merlot", 30],
      ["Vizcarra", "Tempranillo", 30],
    ],
  }),
  ...buildSection({
    family: "Tinto",
    zone: "Ribera del Duero",
    section: "Ribera del Duero",
    page: 2,
    positions: [18, 30, 42, 54, 66, 78, 90],
    entries: [
      ["Cepa 21", "Tempranillo", 33],
      ["Jesus Yllera", "Tempranillo", 35],
      ["Vicenta Mater", "Tempranillo", 35],
      ["Matarromera", "Tempranillo", 38],
      ["Emilio Moro", "Tempranillo, Cabernet Sauvignon", 38],
      ["Pago de los Capellanes", "Tempranillo", 40],
      ["Bosque de Matasnos", "Tempranillo", 45],
    ],
  }),
  ...buildSection({
    family: "Tinto",
    zone: "Ribera del Duero",
    section: "Ribera del Duero",
    page: 3,
    positions: [18, 30, 42, 54, 66, 78, 90],
    entries: [
      ["Valduero Una Cepa", "Tempranillo", 48],
      ["Malleolus", "Tempranillo", 50],
      ["PSI", "Tempranillo", 55],
      ["Pago de Carraovejas", "Tempranillo, Cabernet Sauvignon, Merlot", 55],
      ["Tomás Postigo", "Tempranillo", 55],
      ["Mauro", "Tempranillo, Cabernet Sauvignon", 55],
      ["Hacienda Monasterio", "Tempranillo, Cabernet Sauvignon, Merlot", 60],
    ],
  }),
  ...buildSection({
    family: "Tinto",
    zone: "Ribera del Duero",
    section: "Ribera del Duero",
    page: 4,
    positions: [18, 30, 42, 54, 66, 78, 90],
    entries: [
      ["Bosque de Matasnos E.L.", "Tempranillo", 70],
      ["La Oficina", "Tempranillo", 75],
      ["Milsetenyseis", "Tempranillo", 80],
      ["Mauro VS", "Tempranillo, Cabernet Sauvignon", 85],
      ["Celia", "Tempranillo", 85],
      ["Inés", "Tempranillo", 85],
      ["El Añejon", "Tempranillo", 105],
    ],
  }),
  ...buildSection({
    family: "Tinto",
    zone: "Ribera del Duero",
    section: "Ribera del Duero",
    page: 5,
    positions: [14, 27, 40, 53],
    entries: [
      ["Alion", "Tempranillo", 120],
      ["Flor de Pingus", "Tempranillo", 170],
      ["Cuesta de las Liebres", "Tempranillo, Cabernet Sauvignon", 180],
      ["Valbuena Nº5", "Tempranillo, Cabernet Sauvignon", 190],
    ],
  }),
  ...buildSection({
    family: "Tinto",
    zone: "Toro",
    section: "Tinta de Toro",
    page: 5,
    positions: [71, 83, 94],
    entries: [
      ["Acontia 365", "Garnacha Tinta", 20],
      ["San Román", "Tinta de Toro", 45],
      ["Vatan", "Tinta de Toro", 50],
    ],
  }),
  ...buildSection({
    family: "Tinto",
    zone: "Rioja",
    section: "Rioja",
    page: 6,
    positions: [19, 35, 50, 65, 80, 94],
    entries: [
      ["Lan Rioja", "Tempranillo, Mazuelo, Graciano", 20],
      ["Marqués de Cáceres", "Tempranillo, Garnacha, Graciano", 20],
      ["Ramón Bilbao", "Tempranillo, Mazuelo, Graciano", 20],
      ["Viuda Negra Crianza", "Tempranillo", 20],
      ["Paco Garcia Crianza", "Tempranillo", 22],
      ["Andén de la Estación (Muga)", "Tempranillo", 22],
    ],
  }),
  ...buildSection({
    family: "Tinto",
    zone: "Rioja",
    section: "Rioja",
    page: 7,
    positions: [16, 30, 43, 56],
    entries: [
      ["CM de Matarromera", "Tempranillo", 22],
      ["Viuda Negra Nunca Jamás", "Tempranillo", 25],
      ["Muga", "Tempranillo, Garnacha, Mazuelo, Graciano", 30],
      ["Paco García La Villa", "Tempranillo, Mazuelo", 50],
    ],
  }),
  ...buildSection({
    family: "Tinto",
    zone: "Rioja",
    section: "Reserva",
    page: 7,
    positions: [73, 84, 95],
    entries: [
      ["Lan Reserva", "Tempranillo, Mazuelo, Graciano", 24],
      ["Marqués de Murrieta", "Tempranillo, Garnacha, Mazuelo, Graciano", 38],
      ["Marqués de Riscal", "Tempranillo, Cabernet Sauvignon, Malvasía", 30],
    ],
  }),
  ...buildSection({
    family: "Blanco",
    zone: "Rueda",
    section: "Blancos",
    page: 8,
    positions: [18, 33, 48, 63, 82],
    x: 27,
    size: 185,
    entries: [
      ["Marques de Riscal", "Verdejo", 22],
      ["Marques de Riscal Sauvignon Blanc", "Sauvignon Blanc", 25],
      ["Barbadillo", "Palomino Fino", 18],
      ["Viñasol", "Macabeo, Airén", 18],
      ["Yllera 5.5", "Verdejo, Sauvignon Blanc", 18],
    ],
  }),
  ...buildSection({
    family: "Blanco",
    zone: "Ribeiro",
    section: "Ribeiro",
    page: 9,
    positions: [20],
    x: 27,
    size: 185,
    entries: [["Cuñas Davia", "No indicada en la carta", 30]],
  }),
  ...buildSection({
    family: "Blanco",
    zone: "Rías Baixas",
    section: "Albariño",
    page: 9,
    positions: [38, 55, 71],
    x: 27,
    size: 185,
    entries: [
      ["Chan de Rosas", "Albariño", 25],
      ["Mar de Frades", "Albariño", 28],
      ["Pazos de Rubianes", "Albariño", 30],
    ],
  }),
  ...buildSection({
    family: "Blanco",
    zone: "Valdeorras",
    section: "Godello",
    page: 10,
    positions: [19, 37],
    x: 27,
    size: 185,
    entries: [
      ["Avancia", "Godello", 50],
      ["O'Luar do Sil", "Godello", 25],
    ],
  }),
  ...buildSection({
    family: "Blanco",
    zone: "Tierras de Castilla",
    section: "Chardonnay",
    page: 10,
    positions: [58],
    x: 27,
    size: 185,
    entries: [["NOC", "Chardonnay", 22]],
  }),
  ...buildSection({
    family: "Rosado",
    zone: "Vinho Regional (Portugal)",
    section: "Rosados",
    page: 11,
    positions: [17, 49],
    size: 190,
    entries: [
      ["Peñascal", "Garnacha", 18],
      ["Mateus", "Baga, Tinta Roriz y otras variedades", 18],
    ],
  }),
  ...buildSection({
    family: "Rosado",
    zone: "Emilia-Romagna (Italia)",
    section: "Rosados",
    page: 11,
    positions: [33],
    size: 190,
    entries: [["Lambrusco", "Variedad autoctotona italiana", 18]],
  }),
  ...buildSection({
    family: "Rosado",
    zone: "Rioja",
    section: "Rosados",
    page: 11,
    positions: [66, 83],
    size: 190,
    entries: [
      ["Sierra Cantabria", "Tempranillo", 25],
      ["Unzu", "Tempranillo (variedad predominante)", 28],
    ],
  }),
  ...buildSection({
    family: "Cava",
    zone: "España",
    section: "Cavas",
    page: 12,
    positions: [18, 32, 46],
    x: 27,
    size: 190,
    entries: [
      ["Roger de Flor", "Macabeo, Xarel-lo, Parellada", 22],
      ["Louis Perdrier", "Chardonnay, Pinot Noir, Pinot Blanc", 25],
      ["Louis Perdier Rose", "Pinot Noir, Syrah, Cynsalt", 25],
    ],
  }),
  ...buildSection({
    family: "Champagne",
    zone: "Champagne",
    section: "Champagnes",
    page: 12,
    positions: [65, 79, 93],
    x: 27,
    size: 190,
    entries: [
      ["Möet & Chandon Brut Impérial", "Pinot Noir, Pinot Meunier, Chardonnay", 80],
      ["Möet & Chandon Rosé", "Pinot Noir, Pinot Meunier, Chardonnay", 90],
      ["Dom Pérignon", "Pinot Noir, Chardonnay", 340],
    ],
  }),
];

const translations = {
  es: {
    pageTitle: "Selección de Vinos",
    heroVenue: "Vinoteca Restaurante Alfredo",
    heroTitle: "Vinos con <span>alma</span>",
    heroText:
      "Descubre una cuidada selección de vinos, desde grandes clásicos hasta referencias singulares. Utiliza los filtros para encontrar el vino perfecto para cada ocasión.",
    catalogLabel: "Catálogo",
    catalogHeading: "Explora la selección",
    filterHeading: "Filtros",
    openFilters: "Abrir filtros",
    emptyActiveFilters: "Sin filtros activos. Explora toda la selección.",
    filtersTitle: "Filtros",
    clearAll: "Limpiar todo",
    clearFilters: "Limpiar filtros",
    clear: "Limpiar",
    apply: "Aplicar",
    closeAria: "Cerrar",
    vintage: "Añada",
    grape: "Uva",
    body: "Cuerpo",
    serving: "Servicio",
    pairing: "Maridaje",
    price: "Precio",
    noResultsTitle: "No hay resultados con esta combinación.",
    noResultsText: "Prueba otra zona, tipo o tramo de precio para volver a abrir la carta.",
    resetFilters: "Restablecer filtros",
    notAvailable: "N/D",
    activeChip: (section, value) => `${section}: ${value}`,
  },
  en: {
    pageTitle: "Wine Selection",
    heroVenue: "Alfredo Restaurant Wine Bar",
    heroTitle: "Wines with <span>soul</span>",
    heroText:
      "A curated wine selection showcasing Spain's leading wine regions alongside a carefully chosen international representation. Use the filters to find your perfect pairing.",
    catalogLabel: "Catalog",
    catalogHeading: "Explore the selection",
    filterHeading: "Filters",
    openFilters: "Open filters",
    emptyActiveFilters: "No active filters. Explore the full selection.",
    filtersTitle: "Filters",
    clearAll: "Clear all",
    clearFilters: "Clear filters",
    clear: "Clear",
    apply: "Apply",
    closeAria: "Close",
    vintage: "Vintage",
    grape: "Grape",
    body: "Body",
    serving: "Serving",
    pairing: "Pairing",
    price: "Price",
    noResultsTitle: "No wines match this combination.",
    noResultsText: "Try a different region, style, or price band to recover results.",
    resetFilters: "Reset filters",
    notAvailable: "N/A",
    activeChip: (section, value) => `${section}: ${value}`,
  },
  fr: {
    pageTitle: "Sélection de Vins",
    heroVenue: "Vinothèque Restaurant Alfredo",
    heroTitle: "Vins avec <span>âme</span>",
    heroText:
      "Une sélection de vins parcourant les principales régions viticoles d'Espagne, complétée par une représentation internationale soigneusement choisie. Utilisez les filtres pour trouver l'accord parfait.",
    catalogLabel: "Catalogue",
    catalogHeading: "Explorer la sélection",
    filterHeading: "Filtres",
    openFilters: "Ouvrir les filtres",
    emptyActiveFilters: "Aucun filtre actif. Explorez toute la sélection.",
    filtersTitle: "Filtres",
    clearAll: "Tout effacer",
    clearFilters: "Effacer les filtres",
    clear: "Effacer",
    apply: "Appliquer",
    closeAria: "Fermer",
    vintage: "Millésime",
    grape: "Cépage",
    body: "Corps",
    serving: "Service",
    pairing: "Accord",
    price: "Prix",
    noResultsTitle: "Aucun vin ne correspond à cette combinaison.",
    noResultsText: "Essayez une autre région, un autre style ou une autre tranche de prix.",
    resetFilters: "Réinitialiser les filtres",
    notAvailable: "N/D",
    activeChip: (section, value) => `${section} : ${value}`,
  },
};

const labelMaps = {
  es: {
    family: "Tipo",
    pairing: "Maridaje",
    denomination: "Denominación",
    body: "Cuerpo",
    priceBand: "Precio",
    Tinto: "Tinto",
    Blanco: "Blanco",
    Rosado: "Rosado",
    Cava: "Cava",
    Champagne: "Champagne",
    Carne: "Carne",
    Pescado: "Pescado",
    Mariscos: "Mariscos",
    Queso: "Queso",
    Vegetariano: "Vegetariano",
    Postre: "Postre",
    "Ribera del Duero": "Ribera del Duero",
    Rioja: "Rioja",
    Rueda: "Rueda",
    "Tinta de Toro": "Tinta de Toro",
    "Reserva Rioja": "Reserva Rioja",
    "Semidulce (Frizante)": "Semidulce (Frizante)",
    Ribeiro: "Ribeiro",
    "Albariño": "Albariño",
    Godello: "Godello",
    Chardonnay: "Chardonnay",
    Ligero: "Ligero",
    Medio: "Medio",
    Corpulento: "Corpulento",
    "Hasta 25 €": "Hasta 25 €",
    "26 € - 50 €": "26 € - 50 €",
    "51 € - 100 €": "51 € - 100 €",
    "Más de 100 €": "Más de 100 €",
  },
  en: {
    family: "Type",
    pairing: "Pairing",
    denomination: "Appellation",
    body: "Body",
    priceBand: "Price",
    Tinto: "Red",
    Blanco: "White",
    Rosado: "Rosé",
    Cava: "Cava",
    Champagne: "Champagne",
    Carne: "Meat",
    Pescado: "Fish",
    Mariscos: "Seafood",
    Queso: "Cheese",
    Vegetariano: "Vegetarian",
    Postre: "Dessert",
    "Ribera del Duero": "Ribera del Duero",
    Rioja: "Rioja",
    Rueda: "Rueda",
    "Tinta de Toro": "Tinta de Toro",
    "Reserva Rioja": "Reserva Rioja",
    "Semidulce (Frizante)": "Semi-sweet frizzante",
    Ribeiro: "Ribeiro",
    "Albariño": "Albariño",
    Godello: "Godello",
    Chardonnay: "Chardonnay",
    Ligero: "Light",
    Medio: "Medium",
    Corpulento: "Full-bodied",
    "Hasta 25 €": "Up to €25",
    "26 € - 50 €": "€26 - €50",
    "51 € - 100 €": "€51 - €100",
    "Más de 100 €": "Over €100",
  },
  fr: {
    family: "Type",
    pairing: "Accord",
    denomination: "Appellation",
    body: "Corps",
    priceBand: "Prix",
    Tinto: "Rouge",
    Blanco: "Blanc",
    Rosado: "Rosé",
    Cava: "Cava",
    Champagne: "Champagne",
    Carne: "Viande",
    Pescado: "Poisson",
    Mariscos: "Fruits de mer",
    Queso: "Fromage",
    Vegetariano: "Végétarien",
    Postre: "Dessert",
    "Ribera del Duero": "Ribera del Duero",
    Rioja: "Rioja",
    Rueda: "Rueda",
    "Tinta de Toro": "Tinta de Toro",
    "Reserva Rioja": "Reserva Rioja",
    "Semidulce (Frizante)": "Semi-doux frizzante",
    Ribeiro: "Ribeiro",
    "Albariño": "Albariño",
    Godello: "Godello",
    Chardonnay: "Chardonnay",
    Ligero: "Léger",
    Medio: "Moyen",
    Corpulento: "Corsé",
    "Hasta 25 €": "Jusqu'à 25 €",
    "26 € - 50 €": "26 € - 50 €",
    "51 € - 100 €": "51 € - 100 €",
    "Más de 100 €": "Plus de 100 €",
  },
};

const tastingTags = {
  Tinto: {
    Ligero: ["Cereza madura", "Pimienta rosa", "Hierbas secas"],
    Medio: ["Mora", "Cedro", "Vainilla tostada"],
    Corpulento: ["Ciruela negra", "Cacao", "Tabaco dulce"],
  },
  Blanco: {
    Ligero: ["Cítrico", "Manzana verde", "Flores blancas"],
    Medio: ["Pera", "Hinojo", "Piedra húmeda"],
    Corpulento: ["Fruta de hueso", "Mantequilla fina", "Avellana"],
  },
  Rosado: {
    Ligero: ["Frambuesa", "Pomelo rosa", "Pétalos de rosa"],
    Medio: ["Sandía", "Granada", "Hierbas finas"],
    Corpulento: ["Fresa madura", "Naranja sanguina", "Especias suaves"],
  },
  Cava: {
    Ligero: ["Manzana", "Brioche", "Almendra"],
    Medio: ["Limón confitado", "Pan tostado", "Pera"],
    Corpulento: ["Crema pastelera", "Fruta blanca", "Frutos secos"],
  },
  Champagne: {
    Ligero: ["Pomelo", "Tiza", "Flor blanca"],
    Medio: ["Brioche", "Cítrico", "Manzana amarilla"],
    Corpulento: ["Avellana", "Miel fina", "Fruta escarchada"],
  },
};

const localWineImageOverrides = {
  "Finca Resalso": "./assets/wines/Finca Resalso.jpg",
  "Pepe Yllera": "./assets/wines/pepe-yllera.png",
  Pruno: "./assets/wines/pruno.png",
  "Cillar de Silos": "./assets/wines/cillar.png",
  "Acontia Flor y Nata": "./assets/wines/Acontia FN.png",
  Protos: "./assets/wines/protos.png",
  Vizcarra: "./assets/wines/vizcarra.png",
  "Cepa 21": "./assets/wines/Cepa 21.png",
  "Jesus Yllera": "./assets/wines/jesus-yllera.png",
  "Vicenta Mater": "./assets/wines/vicenta mate.png",
  Matarromera: "./assets/wines/matarromera-reserva.png",
  "Emilio Moro": "./assets/wines/emilio-moro.png",
  "Pago de los Capellanes": "./assets/wines/Pago de los Capellanes.png",
  "Bosque de Matasnos": "./assets/wines/bosque-matasanos.png",
  "Valduero Una Cepa": "./assets/wines/valduero-una-cepa.png",
  Malleolus: "./assets/wines/malleolus.png",
  PSI: "./assets/wines/PSI.png",
  "Pago de Carraovejas": "./assets/wines/pago-carraovejas.png",
  "Tomás Postigo": "./assets/wines/tomas-postigo.webp",
  Mauro: "./assets/wines/mauro.png",
  "Hacienda Monasterio": "./assets/wines/hacienda-monasterio.png",
  "Bosque de Matasnos E.L.": "./assets/wines/matasnos-1.png",
  "La Oficina": "./assets/wines/La-oficina-web-removebg-preview (1).png",
  Milsetenyseis: "./assets/wines/milsetentayseis.png",
  "Mauro VS": "./assets/wines/mauro-vs.png",
  Celia: "./assets/wines/celia.png",
  "Inés": "./assets/wines/INES.png",
  "El Añejon": "./assets/wines/el-anejon.png",
  Alion: "./assets/wines/alion.png",
  "Flor de Pingus": "./assets/wines/flor-de-pingus.png",
  "Cuesta de las Liebres": "./assets/wines/cuesta-liebres.png",
  "Valbuena Nº5": "./assets/wines/bot-valbuena-5-2019-sa.png",
  "Acontia 365": "./assets/wines/Acontia 365.png",
  "San Román": "./assets/wines/san-roman.png",
  Vatan: "./assets/wines/vatan.jpg",
  "Lan Rioja": "./assets/wines/lan-crianza.png",
  "Marqués de Cáceres": "./assets/wines/marques-caceres.png",
  "Ramón Bilbao": "./assets/wines/ramon-bilbao.png",
  "Viuda Negra Crianza": "./assets/wines/viuda-negra.png",
  "Paco Garcia Crianza": "./assets/wines/Paco_Garcia_Crianza-removebg-preview.png",
  "Andén de la Estación (Muga)": "./assets/wines/muga-el-anden-de-la-estacion-removebg-preview.png",
  "CM de Matarromera": "./assets/wines/CM_Matarromera-removebg-preview (1).png",
  "Viuda Negra Nunca Jamás": "./assets/wines/Viuda Negra Nunca Jamas.png",
  Muga: "./assets/wines/muga.png",
  "Paco García La Villa": "./assets/wines/la-villa.png",
  "Lan Reserva": "./assets/wines/lan-reserva.png",
  "Marqués de Murrieta": "./assets/wines/marques-murrieta.png",
  "Marqués de Riscal": "./assets/wines/marques-riscal-reserva.png",
  "Marques de Riscal": "./assets/wines/marques-riscal-verdejo.png",
  "Marques de Riscal Sauvignon Blanc": "./assets/wines/sauvignon-blanc.png",
  Barbadillo: "./assets/wines/Barbadillo.png",
  "Viñasol": "./assets/wines/Viñasol.png",
  "Yllera 5.5": "./assets/wines/Yllera 5.5 Frizzante.png",
  "Cuñas Davia": "./assets/wines/Cuñas Davia.png",
  "Chan de Rosas": "./assets/wines/chan-de-rosas.png",
  "Mar de Frades": "./assets/wines/mar-de-frades.png",
  "Pazos de Rubianes": "./assets/wines/Pazos de Rubianes.png",
  Avancia: "./assets/wines/Avancia Godello.png",
  "O'Luar do Sil": "./assets/wines/O´luar do Sil.png",
  NOC: "./assets/wines/Noc.png",
  "Peñascal": "./assets/wines/Peñascal.png",
  Mateus: "./assets/wines/Mateus.png",
  Lambrusco: "./assets/wines/lambrusco.png",
  "Sierra Cantabria": "./assets/wines/Sierra Cantabria.png",
  Unzu: "./assets/wines/Unzu Rose-Photoroom.png",
  "Roger de Flor": "./assets/wines/Roger de Flor Brut Nature.png",
  "Louis Perdrier": "./assets/wines/louis.png",
  "Louis Perdier Rose": "./assets/wines/Louis20Perdrier20Rose-GIMP2.png",
  "Möet & Chandon Brut Impérial": "./assets/wines/Möet & Chandon Imperial Brut.png",
  "Möet & Chandon Rosé": "./assets/wines/Möet & Chandon Imperial Rose.png",
  "Dom Pérignon": "./assets/wines/Dom Perignon Vintage Brut.png",
};

const filterSections = [
  { key: "family" },
  { key: "pairing" },
  { key: "denomination" },
  { key: "body" },
  { key: "priceBand" },
];

const filterOptions = {
  family: ["Tinto", "Blanco", "Rosado", "Cava", "Champagne"],
  pairing: ["Carne", "Pescado", "Mariscos", "Queso", "Vegetariano", "Postre"],
  denomination: [
    "Ribera del Duero",
    "Rioja",
    "Rueda",
    "Tinta de Toro",
    "Reserva Rioja",
    "Semidulce (Frizante)",
    "Ribeiro",
    "Albariño",
    "Godello",
    "Chardonnay",
  ],
  body: ["Ligero", "Medio", "Corpulento"],
  priceBand: ["Hasta 25 €", "26 € - 50 €", "51 € - 100 €", "Más de 100 €"],
};

const state = {
  language: "es",
  filters: Object.fromEntries(filterSections.map((section) => [section.key, []])),
  draftFilters: Object.fromEntries(filterSections.map((section) => [section.key, []])),
  selectedWine: null,
};

const elements = {
  filterGroups: document.querySelector("[data-filter-groups]"),
  mobileFilterGroups: document.querySelector("[data-mobile-filter-groups]"),
  productGrid: document.querySelector("[data-product-grid]"),
  activeFilters: document.querySelector("[data-active-filters]"),
  clearAll: document.querySelector("[data-clear-all]"),
  mobileClearAll: document.querySelector("[data-mobile-clear-all]"),
  applyFilters: document.querySelector("[data-apply-filters]"),
  openFiltersButton: document.querySelector("[data-open-filters]"),
  mobileFilters: document.querySelector("[data-mobile-filters]"),
  modal: document.querySelector("[data-modal]"),
  modalImage: document.querySelector("[data-modal-image]"),
  modalName: document.querySelector("[data-modal-name]"),
  modalFamily: document.querySelector("[data-modal-family]"),
  modalZone: document.querySelector("[data-modal-zone]"),
    modalVariety: document.querySelector("[data-modal-variety]"),
  modalBody: document.querySelector("[data-modal-body]"),
  modalServing: document.querySelector("[data-modal-serving]"),
  modalPairing: document.querySelector("[data-modal-pairing]"),
  modalPrice: document.querySelector("[data-modal-price]"),
  modalDescription: document.querySelector("[data-modal-description]"),
  modalTags: document.querySelector("[data-modal-tags]"),
  closeModalButton: document.querySelector("[data-close-modal]"),
  closeFiltersButton: document.querySelector("[data-close-filters]"),
  languageButtons: document.querySelectorAll("[data-language-button]"),
  translatables: document.querySelectorAll("[data-i18n]"),
  htmlTranslatables: document.querySelectorAll("[data-i18n-html]"),
};

function t(key) {
  return translations[state.language][key];
}

function label(value) {
  return labelMaps[state.language][value] || value;
}

function labelForLanguage(language, value) {
  return labelMaps[language][value] || value;
}

function cloneFilters(filters) {
  return Object.fromEntries(Object.entries(filters).map(([key, value]) => [key, [...value]]));
}

function getDenomination(wine) {
  if (wine.section === "Ribera del Duero") return "Ribera del Duero";
  if (wine.section === "Rioja") return "Rioja";
  if (wine.section === "Reserva") return "Reserva Rioja";
  if (wine.section === "Tinta de Toro") return "Tinta de Toro";
  if (wine.name === "Yllera 5.5") return "Semidulce (Frizante)";
  if (wine.zone === "Rueda") return "Rueda";
  if (wine.section === "Ribeiro") return "Ribeiro";
  if (wine.section === "Albariño") return "Albariño";
  if (wine.section === "Godello") return "Godello";
  if (wine.section === "Chardonnay") return "Chardonnay";
  return "";
}

function getBody(wine) {
  if (wine.family === "Champagne") return "Medio";
  if (wine.family === "Cava") return "Ligero";
  if (wine.family === "Rosado") return wine.price >= 25 ? "Medio" : "Ligero";
  if (wine.family === "Blanco") {
    if (wine.section === "Godello" || wine.section === "Chardonnay") return "Medio";
    if (wine.name === "Yllera 5.5") return "Ligero";
    return "Ligero";
  }
  if (wine.family === "Tinto") {
    if (wine.price >= 50 || wine.section === "Tinta de Toro") return "Corpulento";
    if (wine.price >= 26) return "Medio";
    return "Ligero";
  }
  return "Medio";
}

function getPairing(wine) {
  if (wine.family === "Champagne") return ["Mariscos", "Postre"];
  if (wine.family === "Cava") return ["Mariscos", "Pescado"];
  if (wine.family === "Rosado") return ["Pescado", "Vegetariano"];
  if (wine.family === "Blanco") {
    if (wine.section === "Chardonnay") return ["Queso", "Pescado"];
    if (wine.name === "Yllera 5.5") return ["Postre", "Vegetariano"];
    return ["Pescado", "Mariscos"];
  }
  if (wine.section === "Tinta de Toro") return ["Carne", "Queso"];
  if (wine.price >= 50) return ["Carne", "Queso"];
  return ["Carne"];
}

wines.forEach((wine) => {
  wine.denomination = getDenomination(wine);
  wine.filters.denomination = wine.denomination;
  wine.body = getBody(wine);
  wine.pairing = getPairing(wine);
  wine.filters.body = wine.body;
  wine.filters.pairing = wine.pairing;
  wine.rating = ratingMap[wine.name] || null;
  wine.serving = getServing(wine);
  wine.description = getWineDescription(wine);
  wine.tags = getTastingTags(wine);
  wine.localImage = localWineImageOverrides[wine.name] || null;
});

function getServing(wine) {
  if (wine.family === "Champagne" || wine.family === "Cava") return "6 - 8°C";
  if (wine.family === "Rosado") return "8 - 10°C";
  if (wine.family === "Blanco") return wine.body === "Medio" ? "10 - 12°C" : "8 - 10°C";
  if (wine.body === "Corpulento") return "16 - 18°C";
  if (wine.body === "Medio") return "15 - 17°C";
  return "14 - 16°C";
}

function getPrimaryVariety(wine) {
  return splitVarieties(wine.variety)[0] || wine.variety;
}

function getZoneAccent(wine, language) {
  const zone = wine.denomination || wine.zone;
  const accents = {
    es: {
      "Ribera del Duero": "con pulso castellano y fruta negra nítida",
      Rioja: "de corte clásico y crianza bien integrada",
      "Reserva Rioja": "con perfil reserva, especias dulces y fondo balsámico",
      "Tinta de Toro": "intenso, profundo y de tanino amplio",
      Rueda: "expresivo, fresco y de trazo cítrico",
      Ribeiro: "delicado, floral y muy gastronómico",
      "Albariño": "salino, vibrante y atlántico",
      Godello: "serio, amplio y con textura mineral",
      Chardonnay: "redondo, cremoso y fácil de leer en copa",
    },
    en: {
      "Ribera del Duero": "with Castilian drive and clear black-fruit definition",
      Rioja: "in a classic style with integrated oak",
      "Reserva Rioja": "with reserva character, sweet spice and balsamic depth",
      "Tinta de Toro": "intense, deep and broad in tannin",
      Rueda: "expressive, fresh and citrus-led",
      Ribeiro: "delicate, floral and food-friendly",
      "Albariño": "saline, vibrant and Atlantic in feel",
      Godello: "serious, broad and mineral in texture",
      Chardonnay: "rounded, creamy and easy to read in the glass",
    },
    fr: {
      "Ribera del Duero": "avec une énergie castillane et un fruit noir net",
      Rioja: "dans un style classique à l'élevage intégré",
      "Reserva Rioja": "au profil reserva, épices douces et fond balsamique",
      "Tinta de Toro": "intense, profond et ample en tanins",
      Rueda: "expressif, frais et porté par les agrumes",
      Ribeiro: "délicat, floral et très gastronomique",
      "Albariño": "salin, vibrant et atlantique",
      Godello: "sérieux, ample et minéral en texture",
      Chardonnay: "rond, crémeux et facile à lire dans le verre",
    },
  };

  return accents[language][zone] || {
    es: "con una lectura directa del origen y la variedad",
    en: "with a direct reading of origin and variety",
    fr: "avec une lecture directe de l'origine et du cépage",
  }[language];
}

function getBodyDescriptor(wine, language) {
  const descriptors = {
    es: {
      Ligero: "paso ágil y final fresco",
      Medio: "equilibrio, amplitud y buena continuidad",
      Corpulento: "estructura marcada y final persistente",
    },
    en: {
      Ligero: "agile movement and a fresh finish",
      Medio: "balance, breadth and strong continuity",
      Corpulento: "marked structure and a persistent finish",
    },
    fr: {
      Ligero: "bouche agile et finale fraîche",
      Medio: "équilibre, ampleur et belle continuité",
      Corpulento: "structure marquée et finale persistante",
    },
  };

  return descriptors[language][wine.body];
}

function getOccasionLine(wine, language) {
  const pairing = wine.pairing[0] || "";
  const lines = {
    es: {
      Carne: "Funciona especialmente bien en mesa con carnes asadas y platos de fondo sabroso.",
      Pescado: "Brilla con pescados, cocina marina y preparaciones de trazo limpio.",
      Mariscos: "Encaja con mariscos, aperitivos fríos y cocina de perfil salino.",
      Queso: "Pide quesos curados, tablas y bocados de textura cremosa.",
      Vegetariano: "Se mueve bien con verduras asadas, arroces y cocina vegetal.",
      Postre: "Tiene recorrido para postres o para un cierre de comida más goloso.",
    },
    en: {
      Carne: "It works especially well with roasted meats and savory main courses.",
      Pescado: "It shines with fish, seafood-driven dishes and clean preparations.",
      Mariscos: "It fits shellfish, cold starters and saline-leaning cuisine.",
      Queso: "It asks for aged cheeses, boards and creamy textures.",
      Vegetariano: "It performs well with roasted vegetables, rice dishes and vegetable-led cooking.",
      Postre: "It can stretch toward dessert or a sweeter end to the meal.",
    },
    fr: {
      Carne: "Il fonctionne particulièrement bien avec les viandes rôties et les plats savoureux.",
      Pescado: "Il brille avec les poissons, la cuisine marine et les préparations nettes.",
      Mariscos: "Il convient aux fruits de mer, aux entrées froides et aux cuisines salines.",
      Queso: "Il appelle des fromages affinés, des planches et des textures crémeuses.",
      Vegetariano: "Il marche bien avec les légumes rôtis, les riz et la cuisine végétale.",
      Postre: "Il peut accompagner un dessert ou une fin de repas plus gourmande.",
    },
  };

  return lines[language][pairing] || {
    es: "Tiene un registro versátil y fácil de colocar en servicio.",
    en: "It has a versatile profile that is easy to place in service.",
    fr: "Il possède un profil polyvalent, facile à placer au service.",
  }[language];
}

function getWineDescription(wine) {
  const denomination = wine.denomination || wine.zone;
  const primaryVariety = getPrimaryVariety(wine);
  return {
    es: `Es un ${labelForLanguage("es", wine.family).toLowerCase()} de ${denomination} elaborado a partir de ${wine.variety}, con protagonismo de ${primaryVariety} y un perfil ${labelForLanguage("es", wine.body).toLowerCase()}, ${getZoneAccent(wine, "es")}. En boca ofrece ${getBodyDescriptor(wine, "es")}. ${getOccasionLine(wine, "es")}`,
    en: `It is a ${labelForLanguage("en", wine.family).toLowerCase()} from ${denomination} built from ${wine.variety}, led by ${primaryVariety} and showing a ${labelForLanguage("en", wine.body).toLowerCase()} profile, ${getZoneAccent(wine, "en")}. On the palate it brings ${getBodyDescriptor(wine, "en")}. ${getOccasionLine(wine, "en")}`,
    fr: `C'est un ${labelForLanguage("fr", wine.family).toLowerCase()} de ${denomination} issu de ${wine.variety}, dominé par ${primaryVariety} et au profil ${labelForLanguage("fr", wine.body).toLowerCase()}, ${getZoneAccent(wine, "fr")}. En bouche, il offre ${getBodyDescriptor(wine, "fr")}. ${getOccasionLine(wine, "fr")}`,
  };
}

function getTastingTags(wine) {
  const varietyNotes = [
    ["Tempranillo", ["Cereza madura", "Cedro", "Vainilla tostada"]],
    ["Cabernet Sauvignon", ["Cassis", "Tabaco", "Pimienta negra"]],
    ["Merlot", ["Ciruela", "Cacao", "Balsámico"]],
    ["Garnacha", ["Frambuesa", "Hierbas secas", "Pimienta rosa"]],
    ["Graciano", ["Mora", "Clavo", "Hoja de laurel"]],
    ["Mazuelo", ["Fruta negra", "Regaliz", "Tierra húmeda"]],
    ["Albariño", ["Lima", "Sal marina", "Flor blanca"]],
    ["Godello", ["Pera", "Hinojo", "Piedra húmeda"]],
    ["Verdejo", ["Hinojo", "Pomelo", "Manzana verde"]],
    ["Sauvignon Blanc", ["Boj", "Cítrico", "Fruta tropical"]],
    ["Chardonnay", ["Melocotón", "Mantequilla fina", "Avellana"]],
    ["Macabeo", ["Manzana amarilla", "Flor seca", "Almendra"]],
    ["Xarel-lo", ["Hinojo", "Corteza de limón", "Tiza"]],
    ["Parellada", ["Pera", "Flor blanca", "Hierba fresca"]],
    ["Palomino Fino", ["Camomila", "Almendra", "Salinidad"]],
    ["Pinot Noir", ["Fresa silvestre", "Granada", "Especias dulces"]],
    ["Pinot Meunier", ["Fruta roja", "Pan brioche", "Toque ahumado"]],
    ["Pinot Blanc", ["Pera", "Manzana", "Flor de acacia"]],
    ["Baga", ["Arándano", "Hoja seca", "Té negro"]],
  ];

  for (const [needle, notes] of varietyNotes) {
    if (wine.variety.includes(needle)) {
      return notes;
    }
  }

  return tastingTags[wine.family]?.[wine.body] || ["Cereza madura", "Cedro", "Vainilla tostada"];
}

function getFilteredWines() {
  return wines.filter((wine) =>
    filterSections.every((section) => {
      const selected = state.filters[section.key];
      if (!selected.length) return true;
      const current = wine.filters[section.key];
      if (Array.isArray(current)) {
        return selected.some((item) => current.includes(item));
      }
      if (!current) return false;
      return selected.includes(current);
    })
  );
}

function toggleDesktopFilter(sectionKey, value) {
  const values = state.filters[sectionKey];
  state.filters[sectionKey] = values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
  render();
}

function clearSection(sectionKey) {
  state.filters[sectionKey] = [];
  render();
}

function toggleDraftFilter(sectionKey, value) {
  const values = state.draftFilters[sectionKey];
  state.draftFilters[sectionKey] = values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
  renderMobileFilters();
}

function clearDraftSection(sectionKey) {
  state.draftFilters[sectionKey] = [];
  renderMobileFilters();
}

function clearAllFilters() {
  filterSections.forEach((section) => {
    state.filters[section.key] = [];
  });
  render();
}

function clearAllDraftFilters() {
  filterSections.forEach((section) => {
    state.draftFilters[section.key] = [];
  });
  renderMobileFilters();
}

function getActiveFilters() {
  return filterSections.flatMap((section) =>
    state.filters[section.key].map((value) => ({
      key: section.key,
      label: label(section.key),
      value,
    }))
  );
}

function renderFilters(target, filters, handlers) {
  target.innerHTML = "";
  filterSections.forEach((section) => {
    const group = document.createElement("section");
    group.className = "filter-group";

    const titleRow = document.createElement("div");
    titleRow.className = "filter-group__title";

    const title = document.createElement("h3");
    title.textContent = label(section.key);

    const clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.className = "text-button";
    clearButton.textContent = t("clear");
    clearButton.hidden = filters[section.key].length === 0;
    clearButton.addEventListener("click", () => handlers.clearSection(section.key));

    titleRow.append(title, clearButton);

    const options = document.createElement("div");
    options.className = "filter-options";

    filterOptions[section.key].forEach((option) => {
      const selected = filters[section.key].includes(option);
      const optionLabel = document.createElement("label");
      optionLabel.className = `filter-option ${selected ? "is-selected" : ""}`;

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = selected;
      input.addEventListener("change", () => handlers.toggle(section.key, option));

      const span = document.createElement("span");
      span.textContent = label(option);

      optionLabel.append(input, span);
      options.appendChild(optionLabel);
    });

    group.append(titleRow, options);
    target.appendChild(group);
  });
}

function renderStaticTranslations() {
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  elements.closeModalButton.setAttribute("aria-label", t("closeAria"));
  elements.closeFiltersButton.setAttribute("aria-label", t("closeAria"));

  elements.translatables.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  elements.htmlTranslatables.forEach((node) => {
    const key = node.dataset.i18nHtml;
    node.innerHTML = t(key);
  });

  elements.languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === state.language);
  });
}

function renderActiveFilters() {
  const filters = getActiveFilters();
  elements.activeFilters.innerHTML = "";

  if (!filters.length) {
    const empty = document.createElement("p");
    empty.className = "active-filters__empty";
    empty.textContent = t("emptyActiveFilters");
    elements.activeFilters.appendChild(empty);
    return;
  }

  filters.forEach((filter) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "active-filter-chip";
    chip.textContent = t("activeChip")(filter.label, label(filter.value));
    chip.addEventListener("click", () => toggleDesktopFilter(filter.key, filter.value));
    elements.activeFilters.appendChild(chip);
  });

  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.className = "clear-filters-button";
  clearButton.textContent = t("clearFilters");
  clearButton.addEventListener("click", clearAllFilters);
  elements.activeFilters.appendChild(clearButton);
}

function cardImageStyle(wine) {
  if (wine.localImage) {
    return `background-image: url('${wine.localImage}'); background-position: center center; background-size: contain; background-repeat: no-repeat; background-color: rgba(225, 211, 164, 0.78);`;
  }
  return `background-image: url('${wine.art.src}'); background-position: ${wine.art.position}; background-size: ${wine.art.size};`;
}

function formatRating(wine) {
  if (!wine.rating) return "s/d";
  return `${wine.rating.score}/${wine.rating.scale}`;
}

function renderWines() {
  const filtered = getFilteredWines();
  elements.productGrid.innerHTML = "";
  elements.clearAll.hidden = getActiveFilters().length === 0;

  if (!filtered.length) {
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = `
      <h3>${t("noResultsTitle")}</h3>
      <p>${t("noResultsText")}</p>
      <button type="button" class="primary-button">${t("resetFilters")}</button>
    `;
    empty.querySelector("button").addEventListener("click", clearAllFilters);
    elements.productGrid.appendChild(empty);
    return;
  }

  filtered.forEach((wine) => {
    const card = document.createElement("article");
    card.className = "wine-card";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "wine-card__button";
    button.addEventListener("click", () => openModal(wine));

    button.innerHTML = `
      <div class="wine-card__image wine-card__image--reference" style="${cardImageStyle(wine)}"></div>
      <div class="wine-card__content">
        <div class="wine-card__meta">
          <span>${label(wine.family)}</span>
          <span>${label(wine.denomination || wine.zone)}</span>
        </div>
        <h3>${wine.name}</h3>
        <p>${wine.variety}</p>
        <div class="wine-card__footer">
          <span>${wine.price} €</span>
          <span>${formatRating(wine)}</span>
        </div>
      </div>
    `;

    card.appendChild(button);
    elements.productGrid.appendChild(card);
  });
}

function openModal(wine) {
  state.selectedWine = wine;
  elements.modalImage.style.cssText = `${cardImageStyle(wine)} min-height: 360px;`;
  elements.modalFamily.textContent = label(wine.family);
  elements.modalName.textContent = wine.name;
  elements.modalZone.textContent = label(wine.denomination || wine.zone);
    elements.modalVariety.textContent = wine.variety;
  elements.modalBody.textContent = label(wine.body);
  elements.modalServing.textContent = wine.serving;
  elements.modalPairing.textContent = wine.pairing.map(label).join(", ");
  elements.modalPrice.textContent = `${wine.price} €`;
  elements.modalDescription.textContent = wine.description[state.language] || wine.description.es;
  elements.modalTags.innerHTML = wine.tags.map((item) => `<span>${item}</span>`).join("");
  elements.modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  state.selectedWine = null;
  elements.modal.hidden = true;
  if (elements.mobileFilters.hidden) {
    document.body.classList.remove("modal-open");
  }
}

function openMobileFilters() {
  state.draftFilters = cloneFilters(state.filters);
  renderMobileFilters();
  elements.mobileFilters.hidden = false;
  document.body.classList.add("modal-open");
}

function closeMobileFilters() {
  elements.mobileFilters.hidden = true;
  if (!state.selectedWine) {
    document.body.classList.remove("modal-open");
  }
}

function applyMobileFilters() {
  state.filters = cloneFilters(state.draftFilters);
  closeMobileFilters();
  render();
}

function renderDesktopFilters() {
  renderFilters(elements.filterGroups, state.filters, {
    toggle: toggleDesktopFilter,
    clearSection,
  });
}

function renderMobileFilters() {
  renderFilters(elements.mobileFilterGroups, state.draftFilters, {
    toggle: toggleDraftFilter,
    clearSection: clearDraftSection,
  });
}

function render() {
  renderStaticTranslations();
  renderDesktopFilters();
  renderMobileFilters();
  renderActiveFilters();
  renderWines();
  if (state.selectedWine) {
    openModal(state.selectedWine);
  }
}

elements.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.language = button.dataset.language;
    render();
  });
});

elements.openFiltersButton.addEventListener("click", openMobileFilters);
elements.closeFiltersButton.addEventListener("click", closeMobileFilters);
elements.closeModalButton.addEventListener("click", closeModal);
elements.clearAll.addEventListener("click", clearAllFilters);
elements.mobileClearAll.addEventListener("click", clearAllDraftFilters);
elements.applyFilters.addEventListener("click", applyMobileFilters);

elements.modal.addEventListener("click", (event) => {
  if (event.target === elements.modal) {
    closeModal();
  }
});

elements.mobileFilters.addEventListener("click", (event) => {
  if (event.target === elements.mobileFilters) {
    closeMobileFilters();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!elements.modal.hidden) {
      closeModal();
    }
    if (!elements.mobileFilters.hidden) {
      closeMobileFilters();
    }
  }
});

render();
