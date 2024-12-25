import React from 'react'

export function Stats() {
    const stats = [
      { label: "Experienced", value: "8+" },
      { label: "Teams", value: "122+" },
      { label: "Clients", value: "563+" },
      { label: "Project Done", value: "232+" },
    ]
  
    return (
      <section className="bg-[#4F8B70] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-white text-4xl lg:text-5xl font-bold">
                  {stat.value}
                </div>
                <div className="text-white/80 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  