import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFDocument } from 'pdf-lib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const imagePath = join(root, 'scripts', 'resume-source.jpg');
const outPath = join(root, 'public', 'Balamurugan_Resume.pdf');

const imageBytes = readFileSync(imagePath);
const pdfDoc = await PDFDocument.create();
const image = await pdfDoc.embedJpg(imageBytes);
const { width, height } = image.scale(1);
const page = pdfDoc.addPage([width, height]);
page.drawImage(image, { x: 0, y: 0, width, height });
writeFileSync(outPath, await pdfDoc.save());

console.log('Wrote', outPath);
