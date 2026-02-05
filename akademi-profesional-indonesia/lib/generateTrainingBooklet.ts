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
  schedule: string;
  venue: string;
  materials: string[];
}

export const generateTrainingBooklet = async (training: TrainingData) => {
  const { default: jsPDF } = await import('jspdf');
  
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Professional font - Helvetica lebih modern dan rapi
  doc.setFont('helvetica', 'normal');
  
  let yPos = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - (2 * margin);
  const LINE_SPACING = 1.4;
  const FONT_SIZE = 10;
  const HEADING_SIZE = 15;
  const SUBHEADING_SIZE = 12;

  // Helper functions
  const checkPageBreak = (requiredSpace: number = 15) => {
    if (yPos + requiredSpace > pageHeight - margin - 5) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  const drawProfessionalIcon = (x: number, y: number, type: string, color: number[]) => {
    doc.setFillColor(color[0], color[1], color[2]);
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(0.3);
    
    switch(type) {
      case 'calendar':
        doc.roundedRect(x, y, 5, 5, 0.4, 0.4, 'FD');
        doc.setFillColor(255, 255, 255);
        doc.rect(x + 0.8, y + 1.5, 3.4, 2.5, 'F');
        break;
      case 'location':
        doc.circle(x + 2.5, y + 2.5, 2.5, 'FD');
        doc.setFillColor(255, 255, 255);
        doc.circle(x + 2.5, y + 2.5, 1, 'F');
        break;
      case 'users':
        doc.circle(x + 1.5, y + 1.5, 1.2, 'F');
        doc.circle(x + 3.5, y + 1.5, 1.2, 'F');
        doc.ellipse(x + 2.5, y + 4, 2, 1.2, 'F');
        break;
      case 'book':
        doc.roundedRect(x + 0.3, y + 0.3, 4.4, 5, 0.4, 0.4, 'FD');
        doc.setFillColor(255, 255, 255);
        doc.setLineWidth(0.2);
        doc.line(x + 1.2, y + 2, x + 3.8, y + 2);
        doc.line(x + 1.2, y + 2.8, x + 3.8, y + 2.8);
        doc.line(x + 1.2, y + 3.6, x + 3.8, y + 3.6);
        break;
    }
  };

  // ===== COVER PAGE =====
  doc.setFillColor(16, 185, 129);
  doc.rect(0, 0, pageWidth, 90, 'F');
  
  doc.setFillColor(52, 211, 153);
  doc.circle(pageWidth - 12, 12, 15, 'F');
  doc.setFillColor(167, 243, 208);
  doc.circle(12, 78, 12, 'F');
  
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(pageWidth / 2 - 12, 12, 24, 24, 2, 2, 'F');
  doc.setTextColor(16, 185, 129);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('API', pageWidth / 2, 28, { align: 'center' });
  
  doc.setTextColor(255, 255, 255);
  yPos = 45;
  doc.setFontSize(20);
  doc.text('PROPOSAL PENAWARAN', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 8;
  doc.setFontSize(16);
  doc.text('PROGRAM PELATIHAN PROFESIONAL', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 10;
  doc.setFontSize(13);
  doc.setFont('helvetica', 'normal');
  const titleLines = doc.splitTextToSize(training.title, contentWidth - 15);
  titleLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, yPos, { align: 'center' });
    yPos += 6;
  });

  
  // Company info
  doc.setTextColor(0, 0, 0);
  yPos = 110;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(margin, yPos, contentWidth, 38, 2, 2, 'F');
  doc.setDrawColor(16, 185, 129);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, yPos, contentWidth, 38, 2, 2, 'D');
  
  yPos += 8;
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('AKADEMI PROFESIONAL INDONESIA', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 7;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('Jl. Profesional No. 123, Jakarta Selatan 12345', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 5;
  doc.text('Email: info@akademiprofesional.id | Telepon: +62 857-2611-2001', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 5;
  doc.text('Website: www.akademiprofesional.id', pageWidth / 2, yPos, { align: 'center' });
  
  // Date info
  yPos = pageHeight - 30;
  doc.setFillColor(16, 185, 129);
  doc.roundedRect(margin, yPos, contentWidth, 22, 2, 2, 'F');
  
  yPos += 7;
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('Tanggal Proposal:', margin + 5, yPos);
  doc.setFont('helvetica', 'normal');
  doc.text(new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }), margin + 5, yPos + 5);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Berlaku hingga:', pageWidth - margin - 5, yPos, { align: 'right' });
  const validUntil = new Date();
  validUntil.setDate(validUntil.getDate() + 30);
  doc.setFont('helvetica', 'normal');
  doc.text(validUntil.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }), pageWidth - margin - 5, yPos + 5, { align: 'right' });
  
  doc.setTextColor(0, 0, 0);

  // ===== PAGE 2: INFORMASI PELATIHAN =====
  doc.addPage();
  yPos = margin;
  
  doc.setFillColor(240, 253, 244);
  doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'F');
  doc.setDrawColor(16, 185, 129);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'D');
  
  drawProfessionalIcon(margin + 4, yPos + 4.5, 'book', [16, 185, 129]);
  
  doc.setTextColor(5, 150, 105);
  doc.setFontSize(HEADING_SIZE);
  doc.setFont('helvetica', 'bold');
  doc.text('INFORMASI PELATIHAN', margin + 14, yPos + 9.5);
  
  doc.setTextColor(0, 0, 0);
  yPos += 22;
  
  // Training details
  const details = [
    { icon: 'calendar', color: [59, 130, 246], label: 'Waktu Pelaksanaan', value: `${training.date}\n${training.schedule}` },
    { icon: 'location', color: [139, 92, 246], label: 'Tempat Pelaksanaan', value: training.venue },
    { icon: 'users', color: [245, 158, 11], label: 'Kuota Peserta', value: `${training.seats} peserta` }
  ];
  
  details.forEach((detail) => {
    checkPageBreak(32);
    
    doc.setFillColor(248, 248, 248);
    doc.roundedRect(margin + 1, yPos + 1, contentWidth - 2, 26, 2, 2, 'F');
    
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(detail.color[0], detail.color[1], detail.color[2]);
    doc.setLineWidth(0.6);
    doc.roundedRect(margin, yPos, contentWidth, 26, 2, 2, 'FD');
    
    drawProfessionalIcon(margin + 5, yPos + 5, detail.icon, detail.color);
    
    doc.setFontSize(SUBHEADING_SIZE);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(detail.color[0], detail.color[1], detail.color[2]);
    doc.text(detail.label, margin + 16, yPos + 9);
    
    doc.setFontSize(FONT_SIZE);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    const valueLines = doc.splitTextToSize(detail.value, contentWidth - 22);
    let valueY = yPos + 16;
    valueLines.forEach((line: string) => {
      doc.text(line, margin + 16, valueY);
      valueY += 5;
    });
    
    yPos += 32;
  });
  
  // Investment box
  checkPageBreak(50);
  doc.setFillColor(254, 252, 232);
  const investmentBoxHeight = training.priceOptions && training.priceOptions.length > 0 ? 50 : 25;
  doc.roundedRect(margin, yPos, contentWidth, investmentBoxHeight, 2, 2, 'F');
  doc.setDrawColor(245, 158, 11);
  doc.setLineWidth(0.6);
  doc.roundedRect(margin, yPos, contentWidth, investmentBoxHeight, 2, 2, 'D');
  
  yPos += 9;
  doc.setFontSize(SUBHEADING_SIZE);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(146, 64, 14);
  doc.text('INVESTASI PELATIHAN', margin + 6, yPos);
  
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
    
    yPos += 5;
  } else {
    yPos += 8;
    doc.setFontSize(18);
    doc.setTextColor(217, 119, 6);
    doc.text(`Rp ${training.price}`, pageWidth - margin - 6, yPos, { align: 'right' });
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('per peserta', pageWidth - margin - 6, yPos + 5, { align: 'right' });
    yPos += 15;
  }
  
  doc.setTextColor(0, 0, 0);


  // ===== MATERI PELATIHAN =====
  checkPageBreak(20);
  yPos += 6;
  
  doc.setFillColor(240, 253, 244);
  doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'F');
  doc.setDrawColor(16, 185, 129);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'D');
  
  drawProfessionalIcon(margin + 4, yPos + 4.5, 'book', [16, 185, 129]);
  
  doc.setTextColor(5, 150, 105);
  doc.setFontSize(HEADING_SIZE);
  doc.setFont('helvetica', 'bold');
  doc.text('MATERI PELATIHAN', margin + 14, yPos + 9.5);
  
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  doc.setFontSize(FONT_SIZE);
  doc.setFont('helvetica', 'normal');
  const introText = 'Program pelatihan ini dirancang secara terstruktur dan komprehensif untuk memberikan pemahaman mendalam serta keterampilan praktis yang dapat langsung diimplementasikan di lingkungan kerja Anda.';
  const introLines = doc.splitTextToSize(introText, contentWidth);
  introLines.forEach((line: string) => {
    checkPageBreak();
    doc.text(line, margin, yPos);
    yPos += FONT_SIZE * (LINE_SPACING / 2);
  });
  
  yPos += 8;
  
  // Materials list
  training.materials.forEach((material, materialIndex) => {
    checkPageBreak(14);
    
    doc.setFillColor(16, 185, 129);
    doc.circle(margin + 4, yPos - 0.5, 3.5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text((materialIndex + 1).toString(), margin + 4, yPos + 2, { align: 'center' });
    
    doc.setTextColor(40, 40, 40);
    doc.setFontSize(FONT_SIZE);
    doc.setFont('helvetica', 'normal');
    const materialLines = doc.splitTextToSize(material, contentWidth - 14);
    let materialY = yPos;
    materialLines.forEach((line: string) => {
      doc.text(line, margin + 11, materialY);
      materialY += FONT_SIZE * (LINE_SPACING / 2);
    });
    
    yPos = materialY + 5;
  });

  // ===== BENEFITS & FACILITIES =====
  checkPageBreak(25);
  yPos += 8;
  
  doc.setFillColor(239, 246, 255);
  doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'F');
  doc.setDrawColor(59, 130, 246);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'D');
  
  doc.setTextColor(29, 78, 216);
  doc.setFontSize(HEADING_SIZE);
  doc.setFont('helvetica', 'bold');
  doc.text('FASILITAS PELATIHAN', margin + 6, yPos + 9.5);
  
  doc.setTextColor(0, 0, 0);
  yPos += 20;
  
  const facilities = [
    'Sertifikat resmi terakreditasi Kementerian Kesehatan Republik Indonesia',
    'Modul pelatihan lengkap dalam format digital dan cetak berkualitas tinggi',
    'Template dan tools siap pakai untuk implementasi langsung',
    'Konsultasi gratis selama 30 hari pasca pelatihan dengan fasilitator',
    'Akses eksklusif ke komunitas alumni untuk networking profesional',
    'Coffee break dan makan siang selama pelatihan berlangsung',
    'Dokumentasi foto dan video kegiatan pelatihan'
  ];
  
  facilities.forEach((facility) => {
    checkPageBreak(10);
    
    doc.setFillColor(59, 130, 246);
    doc.circle(margin + 3, yPos - 0.5, 1.5, 'F');
    
    doc.setFontSize(FONT_SIZE);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 40, 40);
    const facilityLines = doc.splitTextToSize(facility, contentWidth - 10);
    let facilityY = yPos;
    facilityLines.forEach((line: string) => {
      doc.text(line, margin + 8, facilityY);
      facilityY += FONT_SIZE * (LINE_SPACING / 2);
    });
    
    yPos = facilityY + 3;
  });

  // ===== CONTACT & REGISTRATION =====
  checkPageBreak(45);
  yPos += 12;
  
  doc.setFillColor(16, 185, 129);
  doc.roundedRect(margin, yPos, contentWidth, 45, 3, 3, 'F');
  
  yPos += 10;
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(HEADING_SIZE);
  doc.setFont('helvetica', 'bold');
  doc.text('INFORMASI & PENDAFTARAN', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 9;
  doc.setFontSize(FONT_SIZE);
  doc.setFont('helvetica', 'normal');
  doc.text('Hubungi kami untuk informasi lebih lanjut atau melakukan pendaftaran:', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('WhatsApp: +62 857-2611-2001', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 6;
  doc.text('Email: info@akademiprofesional.id', pageWidth / 2, yPos, { align: 'center' });
  
  yPos += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Website: www.akademiprofesional.id', pageWidth / 2, yPos, { align: 'center' });
  
  // Footer
  yPos = pageHeight - 15;
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.2);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  
  yPos += 5;
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  doc.text('© 2026 Akademi Profesional Indonesia. All rights reserved.', pageWidth / 2, yPos, { align: 'center' });

  // Save PDF
  const fileName = `Booklet-${training.title.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`;
  doc.save(fileName);
};
