import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-muted">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Have questions or need help getting started? Our team is here to
            assist you.
          </p>
          <form className="mt-8 max-w-md mx-auto space-y-4">
            <Input type="text" placeholder="Name" className="w-full" />
            <Input type="email" placeholder="Email" className="w-full" />
            <Textarea placeholder="Message" rows={4} className="w-full" />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact; 