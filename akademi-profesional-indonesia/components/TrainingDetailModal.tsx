'use client'

import { generateTrainingProposalPDF } from '@/lib/generateTrainingProposalPDF'

interface PriceOption {
  type: string;
  price: string;
  description: string;
}

interface Training {
  title: string;
  date: string;
  location: string;
  seats: number;
  available: number;
  price: string;
  priceOptions: PriceOption[];
  status: string;
  duration: string;
  materials: string[];
  facilitators: string[];
  schedule: { day: string; time: string; topic: string }[];
}

interface TrainingDetailModalProps {
  training: Training;
  onClose: () => void;
  onRegister: () => void;
}

export default function TrainingDetailModal({ training, onClose, onRegister }: TrainingDetailModalProps) {
  const handleDownloadBooklet = async () => {
    await generateTrainingProposalPDF(training)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-5">
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-3xl font-bold pr-12 leading-tight" style={{ fontSize: '28px', lineHeight: '1.4' }}>{training.title}</h2>
          <p className="text-emerald-50 mt-2" style={{ fontSize: '16px' }}>Rincian Lengkap Program Pelatihan</p>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)] px-6 py-6">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-bold text-gray-900" style={{ fontSize: '15px' }}>Waktu Pelaksanaan</h3>
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontSize: '14px', lineHeight: '1.6' }}>{training.date}</p>
              <p className="text-gray-600 mt-1" style={{ fontSize: '13px' }}>{training.duration}</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <h3 className="font-bold text-gray-900" style={{ fontSize: '15px' }}>Tempat Pelaksanaan</h3>
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontSize: '14px', lineHeight: '1.6' }}>{training.location}</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="font-bold text-gray-900" style={{ fontSize: '15px' }}>Kuota Peserta</h3>
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontSize: '14px', lineHeight: '1.6' }}>{training.seats} peserta</p>
              <p className="text-blue-600 mt-1 font-semibold" style={{ fontSize: '13px' }}>{training.available} kursi tersedia</p>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <h3 className="font-bold text-gray-900" style={{ fontSize: '15px' }}>Investasi</h3>
              </div>
              <p className="text-[10px] font-light text-gray-400 mb-0.5 italic">Mulai dari</p>
              <p className="text-gray-700 font-bold text-2xl mb-2">Rp. {training.price.split(' - ')[0].replace(/\./g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')},-</p>
              {training.priceOptions && training.priceOptions.length > 0 && (
                <div className="space-y-2 mt-3">
                  {training.priceOptions.map((option, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 border border-amber-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-900" style={{ fontSize: '14px' }}>{option.type}</p>
                          <p className="text-gray-600 text-xs mt-0.5">{option.description}</p>
                        </div>
                        <p className="font-bold text-amber-700" style={{ fontSize: '14px' }}>Rp {option.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-gray-600 mt-2" style={{ fontSize: '13px' }}>per peserta</p>
            </div>
          </div>

          {/* Materi Pelatihan */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2" style={{ fontSize: '20px' }}>
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Materi Pelatihan
            </h3>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <ul className="space-y-3">
                {training.materials.map((material, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold" style={{ fontSize: '14px' }}>{index + 1}</span>
                    <span className="text-gray-700 flex-1" style={{ fontSize: '14px', lineHeight: '1.7' }}>{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Jadwal Pelatihan */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2" style={{ fontSize: '20px' }}>
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Jadwal Pelatihan
            </h3>
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="px-5 py-4 text-left font-semibold" style={{ fontSize: '14px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>Hari</th>
                    <th className="px-5 py-4 text-left font-semibold" style={{ fontSize: '14px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>Waktu</th>
                    <th className="px-5 py-4 text-left font-semibold" style={{ fontSize: '14px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>Topik Pembahasan</th>
                  </tr>
                </thead>
                <tbody>
                  {training.schedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                      <td className="px-5 py-4 text-gray-700 font-medium" style={{ fontSize: '14px', lineHeight: '1.7', fontFamily: 'system-ui, -apple-system, sans-serif' }}>{item.day}</td>
                      <td className="px-5 py-4 text-gray-700" style={{ fontSize: '14px', lineHeight: '1.7', fontFamily: 'system-ui, -apple-system, sans-serif' }}>{item.time}</td>
                      <td className="px-5 py-4 text-gray-700" style={{ fontSize: '14px', lineHeight: '1.7', fontFamily: 'system-ui, -apple-system, sans-serif' }}>{item.topic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fasilitator */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2" style={{ fontSize: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Fasilitator
            </h3>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <ul className="space-y-3">
                {training.facilitators.map((facilitator, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 flex-1" style={{ fontSize: '14px', lineHeight: '1.7', fontFamily: 'system-ui, -apple-system, sans-serif' }}>{facilitator}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownloadBooklet}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
              style={{ fontSize: '15px', fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Unduh Booklet Proposal
            </button>
            <button
              onClick={onRegister}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-md"
              style={{ fontSize: '15px' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
