import { landingData } from "../data/data";
import CardLanding from "./CardLanding";

const CardListLanding = () => {
  return (
    <div className="flex items-center justify-center screen-padding bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
        {landingData.map((item) => (
          <CardLanding
            Icon={item.icon}
            title={item.title}
            text={item.text}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardListLanding;
