import CarouselCard from "./CarouselCard";

const Testimonials = () => {
  return ( 
    <div className="screen-padding bg-gray-100">
      <div className="text-center">
        <h3 className="font-bold text-4xl mb-4">What Our Customers Say</h3>
        <p className="text-lg text-zinc-700">
          Hear from real customers who have transformed their gardens with our
          smart irrigation system.
        </p>
      </div>
      <div>
        <CarouselCard/>
      </div>
    </div>
  );
};

export default Testimonials;
