function exportData(filename) {
   try{
        requestDownload(JSON.stringify(historyData), filename, "json");
    } catch (err){ alert(err); }
 }
 
const parentElement = document.getElementsByClassName('option');
const tooltipElement = document.getElementsByClassName('tooltip');

for (let i = 0; i < 3; i++){
    parentElement[i].addEventListener('mouseenter', (event) => {
        tooltipElement[i].classList.add('hover');
        
    });
    
    parentElement[i].addEventListener('mouseleave', (event) => {
        tooltipElement[i].classList.remove('hover');
    });
}

function generatePDF(filename) {
const { jsPDF } = window.jspdf;
const doc = new jsPDF();
// Pegando o tamanho da página
const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();

doc.setFillColor(201, 212,204);
  doc.rect(0, 0, pageWidth, pageHeight, "F");
  doc.text(JSON.stringify(historyData), 20, 30);
  // Conteúdo da tabela
    const headers = [["Nome", "Idade", "Profissão"]];
    const data = [
      ["Anderson", "30", "Programador"],
      ["Maria", "28", "Designer"],
      ["João", "35", "Analista"]
    ];
    const columns = [
      { header: 'Operação', dataKey: 'operation' },
      { header: 'Resultado', dataKey: 'result' }
    ];
    // Gerar a tabela
    doc.autoTable({
      headStyles: { halign: 'center', fontSize: 35, fillColor: [106, 168, 156] }, // Cells in first column centered and green
      bodyStyles: { halign: 'center', fontSize: 25 },
      columns: columns,
      body: historyData,
      startY: 45, // Define a posição Y da tabela
      theme: 'grid' // Pode ser 'striped', 'plain', 'grid'
    });
doc.save(filename);
}

function generateCSV(filename) {
    const csvString = convertArrayOfObjectsToCSV(historyData);
      downloadCSV(csvString, filename);
}

function convertArrayOfObjectsToCSV(data) {
  if (!data || data.length === 0) {
    return 'empty';
  }

  const headers = Object.keys(data[0]);
  const csvRows = data.map(obj => headers.map(header => `"${obj[header]}"`).join(','));
  return [headers.join(','), ...csvRows].join('\n');
}

function downloadCSV(csvString, filename) {
     requestDownload(csvString, filename, "csv");
}

function generateXML(filename, rootElementName = 'root', itemElementName = 'item') {
  try{
  let items = historyData;
  let xmlString = `<?xml version="1.0" encoding="UTF-8"?>\n<${rootElementName}>\n`;

  items.forEach(item => {
    xmlString += `  <${itemElementName}>\n`;
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        xmlString += `    <${key}>${item[key]}</${key}>\n`;
      }
    }
    xmlString += `  </${itemElementName}>\n`;
  });

  xmlString += `</${rootElementName}>`;
  requestDownload(xmlString, filename, "xml");
  
  } catch (err){
      alert(err);
  }
}

function requestDownload(data, filename, mime, extension=mime) {
     const blob = new Blob([data], { type: `text/${mime}` });
     const url = URL.createObjectURL(blob);
     const link = document.createElement("a");
     link.href = url;
     link.download = filename+"."+extension;
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
     URL.revokeObjectURL(url);
 }