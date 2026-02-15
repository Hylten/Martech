import { useState } from 'react';
import { Lock, Server, Cpu, Activity, ShieldCheck, Zap, X, Linkedin } from 'lucide-react';

function App() {
  const [showLogin, setShowLogin] = useState(false);

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

          <button
            onClick={() => setShowLogin(true)}
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-gray-500 hover:text-oldgold transition-colors group uppercase"
          >
            <Lock className="w-3 h-3 group-hover:text-oldgold transition-colors" />
            Restricted Access
          </button>
        </div>
      </header>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowLogin(false)}
          ></div>

          {/* Modal */}
          <div className="relative w-full max-w-sm mx-4 border border-white/10 bg-obsidian/95 backdrop-blur-md shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-platinum transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-10">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-oldgold rotate-45"></div>
                  <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Secure Access</span>
                </div>
                <h2 className="font-serif text-2xl text-platinum tracking-tight">Authentication</h2>
                <p className="text-[11px] text-gray-500 mt-2 tracking-wide">Authorized personnel only.</p>
              </div>

              {/* Form */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-[9px] tracking-[0.2em] text-gray-500 uppercase mb-2">Identifier</label>
                  <input
                    type="text"
                    placeholder="agent@roials.co"
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-platinum placeholder:text-gray-700 focus:outline-none focus:border-oldgold/50 transition-colors tracking-wide"
                  />
                </div>
                <div>
                  <label className="block text-[9px] tracking-[0.2em] text-gray-500 uppercase mb-2">Access Key</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-platinum placeholder:text-gray-700 focus:outline-none focus:border-oldgold/50 transition-colors tracking-wide"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-oldgold/40 bg-oldgold/5 py-3 text-[10px] tracking-[0.2em] text-oldgold uppercase hover:bg-oldgold/10 transition-colors mt-2"
                >
                  Authenticate
                </button>
              </form>

              <p className="text-[9px] text-gray-700 mt-6 text-center tracking-wider">
                Access restricted to authorized operators.
              </p>
            </div>
          </div>
        </div>
      )}

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
              <p className="text-[10px] text-gray-500 leading-relaxed">Autonomous orchestration of operational processes.</p>
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

      {/* FOOTER: Minimal status bar with discreet links */}
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

        <div className="flex items-center gap-5">
          {/* LinkedIn - super discreet */}
          <a
            href="https://www.linkedin.com/company/roials-alpha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-500 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-3 h-3" />
          </a>

          <span className="text-gray-800">|</span>

          {/* Roials Capital link - discreet */}
          <a
            href="https://roialscapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-500 transition-colors normal-case tracking-wider text-[9px]"
          >
            roialscapital.com
          </a>

          <span className="text-gray-800">|</span>

          <span className="text-gray-700">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>

    </div>
  );
}

export default App;
