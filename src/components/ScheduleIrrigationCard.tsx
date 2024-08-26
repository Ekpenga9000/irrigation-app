import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


const ScheduleIrrigationCard = () => {
  return (
    <div className="card">
      <h4 className="font-semibold mb-4">Irrigation status</h4>
      <div className="flex items-center justify-between mb-4">
        <Label htmlFor="manual-irrigation" className="text-lg">
          Turn on manual Irrigation
        </Label>
        <Switch id="manual-irrigation" />
      </div>
    </div>
  );
};

export default ScheduleIrrigationCard;
