import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StaggeredItem } from "@/components/StaggeredItem";

export const Gallery = () => {
  const customerImages = [
    {
      url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      alt: "Customer enjoying fresh salad from O-MAMA"
    },
    {
      url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      alt: "Fresh healthy food from O-MAMA smart fridge"
    },
    {
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      alt: "Customer selecting fresh fruits"
    },
    {
      url: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7",
      alt: "Happy customer with O-MAMA products"
    },
    {
      url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      alt: "Fresh and healthy meal options"
    },
    {
      url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      alt: "Variety of healthy food choices"
    }
  ];

  const videos = [
    {
      id: "h5ylw8PR3_s",
      title: "Customer Experience 1",
      thumbnail: "https://img.youtube.com/vi/h5ylw8PR3_s/maxresdefault.jpg"
    },
    {
      id: "o8ahmgEQtZU",
      title: "Customer Experience 2",
      thumbnail: "https://img.youtube.com/vi/o8ahmgEQtZU/maxresdefault.jpg"
    },
    {
      id: "mzh978dzt_E",
      title: "Customer Experience 3",
      thumbnail: "https://img.youtube.com/vi/mzh978dzt_E/maxresdefault.jpg"
    },
    {
      id: "MOJZuKggX2c",
      title: "Customer Experience 4",
      thumbnail: "https://img.youtube.com/vi/MOJZuKggX2c/maxresdefault.jpg"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Customer <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers are saying about their O-MAMA experience. Real people, real feedback.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <StaggeredItem key={video.id} index={index}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-primary-foreground fill-current ml-1" />
                    </div>
                  </div>

                  {/* Title Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="font-semibold text-foreground text-sm">
                      {video.title}
                    </p>
                  </div>
                </div>
              </a>
            </StaggeredItem>
          ))}
        </div>

        {/* Image Carousel */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Happy <span className="text-primary">Customers</span>
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {customerImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to share your O-MAMA experience?{" "}
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary font-semibold hover:underline"
            >
              Contact us
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
