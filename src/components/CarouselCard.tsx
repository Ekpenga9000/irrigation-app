// import David from "../assets/images/david.webp";
interface ICardListLandingProps {
  src: string;
  name: string;
  occupation: string;
  text: string;
}

const CarouselCard = ({
  name,
  occupation,
  text,
  src,
}: ICardListLandingProps) => {
  return (
    // <div className="w-[300px] md:w-[450px] shadow-md p-8 rounded-[1.5rem] bg-orange-200">
    <div className="w-[250px] md:w-full shadow-md p-8 rounded-[1.5rem] bg-orange-200">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={src}
          alt={`A picture if ${name}`}
          className="h-[3rem] w-[3rem] object-cover rounded-full"
        />
        <ul>
          <li className="text-lg font-bold">{name}</li>
          <li className="text-lg text-teal-700">{occupation}</li>
        </ul>
      </div>
      <div className="card-body">
        <p className="italic">{`"${text}"`}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
