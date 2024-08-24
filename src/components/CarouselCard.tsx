// import David from "../assets/images/david.webp"; 

const CarouselCard = () => {
  return (
    <div className="w-[300px] md:w-[500px] shadow-md p-8 rounded-[1.5rem]">
      <div className="flex items-center gap-4 mb-4">
        <img src="../images/david.webp" alt="david k" className="h-[3rem] w-[3rem] object-cover rounded-full"/>
        <ul>
            <li className="text-lg font-bold">David K</li>
            <li className="text-lg text-teal-700">Sustainable Farmer</li>
        </ul>
      </div>
      <div className="card-body">
        <p className="">
          "The Smart Irrigation Dashboard has completely transformed the way we
          manage water on our farm. The real-time monitoring and automated
          scheduling have not only saved us time but also significantly reduced
          our water usage. Our crops have never been healthier, and we’ve seen a
          noticeable increase in yield. It’s a game-changer for sustainable
          farming!"
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
