'use client';

interface TimelinePhase {
  title: string;
  duration: string;
  description: string;
  tasks: string[];
  icon: string;
  color: {
    from: string;
    to: string;
    badge: string;
    iconBg: string;
    taskIcon: string;
  };
}

interface ModernTimelineProps {
  phases: TimelinePhase[];
  title?: string;
  subtitle?: string;
}

export default function ModernTimeline({ 
  phases, 
  title = "Timeline Schedule Implementasi",
  subtitle = "Proses implementasi yang terstruktur, transparan, dan terukur dengan milestone yang jelas di setiap tahapan"
}: ModernTimelineProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full mb-6 shadow-2xl animate-pulse">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-black text-base uppercase tracking-widest">Implementation Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        {/* Modern Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>
          
          {phases.map((phase, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === phases.length - 1;
            
            return (
              <div key={index} className={`relative ${isLast ? '' : 'mb-16 md:mb-24'}`}>
                {!isLast ? (
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Content */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:order-3'}`}>
                      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                        <div className={`inline-flex items-center gap-2 bg-${phase.color.badge} text-white px-4 py-2 rounded-full mb-4 text-sm font-bold`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {phase.duration}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{phase.title}</h3>
                        <p className="text-blue-100 mb-6 leading-relaxed">
                          {phase.description}
                        </p>
                        <ul className={`space-y-3 ${isLeft ? 'text-left' : ''}`}>
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-3 text-white">
                              <svg className={`w-5 h-5 text-${phase.color.taskIcon} mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Center Icon */}
                    <div className="relative z-10 flex-shrink-0 md:order-2">
                      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-${phase.color.from} to-${phase.color.to} flex items-center justify-center shadow-2xl border-4 border-white/90`}>
                        <div className="text-4xl filter drop-shadow-lg">{phase.icon}</div>
                      </div>
                    </div>
                    
                    {/* Right Content - Empty for alternating layout */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:order-3' : ''}`}></div>
                  </div>
                ) : (
                  // Final Phase - Centered
                  <div className="flex flex-col items-center">
                    {/* Center Icon - Final */}
                    <div className="relative z-10 flex-shrink-0 mb-8">
                      <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-${phase.color.from} to-${phase.color.to} flex items-center justify-center shadow-2xl border-4 border-white/90 animate-pulse`}>
                        <div className="text-5xl md:text-6xl filter drop-shadow-lg">{phase.icon}</div>
                      </div>
                    </div>
                    
                    {/* Final Content */}
                    <div className="max-w-2xl w-full">
                      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border-2 border-white/30 shadow-2xl text-center hover:scale-105 transition-all duration-300 hover:border-white/50">
                        <div className={`inline-flex items-center gap-2 bg-${phase.color.badge} text-white px-6 py-3 rounded-full mb-6 text-sm font-bold`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {phase.duration}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6">{phase.title}</h3>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                          {phase.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="bg-white/10 rounded-xl p-4">
                              <div className="text-3xl mb-2">{['🚀', '📊', '🎯'][taskIndex] || '✨'}</div>
                              <div className="text-white font-bold">{task}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
