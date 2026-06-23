export default function ServerStatus() {
    const stats = [
      { label: "Players", value: "48/80" },
      { label: "Map", value: "Chernarus" },
      { label: "Ping", value: "34ms" },
      { label: "Wipe", value: "12 Days" },
    ];
  
    return (
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-zinc-800 p-6">
              <p className="text-zinc-500 uppercase text-sm">{stat.label}</p>
              <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }