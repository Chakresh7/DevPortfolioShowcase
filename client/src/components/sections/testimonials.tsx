import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MotionDiv, fadeIn } from "@/components/ui/motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({ 
    queryKey: ["/api/testimonials"]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Hear from our valued clients about their experiences working with us
          </p>
        </div>
        <MotionDiv
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials?.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="text-center p-8 bg-background border-none shadow-lg">
                    <CardContent>
                      <Quote className="w-8 h-8 mx-auto mb-6 text-primary opacity-50" />
                      <Avatar className="h-20 w-20 mx-auto mb-6 ring-4 ring-primary/20">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-lg mb-6 text-muted-foreground italic">"{testimonial.content}"</p>
                      <h4 className="font-semibold text-xl mb-1">{testimonial.name}</h4>
                      <p className="text-primary">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </MotionDiv>
      </div>
    </section>
  );
}
