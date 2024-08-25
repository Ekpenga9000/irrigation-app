import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate } from "@/lib/utils";

const fields = [
  {
    value: "Corn field",
    label: "Corn field",
  },
  {
    value: "Rice Field",
    label: "Rice Field",
  },
];

const DashboardHead = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const today = formatDate();
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between">
              {value
                ? fields.find((field) => field.value === value)?.label
                : "Select field..."}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search field..." className="h-9" />
              <CommandList>
                <CommandEmpty>No field found.</CommandEmpty>
                <CommandGroup>
                  {fields.map((field) => (
                    <CommandItem
                      key={field.value}
                      value={field.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}>
                      {field.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === field.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </li>
      <li>{today}</li>
    </ul>
  );
};

export default DashboardHead;
