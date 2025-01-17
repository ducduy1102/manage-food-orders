import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

const Quantity = ({
  onChange,
  value,
}: {
  onChange: (value: number) => void;
  value: number;
}) => {
  return (
    <div>
      <div className="flex gap-1 ">
        <Button
          className="w-6 h-6 p-0"
          disabled={value === 0}
          onClick={() => onChange(value - 1)}
        >
          <Minus className="w-3 h-3" />
        </Button>
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="w-8 h-6 p-1 text-center"
          value={value}
          onChange={(e) => {
            let value = e.target.value;
            const numberValue = Number(value);
            if (isNaN(numberValue)) {
              return;
            }
            onChange(numberValue);
          }}
        />
        <Button className="w-6 h-6 p-0">
          <Plus className="w-3 h-3" onClick={() => onChange(value + 1)} />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
