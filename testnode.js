const fs = require('fs');
const path = require('path');
const { parseStringPromise, Builder } = require('xml2js');

// Path to the input XML file
const xmlFilePath = 'input.xml';

// Read and parse the XML
async function processXml() {
  try {
    const xmlData = fs.readFileSync(xmlFilePath, 'utf-8');
    const result = await parseStringPromise(xmlData);

    const items = result.ScanHierarchy.item;

    for (const item of items) {
      const originalPath = item.path[0].replace(/\\/g, '/'); // normalize slashes
      const resolvedPath = path.resolve(originalPath);

      if (fs.existsSync(resolvedPath)) {
        const stats = fs.statSync(resolvedPath);
        const modDate = stats.mtime.toISOString();

        item.LastModified = [modDate];
        console.log(`✔ Updated: ${resolvedPath} - ${modDate}`);
      } else {
        item.LastModified = ['File not found'];
        console.warn(`⚠ File not found: ${resolvedPath}`);
      }
    }

    // Build the updated XML
    const builder = new Builder({ headless: false, pretty: true });
    const updatedXml = builder.buildObject(result);

    // Save to a new file
    fs.writeFileSync('output.xml', updatedXml, 'utf-8');
    console.log('✅ XML file updated: output.xml');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

processXml();
