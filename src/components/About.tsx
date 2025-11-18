export const About = () => {
  return <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            What is <span className="text-primary">O Mama</span>?
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">O Mama</strong> is Bangladesh's first AI-powered smart vending solution that delivers a seamless, touchless shopping experience for snacks, drinks, and ready-to-eat food.
            </p>
            
            <p>
              Powered by <strong className="text-foreground">SOHUB's intelligent computer-vision technology</strong>, our smart fridges recognize products automatically, process payments instantly, and provide 24/7 access — no cashier, no cards, no hassle.
            </p>
          </div>

          

          
        </div>
      </div>
    </section>;
};