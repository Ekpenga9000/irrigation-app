import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const CreateIrrigationSchedule = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [weeklyScheduledDay, setWeeklyScheduledDay] = useState<string[]>([]);
  const [isWeeklySchedule, setIsWeeklySchedule] = useState(false);

  const handleWeeklyScheduledDay = (day: string) => {
    if (weeklyScheduledDay.includes(day)) {
      setWeeklyScheduledDay(weeklyScheduledDay.filter((item) => item !== day));
    } else {
      setWeeklyScheduledDay([...weeklyScheduledDay, day]);
    }
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create irrigation Schedule</DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[70vh] w-full px-2 py-4">
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" className="">
              Name *
            </Label>
            <input
              type="text"
              name="name"
              placeholder="Schedule name"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <p className="">Start</p>
            <ul className="grid grid-cols-2 items-center gap-2">
              <li className="">
                <Label htmlFor="startdate" className="">
                  Date
                </Label>
                <input
                  type="date"
                  name="startdate"
                  className="irrigation-input"
                />
              </li>
              <li>
                <Label htmlFor="starttime" className="">
                  Time
                </Label>
                <input
                  type="time"
                  name="starttime"
                  className="irrigation-input"
                />
              </li>
            </ul>
          </div>
          <div>
            <p className="">Stop irrigation condition</p>
            <Tabs defaultValue="consumption" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="consumption">Consumption</TabsTrigger>
                <TabsTrigger value="duration">Duration</TabsTrigger>
              </TabsList>
              <TabsContent value="consumption">
                <p className="mb-4">
                  Stop irrigation based on liters of water consumed
                </p>
                <Label className="consumption-amount">Amount in ltrs</Label>
                <input
                  type="number"
                  name="consumption-amount"
                  id="consumption-amount"
                  className="irrigation-input"
                />
              </TabsContent>
              <TabsContent value="duration">
                <p className="my-2">Stop irrigation after the specified time</p>
                <div className="mb-4">
                  <Label htmlFor="duration">Duration, min*</Label>
                  <input
                    type="number"
                    name="duration"
                    placeholder="Duration in minutes"
                    className="irrigation-input"
                  />
                </div>

                <div>
                  <Label htmlFor="end-date">End Date</Label>
                  <input
                    type="date"
                    name="end-date"
                    className="irrigation-input"
                    placeholder="End Date"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <Switch
              id="repeat"
              onCheckedChange={() => setIsWeeklySchedule((prev) => !prev)}
              checked={isWeeklySchedule}
            />
            <Label htmlFor="repeat">Repeat weekly</Label>
          </div>
          {isWeeklySchedule && (
            <div>
              <Label>Repeats on</Label>
              <ul className="flex items-center justify-between gap-2 my-4">
                {daysOfWeek.map((day) => (
                  <li
                    key={day}
                    className={`cube ${
                      weeklyScheduledDay.includes(day)
                        ? "bg-teal-400 shadow-sm"
                        : ""
                    }`}
                    onClick={() => handleWeeklyScheduledDay(day)}>
                    {day.charAt(0)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <DialogFooter>
          <button className="bg-teal-500 py-2 px-4 rounded-md">Create</button>
        </DialogFooter>
      </ScrollArea>
    </>
  );
};

export default CreateIrrigationSchedule;
