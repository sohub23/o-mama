export const WhyWeStarted = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out;
    }
  `;
  if (typeof document !== 'undefined' && !document.querySelector('#why-started-animation')) {
    style.id = 'why-started-animation';
    document.head.appendChild(style);
  }
  return (
    <section className="py-12 sm:py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              Why We Started <span className="text-primary">O Mama</span>
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-muted-foreground px-2 sm:px-0">
              Because everyday Bangladesh deserved something better.
            </p>
          </div>

          {/* The Problem */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-center space-y-8">
                <p className="text-sm sm:text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                  In Dhaka, people work harder than ever — long hours, tight schedules, stressful commutes.
                  <strong className="text-primary"> But when you look around for something fresh to eat… almost nothing exists.</strong>
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 my-6 sm:my-8 px-2 sm:px-0">
                  {["Offices", "Hospitals", "Universities", "Corporate Buildings"].map((place, index) => (
                    <div key={index} className="bg-secondary/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-border/50">
                      <p className="text-xs sm:text-base text-muted-foreground font-medium">{place}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm sm:text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                  You may want fresh fruit, salad, yogurt, or juice.
                  <strong className="text-primary"> But you don't get it.</strong> Not because you don't want to eat better — but because there is no hygienic option near you.
                </p>
              </div>

              <p className="text-base sm:text-xl font-bold text-primary mt-6 sm:mt-8 px-2 sm:px-0">That is the real problem.</p>
            </div>
          </div>

          {/* The Question */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-4 sm:p-8">
            <p className="text-base sm:text-2xl font-semibold text-foreground italic">
              "Why is fresh food so far away from the people who actually need it the most?"
            </p>
          </div>

          {/* The Current Reality - Infographic Style */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground">The Current Reality of Eating Healthy</h3>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline connector */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 transform -translate-x-1/2" />
              
              <div className="space-y-8">
                {[
                  { icon: "🛒", text: "Buy 1 kg of fruit", side: "left", bg: "bg-primary/10" },
                  { icon: "🏠", text: "Take it home", side: "right", bg: "bg-primary/10" },
                  { icon: "💧", text: "Wash it properly", side: "left", bg: "bg-primary/10" },
                  { icon: "🔪", text: "Cut it hygienically", side: "right", bg: "bg-primary/10" },
                  { icon: "❄️", text: "Store it safely", side: "left", bg: "bg-primary/10" },
                  { icon: "🎒", text: "Carry it the next day", side: "right", bg: "bg-primary/10" }
                ].map((step, index) => (
                  <div key={index} className={`flex items-center gap-4 ${step.side === 'right' ? 'flex-row-reverse' : ''} opacity-0 animate-fade-in-up`} style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
                    <div className={`flex-1 ${step.side === 'right' ? 'text-right' : 'text-left'}`}>
                      <div className={`${step.bg} border border-border rounded-2xl p-3 sm:p-6 hover:shadow-lg transition-all hover:scale-105 duration-300`}>
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="text-2xl sm:text-4xl">{step.icon}</span>
                          <p className="text-sm sm:text-lg font-medium text-foreground">{step.text}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="flex w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary items-center justify-center flex-shrink-0 z-10 shadow-lg">
                      <span className="text-primary-foreground font-bold text-xs sm:text-base">{index + 1}</span>
                    </div>
                    
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-4 pt-8">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No one can do this every day. Life is too fast. Work is too demanding.
              </p>
              <p className="text-2xl font-bold text-primary">
                This is the root problem we are solving.
              </p>
            </div>
          </div>

          {/* What We Want to Fix - Cleaner Design */}
          <div className="space-y-10">
            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2 sm:px-0">What We Want to Fix</h3>
              <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">Four core problems preventing healthy eating in Bangladesh</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: "🏢",
                  title: "No Hygienic Food Near Workplaces",
                  problem: "Offices, hospitals, and campuses don't offer fresh fruit, salads, or clean snacks.",
                  solution: null
                },
                {
                  icon: "🍎",
                  title: "Not Accessible in Small Portions",
                  problem: "You want one apple — you have to buy a bag. You want cut fruit — impossible unless you prepare it at home.",
                  solution: "O Mama brings ready-to-eat, hygienic portions right where you work, study, and live."
                },
                {
                  icon: "⚡",
                  title: "Nutrition Lost in Convenience",
                  problem: "People want to eat better but can't — because no system makes healthy food simple and accessible.",
                  solution: "O Mama brings fresh, convenient, hygienic food within arm's reach."
                },
                {
                  icon: "💰",
                  title: "Price Should Not Be a Barrier",
                  problem: "Healthy food shouldn't cost more.",
                  solution: "Always sell at market MRP — never premium pricing."
                }
              ].map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-card to-secondary/20 border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-lg md:text-xl font-bold text-foreground mb-3">{item.title}</h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.problem}</p>
                      {item.solution && (
                        <p className="text-sm md:text-base text-primary font-semibold mt-3 leading-relaxed">{item.solution}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* The Future - Clean Infographic */}
          <div className="space-y-8">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-center px-2 sm:px-0">A Future Where Healthy Eating is Normal</h4>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { icon: "👨‍⚕️", text: "Doctors grab fresh fruit at 3 AM between shifts" },
                { icon: "💼", text: "Bankers eat salad at 5 PM instead of cha singara" },
                { icon: "🎓", text: "Students choose yogurt over deep-fried snacks" },
                { icon: "⚡", text: "Busy people maintain real nutrition every day" }
              ].map((scenario, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-5 md:p-6 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl flex-shrink-0">{scenario.icon}</span>
                    <p className="text-sm md:text-base text-foreground leading-relaxed">{scenario.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl md:text-2xl font-bold text-center text-primary mt-8">
              O Mama helps people live healthier — without changing their lifestyle.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-6 sm:p-10 text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-4xl font-bold">🌱 Our Vision</h3>
            <p className="text-base sm:text-2xl font-semibold">
              To make Bangladesh a place where fresh and hygienic food is as easy as grabbing a bottle of water.
            </p>
            <div className="space-y-3 mt-6">
              <p className="text-xl">To build a platform that respects:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {["your time", "your health", "your lifestyle", "your daily nutritional needs"].map((value, index) => (
                  <span key={index} className="bg-primary-foreground/20 px-6 py-2 rounded-full font-semibold">
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-3xl font-bold mt-8">
              This is O Mama. <br />Fresh Food. Smart Life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
