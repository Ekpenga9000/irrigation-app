interface IIrrigationTimeSlotComponentProps{
    date:string; 
    time: string; 
    rule: string; 
    duration: string; 
    volume: string; 
    status:string; 
    progress:string; 
}

const IrrigationTimeSlotComponent = (
    {date, time, rule, duration, volume, status, progress}: IIrrigationTimeSlotComponentProps
) => {
  return (
    <ul className="grid grid-cols-7 text-xs font-semibold items-center text-gray-600 py-3 border-b">
      <li className="text-gray-600">{date}</li>
      <li>
        <span className="pill">{time}</span>
      </li>
      <li>
        <span className="pill">{rule}</span>
      </li>
      <li>~ {duration}</li>
      <li>{volume} l</li>
      <li>
        {status.toLowerCase() === "inactive" && <span className="pill--inactive">Inactive</span>}
        {status.toLowerCase() === "active" && <span className="pill">Active</span>}
      </li>
      <li>{progress}%</li>
    </ul>
  );
};

export default IrrigationTimeSlotComponent;
