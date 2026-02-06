'use client';

export const generateProposalPDF = async () => {
  const { default: jsPDF } = await import('jspdf');
  
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  doc.setFont('helvetica');
  
  let yPos = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);
  const LINE_SPACING = 1.25;
  const FONT_SIZE = 12;

  // Helper functions
  const checkPageBreak = (requiredSpace: number = 10) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // Helper function untuk icon berwarna
  const drawColoredIcon = (x: number, y: number, type: string, color: number[]) => {
    doc.setFillColor(color[0], color[1], color[2]);
    
    switch(type) {
      case 'chart':
        doc.roundedRect(x, y + 8, 3, 8, 1, 1, 'F');
        doc.roundedRect(x + 4, y + 5, 3, 11, 1, 1, 'F');
        doc.roundedRect(x + 8, y + 2, 3, 14, 1, 1, 'F');
        break;
      case 'shield':
        doc.roundedRect(x + 2, y, 8, 10, 1, 1, 'F');
        doc.circle(x + 6, y + 12, 3, 'F');
        break;
      case 'check':
        doc.circle(x + 6, y + 6, 6, 'F');
        doc.setDrawColor(255, 255, 255);
        doc.setLineWidth(2);
        doc.line(x + 3, y + 6, x + 5, y + 9);
        doc.line(x + 5, y + 9, x + 9, y + 3);
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.1);
        break;
      case 'star':
        doc.circle(x + 6, y + 6, 6, 'F');
        doc.setFillColor(255, 255, 255);
        doc.circle(x + 6, y + 6, 3, 'F');
        break;
    }
  };

  // ===== COVER PAGE =====
  doc.setFillColor(30, 58, 138);
  doc.rect(0, 0, pageWidth, 100, 'F');
  
  doc.setFillColor(59, 130, 246);
  doc.circle(pageWidth - 20, 20, 30, 'F');
  doc.setFillColor(147, 197, 253);
  doc.circle(20, 80, 20, 'F');
  
  // Logo
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(pageWidth / 2 - 15, 15, 30, 30, 3, 3, 'F');
  doc.setTextColor(30, 58, 138);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('API', pageWidth / 2, 35, { align: 'center' });
  
  // Title
  doc.setTextColor(255, 255, 255);
  yPos = 55;
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('PROPOSAL PROFESIONAL', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 10;
  doc.setFontSize(22);
  doc.text('UNIT COST CALCULATOR', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 8;
  doc.setFontSize(FONT_SIZE);
  doc.setFont('helvetica', 'normal');
  doc.text('Solusi Cerdas Perhitungan Biaya Layanan Kesehatan', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 5;
  doc.setFontSize(10);
  doc.text('Berbasis Activity Based Costing (ABC)', pageWidth / 2, yPos, { align: 'center' });
  
  // Company info
  doc.setTextColor(0, 0, 0);
  yPos = 115;
  doc.setFillColor(249, 250, 251);
  doc.roundedRect(margin, yPos, contentWidth, 35, 3, 3, 'F');
  
  yPos += 8;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('AKADEMI PROFESIONAL INDONESIA', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 7;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Jl. Profesional No. 123, Jakarta Selatan 12345', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 5;
  doc.text('Email: info@akademiprofesional.id | Phone: +62 812-3456-7890', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 5;
  doc.text('Website: www.akademiprofesional.id', pageWidth / 2, yPos, { align: 'center' });
  
  // Date
  yPos = pageHeight - 30;
  doc.setFillColor(30, 58, 138);
  doc.roundedRect(margin, yPos, contentWidth, 20, 3, 3, 'F');
  
  yPos += 7;
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Tanggal Proposal:', margin + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }), margin + 5, yPos + 5);
  
  doc.text('Berlaku hingga:', pageWidth - margin - 5, yPos, { align: 'right' });
  const validUntil = new Date();
  validUntil.setDate(validUntil.getDate() + 30);
  doc.text(validUntil.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }), pageWidth - margin - 5, yPos + 5, { align: 'right' });
  
  doc.setTextColor(0, 0, 0);

  // ===== PAGE 2: RINGKASAN EKSEKUTIF =====
  doc.addPage();
  yPos = margin;
  
  doc.setFillColor(239, 246, 255);
  doc.roundedRect(margin, yPos, contentWidth, 15, 3, 3, 'F');
  
  drawColoredIcon(margin + 5, yPos + 2, 'chart', [59, 130, 246]);
  
  doc.setTextColor(30, 58, 138);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('RINGKASAN EKSEKUTIF', margin + 22, yPos + 10);
  
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  // Content dengan spasi 1.25 dan font 12
  doc.setFontSize(FONT_SIZE);
  doc.setFont('helvetica', 'normal');
  const execSummary = 'Unit Cost Calculator adalah solusi komprehensif berbasis cloud untuk menghitung biaya satuan layanan kesehatan dengan metode Activity Based Costing (ABC). Sistem ini dirancang khusus untuk rumah sakit dan fasilitas kesehatan yang ingin meningkatkan transparansi finansial, mengoptimalkan efisiensi operasional, dan menetapkan tarif layanan yang akurat sesuai standar regulasi Kemenkes.';
  const summaryLines = doc.splitTextToSize(execSummary, contentWidth);
  summaryLines.forEach((line: string) => {
    doc.text(line, margin, yPos);
    yPos += FONT_SIZE * (LINE_SPACING / 2);
  });
  
  yPos += 5;
  
  // Key benefits dengan icon berwarna
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(FONT_SIZE);
  doc.text('Manfaat Utama:', margin, yPos);
  yPos += 8;
  
  const benefits = [
    { icon: 'chart', color: [34, 197, 94], title: 'Transparansi Finansial', desc: 'Meningkatkan visibilitas alokasi biaya hingga 95% dengan dashboard real-time yang interaktif dan mudah dipahami' },
    { icon: 'star', color: [59, 130, 246], title: 'Efisiensi Operasional', desc: 'Mengoptimalkan penggunaan sumber daya dan menghemat biaya operasional 15-25% per tahun secara konsisten' },
    { icon: 'check', color: [139, 92, 246], title: 'Penetapan Tarif Akurat', desc: 'Menetapkan tarif berbasis biaya riil dengan margin optimal yang kompetitif di pasar' },
    { icon: 'shield', color: [245, 158, 11], title: 'Compliance Regulasi', desc: 'Memenuhi standar Kemenkes 100% dan siap untuk proses akreditasi nasional maupun internasional' }
  ];
  
  const boxWidth = (contentWidth - 5) / 2;
  const boxHeight = 28;
  let boxX = margin;
  let boxY = yPos;
  
  benefits.forEach((benefit, index) => {
    if (index % 2 === 0 && index > 0) {
      boxY += boxHeight + 5;
      boxX = margin;
    }
    
    doc.setFillColor(240, 240, 240);
    doc.roundedRect(boxX + 1, boxY + 1, boxWidth, boxHeight, 2, 2, 'F');
    
    doc.setFillColor(249, 250, 251);
    doc.setDrawColor(benefit.color[0], benefit.color[1], benefit.color[2]);
    doc.setLineWidth(1);
    doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 2, 2, 'FD');
    
    drawColoredIcon(boxX + 5, boxY + 5, benefit.icon, benefit.color);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(benefit.color[0], benefit.color[1], benefit.color[2]);
    doc.text(benefit.title, boxX + 22, boxY + 10);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const descLines = doc.splitTextToSize(benefit.desc, boxWidth - 24);
    let descY = boxY + 16;
    descLines.forEach((line: string) => {
      doc.text(line, boxX + 22, descY);
      descY += 9 * (LINE_SPACING / 2);
    });
    
    boxX += boxWidth + 5;
  });
  
  yPos = boxY + boxHeight + 10;
  
  // ROI Highlight
  checkPageBreak(30);
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin, yPos, contentWidth, 25, 3, 3, 'F');
  
  drawColoredIcon(margin + 5, yPos + 5, 'star', [245, 158, 11]);
  
  yPos += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(146, 64, 14);
  doc.text('Return on Investment (ROI): 6-12 Bulan', margin + 22, yPos);
  
  yPos += 7;
  doc.setFontSize(FONT_SIZE);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text('Penghematan biaya operasional 15-25% | Peningkatan margin profit 10-20%', margin + 22, yPos);
  
  doc.setTextColor(0, 0, 0);

  // Save PDF
  doc.save('Proposal-Unit-Cost-Calculator-Professional.pdf');
};
