import { FiClock } from "react-icons/fi";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import IrrigationTimeSlotComponent from "./IrrigationTimeSlotComponent";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { IoAdd } from "react-icons/io5";
import CreateIrrigationSchedule from "./CreateIrrigationSchedule";

const ScheduleComponent = () => {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <ul className="flex items-center gap-2">
          <li className="text-orange-400 bg-gray-100 p-2 rounded-full">
            <FiClock />
          </li>
          <li className="font-semibold">Irrigation Schedules</li>
        </ul>

        <div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-teal-900 text-sm flex items-center border-b border-teal-900">
                <IoAdd />
                Create
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] px-4">
              <CreateIrrigationSchedule />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <ul className="hidden lg:grid grid-cols-7 text-xs font-semibold text-gray-600 py-2 border-b gap-2">
        <li>Start day</li>
        <li>Start time</li>
        <li>End rule</li>
        <li>Duration</li>
        <li>Volume</li>
        <li>Status</li>
        <li>Progess</li>
      </ul>

      <ScrollArea className="w-[99%] h-[15rem] whitespace-nowrap rounded-md py-2">
        <IrrigationTimeSlotComponent
          date="9 Nov"
          time="13:00"
          rule="30 min"
          duration="30 min"
          volume="100"
          status="Active"
          progress="50"
        />
        <IrrigationTimeSlotComponent
          date="8 Nov"
          time="13:00"
          rule="3000 l"
          duration="65 min"
          volume="3000"
          status="Inactive"
          progress="100"
        />
        <IrrigationTimeSlotComponent
          date="8 Nov"
          time="13:00"
          rule="3000 l"
          duration="65 min"
          volume="3000"
          status="Inactive"
          progress="100"
        />
        <IrrigationTimeSlotComponent
          date="8 Nov"
          time="13:00"
          rule="3000 l"
          duration="65 min"
          volume="3000"
          status="Inactive"
          progress="100"
        />
        <IrrigationTimeSlotComponent
          date="8 Nov"
          time="13:00"
          rule="3000 l"
          duration="65 min"
          volume="3000"
          status="Inactive"
          progress="100"
        />
        <IrrigationTimeSlotComponent
          date="8 Nov"
          time="13:00"
          rule="3000 l"
          duration="65 min"
          volume="3000"
          status="Inactive"
          progress="100"
        />
        <IrrigationTimeSlotComponent
          date="8 Nov"
          time="13:00"
          rule="3000 l"
          duration="65 min"
          volume="3000"
          status="Inactive"
          progress="100"
        />
        <IrrigationTimeSlotComponent
          date="8 Nov"
          time="13:00"
          rule="3000 l"
          duration="65 min"
          volume="3000"
          status="Inactive"
          progress="100"
        />
        <IrrigationTimeSlotComponent
          date="8 Nov"
          time="13:00"
          rule="3000 l"
          duration="65 min"
          volume="3000"
          status="Inactive"
          progress="100"
        />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ScheduleComponent;
