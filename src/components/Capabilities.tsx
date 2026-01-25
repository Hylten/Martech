
export default function Capabilities() {
    return (
        <section className="relative py-32 px-8 md:px-16 border-t border-white/5 bg-obsidian">

            {/* Grid Overlay for Continuity */}
            <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* HEADER SECTION - "The Bridge" */}
                <div className="mb-24">
                    <div className="inline-flex items-center gap-2 mb-6 bg-white/5 px-3 py-1 border border-white/10">
                        <span className="w-1.5 h-1.5 bg-oldgold rounded-full"></span>
                        <span className="text-[10px] tracking-widest text-oldgold uppercase font-medium">Strategic Pivot</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl text-platinum leading-tight tracking-wide mb-8">
                        DEPLOYING <br />
                        OPERATIONAL <span className="italic text-gray-500 font-light">ALPHA.</span>
                    </h2>

                    <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed border-l border-oldgold/30 pl-6">
                        Proprietary growth infrastructure designed to accelerate Enterprise Value (EV)
                        for Roials Capital portfolio assets.
                    </p>
                </div>

                {/* CAPABILITIES GRID - "Financial Instruments" */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* CARD 1: REVENUE ARCHITECTURE */}
                    <div className="group border border-white/5 bg-white/[0.02] p-8 hover:border-oldgold/30 transition-all duration-500">
                        <div className="mb-12">
                            <span className="text-[10px] tracking-widest text-gray-500 uppercase">Instrument 01</span>
                        </div>

                        <h3 className="font-serif text-xl text-platinum mb-4 group-hover:text-oldgold transition-colors">
                            REVENUE <br /> ARCHITECTURE
                        </h3>

                        <p className="text-xs text-gray-400 leading-relaxed tracking-wide">
                            Algorithmic customer acquisition and high-velocity funnel engineering.
                        </p>
                    </div>

                    {/* CARD 2: TECHNOLOGICAL INTEGRATION */}
                    <div className="group border border-white/5 bg-white/[0.02] p-8 hover:border-oldgold/30 transition-all duration-500">
                        <div className="mb-12">
                            <span className="text-[10px] tracking-widest text-gray-500 uppercase">Instrument 02</span>
                        </div>

                        <h3 className="font-serif text-xl text-platinum mb-4 group-hover:text-oldgold transition-colors">
                            TECHNOLOGICAL <br /> INTEGRATION
                        </h3>

                        <p className="text-xs text-gray-400 leading-relaxed tracking-wide">
                            Enterprise-grade stack deployment and data modernization.
                        </p>
                    </div>

                    {/* CARD 3: COMMERCIAL ACCELERATION */}
                    <div className="group border border-white/5 bg-white/[0.02] p-8 hover:border-oldgold/30 transition-all duration-500">
                        <div className="mb-12">
                            <span className="text-[10px] tracking-widest text-gray-500 uppercase">Instrument 03</span>
                        </div>

                        <h3 className="font-serif text-xl text-platinum mb-4 group-hover:text-oldgold transition-colors">
                            COMMERCIAL <br /> ACCELERATION
                        </h3>

                        <p className="text-xs text-gray-400 leading-relaxed tracking-wide">
                            Optimizing unit economics and revenue velocity for portfolio assets pre-exit or post-acquisition.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
