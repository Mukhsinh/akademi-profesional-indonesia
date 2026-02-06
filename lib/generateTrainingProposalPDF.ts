'use client';

interface PriceOption {
  type: string;
  price: string;
  description: string;
}

interface TrainingData {
  title: string;
  date: string;
  location: string;
  seats: number;
  price: string;
  priceOptions?: PriceOption[];
  duration: string;
  materials: string[];
  facilitators: string[];
  schedule: { day: string; time: string; topic: string }[];
}

export const generateTrainingProposalPDF = async (training: TrainingData) => {
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
  const LINE_SPACING = 1.5;
  const FONT_SIZE = 11;

  // Helper functions
  const checkPageBreak = (requiredSpace: number = 15) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  const drawColoredIcon = (x: number, y: number, type: string, color: number[]) => {
    doc.setFillColor(color[0], color[1], color[2]);
    
    switch(type) {
      case 'calendar':
        doc.roundedRect(x, y, 10, 10, 1, 1, 'F');
        doc.setFillColor(255, 255, 255);
        doc.rect(x + 2, y + 3, 6, 5, 'F');
        break;
      case 'location':
        doc.circle(x + 5, y + 5, 5, 'F');
        doc.setFillColor(255, 255, 255);
        doc.circle(x + 5, y + 5, 2, 'F');
        break;
      case 'users':
        doc.circle(x + 3, y + 3, 2.5, 'F');
        doc.circle(x + 7, y + 3, 2.5, 'F');
        doc.circle(x + 5, y + 7, 3, 'F');
        break;
      case 'book':
        doc.roundedRect(x + 1, y + 1, 8, 10, 1, 1, 'F');
        doc.setFillColor(255, 255, 255);
        doc.line(x + 3, y + 4, x + 7, y + 4);
        doc.line(x + 3, y + 6, x + 7, y + 6);
        doc.line(x + 3, y + 8, x + 7, y + 8);
        break;
      case 'check':
        doc.circle(x + 5, y + 5, 5, 'F');
        doc.setDrawColor(255, 255, 255);
        doc.setLineWidth(1.5);
        doc.line(x + 2.5, y + 5, x + 4.5, y + 7.5);
        doc.line(x + 4.5, y + 7.5, x + 8, y + 3);
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.1);
        break;
    }
  };

  // ===== COVER PAGE =====
  doc.setFillColor(16, 185, 129);
  doc.rect(0, 0, pageWidth, 110, 'F');
  
  // Decorative circles
  doc.setFillColor(52, 211, 153);
  doc.circle(pageWidth - 15, 15, 25, 'F');
  doc.setFillColor(167, 243, 208);
  doc.circle(15, 90, 18, 'F');
  
  // Logo
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(pageWidth / 2 - 15, 15, 30, 30, 3, 3, 'F');
  doc.setTextColor(16, 185, 129);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('API', pageWidth / 2, 35, { align: 'center' });
  
  // Title
  doc.setTextColor(255, 255, 255);
  yPos = 55;
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('PROPOSAL PELATIHAN', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 10;
  doc.setFontSize(20);
  const titleLines = doc.splitTextToSize(training.title, contentWidth - 20);
  titleLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, yPos, { align: 'center' });
    yPos += 8;
  });
  
  yPos += 5;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Program Pelatihan Profesional Rumah Sakit', pageWidth / 2, yPos, { align: 'center' });
  
  // Company info box
  doc.setTextColor(0, 0, 0);
  yPos = 120;
  doc.setFillColor(249, 250, 251);
  doc.roundedRect(margin, yPos, contentWidth, 40, 3, 3, 'F');
  
  yPos += 8;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('AKADEMI PROFESIONAL INDONESIA', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 7;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Jl. Profesional No. 123, Jakarta Selatan 12345', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 5;
  doc.text('Email: info@akademiprofesional.id | Telp: +62 857-2611-2001', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 5;
  doc.text('Website: www.akademiprofesional.id', pageWidth / 2, yPos, { align: 'center' });
  
  // Date box
  yPos = pageHeight - 35;
  doc.setFillColor(16, 185, 129);
  doc.roundedRect(margin, yPos, contentWidth, 22, 3, 3, 'F');
  
  yPos += 8;
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

  // ===== PAGE 2: INFORMASI PELATIHAN =====
  doc.addPage();
  yPos = margin;
  
  // Section header
  doc.setFillColor(236, 253, 245);
  doc.roundedRect(margin, yPos, contentWidth, 15, 3, 3, 'F');
  
  drawColoredIcon(margin + 5, yPos + 2.5, 'calendar', [16, 185, 129]);
  
  doc.setTextColor(5, 150, 105);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('INFORMASI PELATIHAN', margin + 20, yPos + 10);
  
  doc.setTextColor(0, 0, 0);
  yPos += 22;
  
  // Info boxes
  const infoItems = [
    { icon: 'calendar', color: [16, 185, 129], label: 'Waktu Pelaksanaan', value: training.date },
    { icon: 'location', color: [139, 92, 246], label: 'Tempat Pelaksanaan', value: training.location },
    { icon: 'users', color: [59, 130, 246], label: 'Kuota Peserta', value: `${training.seats} peserta` },
    { icon: 'book', color: [245, 158, 11], label: 'Durasi Pelatihan', value: training.duration }
  ];
  
  infoItems.forEach((item, index) => {
    if (index % 2 === 0 && index > 0) {
      yPos += 28;
    }
    
    const boxX = index % 2 === 0 ? margin : pageWidth / 2 + 2.5;
    const boxWidth = (contentWidth - 5) / 2;
    
    doc.setFillColor(249, 250, 251);
    doc.setDrawColor(item.color[0], item.color[1], item.color[2]);
    doc.setLineWidth(0.8);
    doc.roundedRect(boxX, yPos, boxWidth, 25, 2, 2, 'FD');
    
    drawColoredIcon(boxX + 5, yPos + 5, item.icon, item.color);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 100, 100);
    doc.text(item.label, boxX + 20, yPos + 10);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(item.value, boxX + 20, yPos + 18);
  });
  
  yPos += 35;
  
  // Investment box
  checkPageBreak(50);
  doc.setFillColor(254, 243, 199);
  const investmentBoxHeight = training.priceOptions && training.priceOptions.length > 0 ? 55 : 25;
  doc.roundedRect(margin, yPos, contentWidth, investmentBoxHeight, 3, 3, 'F');
  
  yPos += 10;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(146, 64, 14);
  doc.text('Investasi Pelatihan:', margin + 5, yPos);
  
  if (training.priceOptions && training.priceOptions.length > 0) {
    yPos += 8;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    
    training.priceOptions.forEach((option, index) => {
      doc.setFont('helvetica', 'bold');
      doc.text(`${option.type}:`, margin + 8, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(`Rp ${option.price}`, margin + 60, yPos);
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(8);
      doc.text(`(${option.description})`, margin + 8, yPos + 3.5);
      doc.setFontSize(9);
      doc.setTextColor(0, 0, 0);
      yPos += 10;
    });
    
    yPos -= 5;
  } else {
    doc.setFontSize(20);
    doc.setTextColor(120, 53, 15);
    doc.text(`Rp ${training.price}`, pageWidth - margin - 5, yPos + 2, { align: 'right' });
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('per peserta (sudah termasuk materi, sertifikat, dan konsumsi)', margin + 5, yPos + 8);
    yPos += 15;
  }
  
  doc.setTextColor(0, 0, 0);
  yPos += 5;

  // ===== MATERI PELATIHAN =====
  checkPageBreak(20);
  yPos += 5;
  
  doc.setFillColor(236, 253, 245);
  doc.roundedRect(margin, yPos, contentWidth, 15, 3, 3, 'F');
  
  drawColoredIcon(margin + 5, yPos + 2.5, 'book', [16, 185, 129]);
  
  doc.setTextColor(5, 150, 105);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('MATERI PELATIHAN', margin + 20, yPos + 10);
  
  doc.setTextColor(0, 0, 0);
  yPos += 22;
  
  doc.setFontSize(FONT_SIZE);
  doc.setFont('helvetica', 'normal');
  
  training.materials.forEach((material, index) => {
    checkPageBreak(12);
    
    // Bullet point
    doc.setFillColor(16, 185, 129);
    doc.circle(margin + 3, yPos - 2, 1.5, 'F');
    
    // Material text
    const materialLines = doc.splitTextToSize(material, contentWidth - 10);
    materialLines.forEach((line: string, lineIndex: number) => {
      if (lineIndex > 0) checkPageBreak(8);
      doc.text(line, margin + 8, yPos);
      yPos += FONT_SIZE * (LINE_SPACING / 2);
    });
    
    yPos += 3;
  });

  // ===== JADWAL PELATIHAN =====
  checkPageBreak(25);
  yPos += 5;
  
  doc.setFillColor(236, 253, 245);
  doc.roundedRect(margin, yPos, contentWidth, 15, 3, 3, 'F');
  
  drawColoredIcon(margin + 5, yPos + 2.5, 'calendar', [16, 185, 129]);
  
  doc.setTextColor(5, 150, 105);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('JADWAL PELATIHAN', margin + 20, yPos + 10);
  
  doc.setTextColor(0, 0, 0);
  yPos += 22;
  
  // Table header
  doc.setFillColor(16, 185, 129);
  doc.rect(margin, yPos, contentWidth, 10, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Hari', margin + 3, yPos + 6.5);
  doc.text('Waktu', margin + 25, yPos + 6.5);
  doc.text('Topik Pembahasan', margin + 55, yPos + 6.5);
  
  doc.setTextColor(0, 0, 0);
  yPos += 10;
  
  // Table rows
  training.schedule.forEach((item, index) => {
    checkPageBreak(15);
    
    const rowHeight = 12;
    
    // Alternating row colors
    if (index % 2 === 0) {
      doc.setFillColor(249, 250, 251);
      doc.rect(margin, yPos, contentWidth, rowHeight, 'F');
    }
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(item.day, margin + 3, yPos + 7);
    doc.text(item.time, margin + 25, yPos + 7);
    
    const topicLines = doc.splitTextToSize(item.topic, contentWidth - 60);
    doc.text(topicLines[0], margin + 55, yPos + 7);
    
    yPos += rowHeight;
  });

  // ===== FASILITATOR =====
  checkPageBreak(25);
  yPos += 10;
  
  doc.setFillColor(236, 253, 245);
  doc.roundedRect(margin, yPos, contentWidth, 15, 3, 3, 'F');
  
  drawColoredIcon(margin + 5, yPos + 2.5, 'users', [16, 185, 129]);
  
  doc.setTextColor(5, 150, 105);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('FASILITATOR', margin + 20, yPos + 10);
  
  doc.setTextColor(0, 0, 0);
  yPos += 22;
  
  doc.setFontSize(FONT_SIZE);
  doc.setFont('helvetica', 'normal');
  
  training.facilitators.forEach((facilitator) => {
    checkPageBreak(10);
    
    drawColoredIcon(margin + 2, yPos - 4, 'check', [16, 185, 129]);
    
    const facilitatorLines = doc.splitTextToSize(facilitator, contentWidth - 10);
    facilitatorLines.forEach((line: string) => {
      doc.text(line, margin + 15, yPos);
      yPos += FONT_SIZE * (LINE_SPACING / 2);
    });
    
    yPos += 3;
  });

  // ===== FASILITAS =====
  checkPageBreak(30);
  yPos += 5;
  
  doc.setFillColor(236, 253, 245);
  doc.roundedRect(margin, yPos, contentWidth, 15, 3, 3, 'F');
  
  drawColoredIcon(margin + 5, yPos + 2.5, 'check', [16, 185, 129]);
  
  doc.setTextColor(5, 150, 105);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('FASILITAS PELATIHAN', margin + 20, yPos + 10);
  
  doc.setTextColor(0, 0, 0);
  yPos += 22;
  
  const facilities = [
    'Modul pelatihan lengkap dalam bentuk cetak dan digital',
    'Sertifikat terakreditasi Kemenkes RI',
    'Template dan tools siap pakai untuk implementasi',
    'Konsumsi (coffee break dan makan siang)',
    'Konsultasi gratis 30 hari pasca pelatihan',
    'Akses ke komunitas alumni pelatihan'
  ];
  
  doc.setFontSize(FONT_SIZE);
  doc.setFont('helvetica', 'normal');
  
  facilities.forEach((facility) => {
    checkPageBreak(10);
    
    drawColoredIcon(margin + 2, yPos - 4, 'check', [16, 185, 129]);
    doc.text(facility, margin + 15, yPos);
    yPos += FONT_SIZE * LINE_SPACING;
  });

  // ===== CLOSING =====
  checkPageBreak(40);
  yPos += 10;
  
  doc.setFillColor(16, 185, 129);
  doc.roundedRect(margin, yPos, contentWidth, 35, 3, 3, 'F');
  
  yPos += 10;
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Hubungi Kami Untuk Pendaftaran', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('WhatsApp: +62 857-2611-2001', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 6;
  doc.text('Email: info@akademiprofesional.id', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 6;
  doc.setFontSize(9);
  doc.text('Dapatkan diskon 15% untuk pendaftaran early bird (30 hari sebelum pelaksanaan)', pageWidth / 2, yPos, { align: 'center' });

  // Save PDF
  const fileName = `Proposal-${training.title.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`;
  doc.save(fileName);
};
