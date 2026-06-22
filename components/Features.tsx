const features = [
    "Organic Roleplay",
    "Custom Events",
    "Faction Warfare",
    "Balanced Economy",
    "Active Admins",
    "High-Stakes PvP",
  ];
  
  export default function Features() {
    return (
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 uppercase">
            Why Play Here
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature} className="border border-zinc-800 p-8">
                <h3 className="text-xl font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }