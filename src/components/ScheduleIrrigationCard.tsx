import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import CreateIrrigationSchedule from "./CreateIrrigationSchedule";

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
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-orange-400 py-2 px-4 rounded-md">
              Schedule sprinlkers system
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] px-4">
           <CreateIrrigationSchedule/>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ScheduleIrrigationCard;
