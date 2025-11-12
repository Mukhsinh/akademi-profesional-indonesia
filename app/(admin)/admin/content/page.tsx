'use client'

import { useState } from 'react'
import HeroSlidesManager from '@/components/admin/HeroSlidesManager'
import ServicesManager from '@/components/admin/ServicesManager'
import ContactInquiriesManager from '@/components/admin/ContactInquiriesManager'
import ContactInfoManager from '@/components/admin/ContactInfoManager'

type TabType = 'hero' | 'services' | 'inquiries' | 'contact-info'

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState<TabType>('hero')

  const tabs = [
    { id: 'hero', label: 'Hero Slides', icon: '🖼️' },
    { id: 'services', label: 'Layanan', icon: '⚙️' },
    { id: 'inquiries', label: 'Kontak Masuk', icon: '📧' },
    { id: 'contact-info', label: 'Info Kontak', icon: '📞' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Kelola Konten Website</h1>
        <p className="mt-1 text-sm text-gray-500">
          Kelola semua konten yang ditampilkan di website
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'hero' && <HeroSlidesManager />}
        {activeTab === 'services' && <ServicesManager />}
        {activeTab === 'inquiries' && <ContactInquiriesManager />}
        {activeTab === 'contact-info' && <ContactInfoManager />}
      </div>
    </div>
  )
}
