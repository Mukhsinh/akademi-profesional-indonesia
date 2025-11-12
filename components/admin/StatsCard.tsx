type StatsCardColor = 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'indigo' | 'pink'

interface StatsCardProps {
  title: string
  value: number
  icon: string
  color: StatsCardColor
}

export default function StatsCard({ title, value, icon, color }: StatsCardProps) {
  const colorClasses: Record<StatsCardColor, string> = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    red: 'bg-red-50 text-red-600',
    orange: 'bg-orange-50 text-orange-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    pink: 'bg-pink-50 text-pink-600',
  }

  const resolvedColor = Object.prototype.hasOwnProperty.call(colorClasses, color)
    ? colorClasses[color as StatsCardColor]
    : colorClasses.blue

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div
            className={`flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full ${resolvedColor}`}
          >
            <span className="text-xl">{icon}</span>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="text-lg font-medium text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
