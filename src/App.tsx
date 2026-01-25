
import { Lock, Linkedin } from 'lucide-react';
import Capabilities from './components/Capabilities';
import historicalDeployments from './assets/historical-deployments.png';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-platinum font-sans selection:bg-oldgold selection:text-obsidian bg-grid">

      <header className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-oldgold rotate-45"></div>
          <span className="font-sans text-xs tracking-[0.2em] font-medium text-platinum">ROIALS MARTECH</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.roials.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-widest text-white/30 hover:text-white transition-colors uppercase"
          >
            ROIALS CAPITAL
          </a>

          {/* Subtle separator */}
          <div className="h-4 w-px bg-white/10"></div>

          <button className="flex items-center gap-2 border border-oldgold/30 px-4 py-2 text-[10px] tracking-[0.1em] text-oldgold hover:bg-oldgold/5 transition-colors">
            <Lock className="w-3 h-3" />
            CLIENT LOGIN
          </button>
        </div>
      </header>

      {/* HERO SECTION - Institutional Layout */}
      <section className="relative h-screen min-h-[800px] flex items-center px-8 md:px-16 pt-20">

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* LEFT COLUMN: Main Headline */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-8 bg-white/5 px-3 py-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] tracking-widest text-gray-400 uppercase font-medium">System Online</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-platinum leading-tight tracking-wide mb-12">
              ENTERPRISE <br />
              <span className="italic text-gray-500 font-light">GROWTH</span> <br />
              INFRASTRUCTURE.
            </h1>
          </div>

          {/* RIGHT COLUMN: Capabilities/Description */}
          <div className="lg:col-span-4 lg:mb-4">
            <h3 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-4 font-medium">Operational Capability</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm border-l border-oldgold/30 pl-4">
              AI-Driven <strong className="text-platinum font-medium">Commercial & Origination</strong> Architecture for Roials Capital Portfolio Companies & Select Enterprise Partners.
              <br /><br />
              We build scalable revenue engines.
              <br />
              <span className="text-xs text-white/30 uppercase tracking-widest">Partner: SALESmanago</span>
            </p>
          </div>
        </div>

        {/* DATA GRID - The "Bloomberg Terminal" Look */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-obsidian/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">

            {/* METRIC 01 */}
            <div className="p-8 group hover:bg-white/5 transition-colors">
              <span className="block text-[10px] tracking-widest text-oldgold uppercase mb-2">System Benchmark 01</span>
              <div className="text-5xl font-serif text-platinum mb-2">20x</div>
              <div className="text-xs text-gray-400 tracking-wider">AVG. ROI ON IMPLEMENTATION</div>
              <div className="mt-2 text-[10px] text-gray-600 font-mono">// Audited Performance</div>
            </div>

            {/* METRIC 02 */}
            <div className="p-8 group hover:bg-white/5 transition-colors">
              <span className="block text-[10px] tracking-widest text-oldgold uppercase mb-2">System Benchmark 02</span>
              <div className="text-5xl font-serif text-platinum mb-2">+38%</div>
              <div className="text-xs text-gray-400 tracking-wider">REVENUE UPLIFT (YEAR 1)</div>
              <div className="mt-2 text-[10px] text-gray-600 font-mono">// Portfolio Average</div>
            </div>

            {/* METRIC 03 */}
            <div className="p-8 group hover:bg-white/5 transition-colors">
              <span className="block text-[10px] tracking-widest text-oldgold uppercase mb-2">System Benchmark 03</span>
              <div className="text-5xl font-serif text-platinum mb-2">ENT</div>
              <div className="text-xs text-gray-400 tracking-wider">ARCHITECTURE</div>
              <div className="mt-2 text-[10px] text-gray-600 font-mono">// Enterprise Grade Security</div>
            </div>

          </div>
        </div>

      </section>

      {/* CAPABILITIES SECTION */}
      <Capabilities />

      {/* FOOTER (Trusted Network) */}
      <footer className="border-t border-white/10 bg-black py-20 px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">

          {/* Header Label */}
          <h4 className="text-[10px] tracking-widest text-gray-500 uppercase mb-12 font-medium">
            HISTORICAL SYSTEM DEPLOYMENTS
          </h4>

          {/* Combined Logo Image with Fade Effect */}
          <div className="relative w-full max-w-5xl mx-auto mb-16">
            <img
              src={historicalDeployments}
              alt="Historical System Deployments"
              className="w-full h-auto object-contain grayscale opacity-50"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
              }}
            />
          </div>

        </div>

        {/* LinkedIn Footer */}
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 mt-12">
          <div className="flex justify-center items-center gap-3">
            <a
              href="https://www.linkedin.com/company/roials-martech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] tracking-widest text-gray-600 uppercase hover:text-oldgold transition-colors group"
            >
              <Linkedin className="w-3 h-3 group-hover:text-oldgold transition-colors" />
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
