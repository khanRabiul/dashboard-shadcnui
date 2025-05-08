'use client'
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar"; // Ensure this component supports `onChange` and `value`
import { format } from "date-fns";


const TodoList = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
        <h2 className="text-lg font-medium">Todo List</h2>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            {date ? format(date, "PP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar 
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date)
            setOpen(false)
          }}
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
        <div className="flex-flex-col gap-4">

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card><Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card><Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="text-gray-900">
              </Checkbox>
              <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</label>
            </div>
          </Card>
        </div>
      </ScrollArea>

    </div>
  );
};

export default TodoList;