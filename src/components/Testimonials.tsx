import CarouselCard from "./CarouselCard";
import { testimonials } from "../data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <div className="screen-padding bg-gray-100">
      <div className="text-center mb-8">
        <h3 className="font-bold text-4xl mb-4">What Our Customers Say</h3>
        <p className="text-lg text-zinc-700">
          Hear from real customers who have transformed their gardens with our
          smart irrigation system.
        </p>
      </div>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-[250px] md:w-full max-w-sm lg:max-w-lg">
          <CarouselContent className="flex items-center">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <CarouselCard
                  key={testimonial.id}
                  name={testimonial.name}
                  occupation={testimonial.occupation}
                  text={testimonial.text}
                  src={testimonial.src}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
