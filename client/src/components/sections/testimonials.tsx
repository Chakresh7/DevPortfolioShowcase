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
import type { Testimonial } from "@shared/schema";

export function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({ 
    queryKey: ["/api/testimonials"]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <MotionDiv
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <Carousel>
            <CarouselContent>
              {testimonials?.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="text-center p-8">
                    <CardContent>
                      <Avatar className="h-20 w-20 mx-auto mb-4">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-lg mb-4">{testimonial.content}</p>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </MotionDiv>
      </div>
    </section>
  );
}
