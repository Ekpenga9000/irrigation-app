import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FiCalendar } from "react-icons/fi";
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
        <ul className="flex items-center justify-between">
          <li className="font-semibold flex items-center gap-1"><FiCalendar /> Schedule irrigation</li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-teal-400 p-2 rounded-md text-sm">Create</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] px-4">
                <CreateIrrigationSchedule />
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScheduleIrrigationCard;
