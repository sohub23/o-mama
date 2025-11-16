import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { StaggeredItem } from "@/components/StaggeredItem";

export const Menu = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const menuCategories = [
    {
      name: "Fresh Fruits & Cut Fruits",
      emoji: "🌱",
      description: "Daily Stocked — Your Strongest Identity",
      items: ["Apple slices", "Pear (peyara) slices", "Guava slices", "Papaya cups", "Pineapple cups", "Watermelon cups", "Mixed seasonal fruit cups"]
    },
    {
      name: "Fresh Healthy Salads",
      emoji: "🥗",
      description: "Premium + Nutritious",
      items: ["Mixed vegetable salad", "Chicken salad (light, low-cal)", "Egg salad cup", "Veggie salad (cucumber, carrot, tomato, lettuce)", "Protein salad (egg + chicken + greens)", "Fruit salad bowl", "Yogurt parfait (yogurt + granola + honey)"]
    },
    {
      name: "Dairy & Probiotics",
      emoji: "🍶",
      description: "Long Shelf Life, Perfect for Chillers",
      items: ["Aarong Doi", "Plain yogurt", "Sweet yogurt", "Greek yogurt", "Lassi / Matha (buttermilk)", "Flavoured yogurt drink"]
    },
    {
      name: "Chilled Beverages",
      emoji: "🥤",
      description: "Healthy First Approach",
      items: ["Water bottles", "Coconut water", "Vitamin water", "Lemon water", "Fresh juice (chilled safe-pack)", "Small juice boxes", "Iced tea", "Cold coffee"]
    },
    {
      name: "Ready-to-Eat Chilled Meals",
      emoji: "🍱",
      description: "Safe When Refrigerated",
      items: ["Chicken sandwich (sealed pack)", "Tuna sandwich", "Egg sandwich", "Veggie wrap", "Chicken wrap", "Paratha roll (chilled safe)", "Small pasta cups (cold pasta)", "Khichuri cup"]
    },
    {
      name: "Nutrition & Energy",
      emoji: "💪",
      description: "Perfect for Office + Hospital",
      items: ["Protein bars", "Energy bars", "Trail mix", "Dry fruits (dates, nuts)", "Granola tubs", "High-protein yogurt packs", "Electrolyte drinks (small)"]
    },
    {
      name: "Bottom Rack: Regular Snacks & Drinks",
      emoji: "🍫",
      description: "Flexibility Rack for Common Items",
      items: ["Chips (small packs)", "Biscuits", "Chanachur (small)", "Ruchi Jhal Muri", "Pran Dal Bhaja", "Mini chocolate bars"]
    },
    {
      name: "Become Our Food Supplier",
      emoji: "🤝",
      description: "Partner with O Mama",
      items: ["Supply fresh, quality food items", "Reach thousands of customers daily", "Guaranteed payment terms", "Brand visibility across locations"],
      isSupplier: true
    },
    {
      name: "Become a Branding Partner",
      emoji: "🎯",
      description: "Promote Your Brand with O Mama",
      items: ["Launch your food products in our machines", "Sticker branding on machine exterior", "Digital signage in app & dashboard", "Targeted food promotion campaigns"],
      isSupplier: true
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What's Inside Our <span className="text-primary">Smart Fridges</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh, affordable, and diverse — stocked daily to match your taste and needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <StaggeredItem key={category.name} index={index}>
              <Card className={`hover:shadow-lg transition-all duration-300 border-2 hover:border-primary ${category.isSupplier ? 'bg-accent/5 border-accent' : ''}`}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${category.isSupplier ? 'bg-accent/10' : 'bg-primary/10'}`}>
                    {category.emoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                    {category.description && (
                      <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className={`mt-0.5 ${category.isSupplier ? 'text-accent' : 'text-primary'}`}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {category.isSupplier && (
                  <Button 
                    className="w-full mt-4 group" 
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                  >
                    {category.name === "Become a Branding Partner" ? "Become a Partner" : "Become a Supplier"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </CardContent>
            </Card>
            </StaggeredItem>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-full">
            <span className="text-2xl">💡</span>
            <p className="text-sm font-medium">
              <span className="font-bold text-foreground">Custom menus available!</span> Tell us what your team loves, and we'll stock it.
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            All products sold at <strong className="text-foreground">MRP (Market Retail Price)</strong> — no markup, complete transparency
          </p>
        </div>
      </div>
    </section>
  );
};
