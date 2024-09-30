"use client"

 

  import Spotlight, { SpotlightCard } from '@/components/UI/spotlight-card'
  
  
  function SpotlightPage() {
    return (
      <>
        <main className="relative flex flex-col overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
  
            <Spotlight className="flex flex-col gap-2 items-start group">
              {/* Card #1 */}
              <SpotlightCard>
                <div className="relative w-full h-full p-4 bg-[#fffbfa] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-white rounded-xl blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="grow">
                      <p className="text-sm text-slate-500">Quickly apply filters to refine your issues lists and create custom views.</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              {/* Card #2 */}
              <SpotlightCard>
                <div className="relative w-full h-full p-4 bg-[#FDF6F5] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-white rounded-xl blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="grow">
                      <p className="text-sm text-slate-500">Quickly apply filters to refine your issues lists and create custom views.</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              {/* Card #3 */}
              <SpotlightCard>
                <div className="relative w-full h-full p-4 bg-[#FDF6F5] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-white rounded-xl blur-[80px]"></div>
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="grow">
                      <p className="text-sm text-slate-500">Quickly apply filters to refine your issues lists and create custom views.</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              
            </Spotlight>
  
          </div>
        </main>
        
       
      </>
    )
  }

  export default SpotlightPage;
