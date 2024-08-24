interface Props {
  Icon: React.ElementType;
  title: string;
  text: string;
}

const CardLanding = ({ Icon, title, text }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center mb-4">
      <div className="h-[3rem] w-[3rem] bg-orange-300 flex items-center justify-center rounded-full text-2xl">{Icon && <Icon />}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg text-zinc-700">{text}</p>
    </div>
  );
};

export default CardLanding;
