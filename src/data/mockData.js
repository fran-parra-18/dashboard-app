import { toIsoDate } from "../utils/format";

// Las fechas se calculan a partir de hoy para que los datos de ejemplo nunca queden viejos
const today = new Date();

const daysFromToday = (days) => {
  const date = new Date(today);
  date.setDate(date.getDate() + days);
  return toIsoDate(date);
};

const monthLabel = (monthsAgo) => {
  const date = new Date(today.getFullYear(), today.getMonth() - monthsAgo, 1);
  const label = date.toLocaleDateString("es-AR", { month: "short" }).replace(".", "").slice(0, 3);
  return label.charAt(0).toUpperCase() + label.slice(1);
};

export const provinces = [
  "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes",
  "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones",
  "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe",
  "Santiago del Estero", "Tierra del Fuego", "Tucumán",
];

export const accessLevels = {
  admin: { label: "Administrador", color: "primary" },
  manager: { label: "Encargado", color: "secondary" },
  seller: { label: "Vendedor", color: "default" },
};

export const teamMembers = [
  { id: 1, name: "Lucía Fernández", role: "Dueña", email: "lucia@minegocio.ar", phone: "+54 9 11 4523-8890", access: "admin" },
  { id: 2, name: "Martín Gómez", role: "Encargado de local", email: "martin@minegocio.ar", phone: "+54 9 11 3871-2245", access: "manager" },
  { id: 3, name: "Sofía Romero", role: "Cajera", email: "sofia@minegocio.ar", phone: "+54 9 11 5560-1123", access: "seller" },
  { id: 4, name: "Joaquín Díaz", role: "Repositor", email: "joaquin@minegocio.ar", phone: "+54 9 11 6214-7780", access: "seller" },
  { id: 5, name: "Valentina Sosa", role: "Administración", email: "valentina@minegocio.ar", phone: "+54 9 11 4402-9931", access: "admin" },
  { id: 6, name: "Tomás Benítez", role: "Encargado de compras", email: "tomas@minegocio.ar", phone: "+54 9 11 3398-4410", access: "manager" },
  { id: 7, name: "Camila Herrera", role: "Vendedora", email: "camila@minegocio.ar", phone: "+54 9 11 2876-5502", access: "seller" },
  { id: 8, name: "Nicolás Acosta", role: "Vendedor", email: "nicolas@minegocio.ar", phone: "+54 9 11 5127-3368", access: "seller" },
];

export const initialClients = [
  { id: 1, name: "Florencia Medina", email: "flor.medina@correo.com", phone: "+54 9 11 4789-2210", address: "Av. Corrientes 2450", city: "Balvanera", province: "CABA", zipCode: "C1046", createdAt: daysFromToday(-210) },
  { id: 2, name: "Diego Ruiz", email: "diegoruiz@correo.com", phone: "+54 9 351 612-4478", address: "Bv. San Juan 845", city: "Córdoba", province: "Córdoba", zipCode: "X5000", createdAt: daysFromToday(-185) },
  { id: 3, name: "Carolina Paz", email: "caro.paz@correo.com", phone: "+54 9 341 455-9012", address: "Pellegrini 1320", city: "Rosario", province: "Santa Fe", zipCode: "S2000", createdAt: daysFromToday(-160) },
  { id: 4, name: "Federico Molina", email: "fede.molina@correo.com", phone: "+54 9 261 433-7781", address: "San Martín 1102", city: "Mendoza", province: "Mendoza", zipCode: "M5500", createdAt: daysFromToday(-132) },
  { id: 5, name: "Agustina Castro", email: "agus.castro@correo.com", phone: "+54 9 221 590-3345", address: "Calle 7 nº 980", city: "La Plata", province: "Buenos Aires", zipCode: "B1900", createdAt: daysFromToday(-98) },
  { id: 6, name: "Gonzalo Ortiz", email: "gonza.ortiz@correo.com", phone: "+54 9 223 488-1290", address: "Av. Colón 2789", city: "Mar del Plata", province: "Buenos Aires", zipCode: "B7600", createdAt: daysFromToday(-76) },
  { id: 7, name: "Micaela Vera", email: "mica.vera@correo.com", phone: "+54 9 381 422-6618", address: "24 de Septiembre 560", city: "San Miguel de Tucumán", province: "Tucumán", zipCode: "T4000", createdAt: daysFromToday(-54) },
  { id: 8, name: "Santiago Ríos", email: "santi.rios@correo.com", phone: "+54 9 299 571-0044", address: "Av. Argentina 315", city: "Neuquén", province: "Neuquén", zipCode: "Q8300", createdAt: daysFromToday(-31) },
  { id: 9, name: "Julieta Aguirre", email: "juli.aguirre@correo.com", phone: "+54 9 387 431-8826", address: "Caseros 742", city: "Salta", province: "Salta", zipCode: "A4400", createdAt: daysFromToday(-12) },
  { id: 10, name: "Matías Suárez", email: "mati.suarez@correo.com", phone: "+54 9 11 6033-4419", address: "Cabildo 1890", city: "Belgrano", province: "CABA", zipCode: "C1426", createdAt: daysFromToday(-3) },
];

export const invoiceStatuses = {
  paid: { label: "Pagada", color: "success" },
  pending: { label: "Pendiente", color: "warning" },
  overdue: { label: "Vencida", color: "error" },
};

export const invoices = [
  { id: "F-0001-00001284", name: "Florencia Medina", email: "flor.medina@correo.com", amount: 48250, date: daysFromToday(-2), status: "pending" },
  { id: "F-0001-00001283", name: "Diego Ruiz", email: "diegoruiz@correo.com", amount: 125900, date: daysFromToday(-4), status: "paid" },
  { id: "F-0001-00001282", name: "Carolina Paz", email: "caro.paz@correo.com", amount: 18730, date: daysFromToday(-6), status: "paid" },
  { id: "F-0001-00001281", name: "Federico Molina", email: "fede.molina@correo.com", amount: 92400, date: daysFromToday(-9), status: "pending" },
  { id: "F-0001-00001280", name: "Agustina Castro", email: "agus.castro@correo.com", amount: 33610, date: daysFromToday(-15), status: "paid" },
  { id: "F-0001-00001279", name: "Gonzalo Ortiz", email: "gonza.ortiz@correo.com", amount: 71200, date: daysFromToday(-34), status: "overdue" },
  { id: "F-0001-00001278", name: "Micaela Vera", email: "mica.vera@correo.com", amount: 15990, date: daysFromToday(-38), status: "paid" },
  { id: "F-0001-00001277", name: "Santiago Ríos", email: "santi.rios@correo.com", amount: 56480, date: daysFromToday(-41), status: "overdue" },
  { id: "F-0001-00001276", name: "Julieta Aguirre", email: "juli.aguirre@correo.com", amount: 24300, date: daysFromToday(-45), status: "paid" },
  { id: "F-0001-00001275", name: "Matías Suárez", email: "mati.suarez@correo.com", amount: 109870, date: daysFromToday(-52), status: "paid" },
];

export const paymentMethods = {
  cash: "Efectivo",
  debit: "Débito",
  credit: "Crédito",
  qr: "QR / billetera",
  transfer: "Transferencia",
};

export const recentSales = [
  { id: "V-2481", client: "Florencia Medina", date: daysFromToday(0), amount: 18450, method: "qr" },
  { id: "V-2480", client: "Consumidor final", date: daysFromToday(0), amount: 6320, method: "cash" },
  { id: "V-2479", client: "Diego Ruiz", date: daysFromToday(-1), amount: 42900, method: "credit" },
  { id: "V-2478", client: "Carolina Paz", date: daysFromToday(-1), amount: 11780, method: "debit" },
  { id: "V-2477", client: "Consumidor final", date: daysFromToday(-1), amount: 3950, method: "cash" },
  { id: "V-2476", client: "Federico Molina", date: daysFromToday(-2), amount: 27600, method: "transfer" },
  { id: "V-2475", client: "Micaela Vera", date: daysFromToday(-2), amount: 9840, method: "qr" },
  { id: "V-2474", client: "Agustina Castro", date: daysFromToday(-3), amount: 15210, method: "debit" },
];

export const kpis = {
  monthlySales: { value: 4825300, delta: 12.4 },
  tickets: { value: 1284, delta: 8.1 },
  newClients: { value: 86, delta: 5.3 },
  averageTicket: { value: 3758, delta: -2.1 },
  monthlyGoal: { target: 5500000, current: 4825300 },
};

export const salesCategories = ["Almacén", "Bebidas", "Limpieza", "Perfumería", "Kiosco"];

export const unitsByCategory = [
  [1820, 1240, 610, 430, 980],
  [1750, 1180, 640, 410, 1020],
  [1910, 1420, 590, 470, 1110],
  [2040, 1610, 680, 520, 1080],
  [1980, 1730, 720, 490, 1190],
  [2210, 1860, 750, 560, 1250],
].map((values, i, rows) => ({
  month: monthLabel(rows.length - 1 - i),
  ...Object.fromEntries(salesCategories.map((category, j) => [category, values[j]])),
}));

export const paymentMethodShare = [
  { id: "cash", label: paymentMethods.cash, value: 28 },
  { id: "debit", label: paymentMethods.debit, value: 24 },
  { id: "qr", label: paymentMethods.qr, value: 22 },
  { id: "credit", label: paymentMethods.credit, value: 19 },
  { id: "transfer", label: paymentMethods.transfer, value: 7 },
];

const salesThisPeriod = [3120000, 3240000, 3380000, 3310000, 3560000, 3690000, 3820000, 3950000, 4110000, 4280000, 4300000, 4825300];
const salesPreviousPeriod = [2380000, 2450000, 2590000, 2520000, 2710000, 2830000, 2900000, 3020000, 3150000, 3260000, 3340000, 3510000];

export const monthlySales = [
  { id: "Últimos 12 meses", data: salesThisPeriod },
  { id: "Período anterior", data: salesPreviousPeriod },
].map((series) => ({
  id: series.id,
  data: series.data.map((y, i) => ({ x: monthLabel(series.data.length - 1 - i), y })),
}));

export const countryNames = {
  ARG: "Argentina",
  URY: "Uruguay",
  CHL: "Chile",
  PRY: "Paraguay",
  BOL: "Bolivia",
  BRA: "Brasil",
  PER: "Perú",
  COL: "Colombia",
  ECU: "Ecuador",
  VEN: "Venezuela",
  MEX: "México",
  ESP: "España",
  USA: "Estados Unidos",
};

// Pedidos de la tienda online enviados a cada país en el último año
export const shipmentsByCountry = [
  { id: "ARG", value: 1250 },
  { id: "URY", value: 340 },
  { id: "CHL", value: 290 },
  { id: "BRA", value: 210 },
  { id: "PRY", value: 180 },
  { id: "ESP", value: 140 },
  { id: "BOL", value: 120 },
  { id: "PER", value: 95 },
  { id: "COL", value: 80 },
  { id: "USA", value: 75 },
  { id: "MEX", value: 60 },
  { id: "ECU", value: 40 },
  { id: "VEN", value: 30 },
];

export const notifications = [
  { id: 1, title: "Factura vencida", detail: "F-0001-00001279 · Gonzalo Ortiz", time: "Hace 2 h" },
  { id: 2, title: "Nuevo cliente registrado", detail: "Matías Suárez se sumó a tu lista", time: "Hace 5 h" },
  { id: 3, title: "Stock bajo", detail: "Yerba mate 1 kg · quedan 6 unidades", time: "Ayer" },
];

export const initialEvents = [
  { id: "e1", title: "Reunión con el equipo", start: `${daysFromToday(1)}T10:00:00`, end: `${daysFromToday(1)}T11:00:00` },
  { id: "e2", title: "Pago a proveedores", start: daysFromToday(2), allDay: true },
  { id: "e3", title: "Inventario mensual", start: daysFromToday(6), allDay: true },
  { id: "e4", title: "Vencimiento de impuestos", start: daysFromToday(9), allDay: true },
];
