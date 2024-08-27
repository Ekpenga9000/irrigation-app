import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reduxState/store";
import {
  turnOnIrrigation,
  turnOffIrrigation,
} from "@/reduxState/irrigationSlice/irrigationSlice";
import { toast } from "react-hot-toast";

const ScheduleIrrigationCard = () => {
  const { isIrrigationOn } = useSelector(
    (state: RootState) => state.irrigation
  );
  const dispatch = useDispatch();

  const toggleIrrigation = () => {
    if (!isIrrigationOn) {
      dispatch(turnOnIrrigation());
      toast.success("Irrigation turned on");
    } else {
      dispatch(turnOffIrrigation());
      toast.success("Irrigation turned off");
    }
  };
  return (
    <div className="card">
      <h4 className="font-semibold mb-4">Irrigation status</h4>
      <div className="flex items-center justify-between mb-4">
        <Label htmlFor="manual-irrigation" className="text-lg">
          {!isIrrigationOn
            ? "Turn on manual Irrigation"
            : "Turn off manual Irrigation"}
        </Label>
        <Switch
          id="manual-irrigation"
          checked={isIrrigationOn}
          onCheckedChange={toggleIrrigation}
        />
      </div>
    </div>
  );
};

export default ScheduleIrrigationCard;
