
import { Lock, Server, Cpu, Activity, ShieldCheck, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-platinum font-sans selection:bg-oldgold selection:text-obsidian bg-grid overflow-hidden">

      {/* HEADER: Minimalist. Status Indicators only. */}
      <header className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center border-b border-white/5 bg-obsidian/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <span className="font-mono text-[10px] tracking-[0.2em] font-medium text-gray-500 uppercase">System Online</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-sm">
             <span className="w-1.5 h-1.5 bg-oldgold rounded-full"></span>
             <span className="text-[10px] tracking-widest text-gray-400 uppercase">v4.0.2-ALPHA</span>
          </div>

          <button className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-gray-500 hover:text-oldgold transition-colors group uppercase">
            <Lock className="w-3 h-3 group-hover:text-oldgold transition-colors" />
            Restricted Access
          </button>
        </div>
      </header>

      {/* MAIN CONTENT: Centered, imposing, minimal. */}
      <main className="relative h-screen flex flex-col justify-center items-center px-4">
        
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-oldgold/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          <div className="mb-8 flex justify-center">
            <div className="px-4 py-1 border border-white/10 bg-black/50 backdrop-blur-sm">
                <span className="text-[10px] tracking-[0.3em] text-oldgold uppercase">Internal Infrastructure</span>
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-platinum leading-none tracking-tight mb-8">
            ROIALS <span className="font-light italic text-gray-600">ALPHA</span>
          </h1>

          <p className="text-sm md:text-base text-gray-400 max-w-lg mx-auto leading-relaxed tracking-wide mb-16 border-l border-oldgold/30 pl-6 text-left">
            Operational backbone for private equity deployment. 
            <br />
            Architecting <strong className="text-platinum font-medium">deal flow</strong>, <strong className="text-platinum font-medium">agentic swarms</strong>, and <strong className="text-platinum font-medium">capital efficiency</strong>.
          </p>

          {/* SYSTEM MODULES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 dark:bg-white/5 border border-white/10">
            
            {/* MODULE 01 */}
            <div className="bg-obsidian p-8 hover:bg-white/5 transition-colors group text-left">
              <div className="flex justify-between items-start mb-4">
                <Server className="w-5 h-5 text-gray-600 group-hover:text-oldgold transition-colors" />
                <span className="text-[9px] tracking-widest text-gray-700 group-hover:text-oldgold/70">MOD 01</span>
              </div>
              <h3 className="text-sm tracking-widest text-platinum uppercase mb-2">Deal Flow</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed">Automated origination & screening architecture.</p>
            </div>

            {/* MODULE 02 */}
            <div className="bg-obsidian p-8 hover:bg-white/5 transition-colors group text-left">
              <div className="flex justify-between items-start mb-4">
                <Cpu className="w-5 h-5 text-gray-600 group-hover:text-oldgold transition-colors" />
                <span className="text-[9px] tracking-widest text-gray-700 group-hover:text-oldgold/70">MOD 02</span>
              </div>
              <h3 className="text-sm tracking-widest text-platinum uppercase mb-2">Agentic Swarms</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed">Autonomous execution of marketing & ops.</p>
            </div>

            {/* MODULE 03 */}
            <div className="bg-obsidian p-8 hover:bg-white/5 transition-colors group text-left">
              <div className="flex justify-between items-start mb-4">
                <Activity className="w-5 h-5 text-gray-600 group-hover:text-oldgold transition-colors" />
                <span className="text-[9px] tracking-widest text-gray-700 group-hover:text-oldgold/70">MOD 03</span>
              </div>
              <h3 className="text-sm tracking-widest text-platinum uppercase mb-2">Capital Deployment</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed">High-velocity resource allocation systems.</p>
            </div>

          </div>

        </div>

      </main>

      {/* FOOTER: Minimal status bar */}
      <footer className="absolute bottom-0 left-0 w-full z-50 px-8 py-6 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-600 tracking-widest uppercase bg-obsidian/90 backdrop-blur-sm">
        <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" />
                SECURE ENVIRONMENT
            </span>
             <span className="hidden md:inline text-gray-800">|</span>
            <span className="hidden md:flex items-center gap-2">
                <Zap className="w-3 h-3 text-yellow-900" />
                LOW LATENCY
            </span>
        </div>
        <div>
            ROIALS ALPHA &copy; {new Date().getFullYear()}
        </div>
      </footer>

    </div>
  );
}

export default App;
