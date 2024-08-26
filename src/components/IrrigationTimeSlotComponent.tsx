interface IIrrigationTimeSlotComponentProps {
  date: string;
  time: string;
  rule: string;
  duration: string;
  volume: string;
  status: string;
  progress: string;
}

const IrrigationTimeSlotComponent = ({
  date,
  time,
  rule,
  duration,
  volume,
  status,
  progress,
}: IIrrigationTimeSlotComponentProps) => {
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 text-xs font-semibold items-center text-gray-600 py-3 border-b gap-4 lg:gap-2">
        <li className="text-gray-600">
          <span className="irrigation-title">Start day</span>
          <span>{date}</span>
        </li>
        <li>
          <span className="irrigation-title">Start time</span>
          <span className="pill">{time}</span>
        </li>
        <li>
          <span className="irrigation-title">End rule</span>
          <span className="pill">{rule}</span>
        </li>
        <li>
          <span className="irrigation-title">Duration</span>
          <span>~ {duration}</span>
        </li>
        <li>
          <span className="irrigation-title">Volume</span>
          <span>{volume} l</span>
        </li>
        <li>
          <span className="irrigation-title">Status</span>
          {status.toLowerCase() === "inactive" && (
            <span className="pill--inactive">Inactive</span>
          )}
          {status.toLowerCase() === "active" && (
            <span className="pill">Active</span>
          )}
        </li>
        <li>
          <span className="irrigation-title">Progess</span>
          <span>{progress}%</span>
        </li>
      </ul>
    </>
  );
};

export default IrrigationTimeSlotComponent;
