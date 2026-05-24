export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Sustainability for the Web
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Calculate and Reduce Your<br />
          <span className="text-[#58a6ff]">Website Carbon Emissions</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze any website URL to measure its carbon footprint based on data transfer, energy consumption, and hosting location. Get actionable insights to go green.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start Analyzing — $10/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for free trial</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🌍", title: "Carbon Score", desc: "CO₂ per page view" },
          { icon: "📊", title: "Dashboard", desc: "Track multiple sites" },
          { icon: "⚡", title: "Optimizations", desc: "Actionable fixes" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2 uppercase tracking-wide">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$10<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to track and reduce your web carbon footprint.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited URL analyses",
              "Carbon footprint dashboard",
              "Lighthouse & performance data",
              "Sustainability PDF reports",
              "Optimization recommendations",
              "Email alerts for regressions"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How is website carbon calculated?",
              a: "We measure data transfer size, server energy mix, and network/device energy to estimate grams of CO₂ per page view using the Sustainable Web Design model."
            },
            {
              q: "Which websites can I analyze?",
              a: "Any publicly accessible URL. We use Lighthouse and WebPageTest data to gather performance metrics and compute the carbon score."
            },
            {
              q: "Can I generate compliance reports?",
              a: "Yes. Pro subscribers can export PDF sustainability reports suitable for ESG disclosures, legal compliance, and client presentations."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Website Carbon Calculator. Built for a greener web.
      </footer>
    </main>
  );
}
