const fs = require('fs');
const path = require('path');

const token = process.env.MAPBOX_TOKEN;
const filePath = path.join(process.cwd(), 'index.html');

if (!token) {
  console.error('Error: MAPBOX_TOKEN no encontrado');
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// Reemplaza el placeholder con el token real
content = content.replace('MAPBOX_TOKEN_PLACEHOLDER', token);

// Verifica que se hizo el reemplazo
if (content.includes('MAPBOX_TOKEN_PLACEHOLDER')) {
  console.error('Error: No se pudo reemplazar el token');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Token inyectado correctamente');
