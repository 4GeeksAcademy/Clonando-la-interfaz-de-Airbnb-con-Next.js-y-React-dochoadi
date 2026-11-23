import "react-day-picker/style.css";
import { es } from "date-fns/locale";
import { DayPicker, type DateRange } from "react-day-picker";

type DateRangePickerProps = {
  range: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
};

/** Spec visión: permite elegir entrada y salida en un calendario en español. */
export const DateRangePicker = ({ range, onChange }: DateRangePickerProps) => (
  <DayPicker
    mode="range"
    locale={es}
    lang="es"
    min={1}
    selected={range}
    onSelect={onChange}
    disabled={{ before: new Date() }}
    className="mx-auto w-fit [--rdp-accent-background-color:var(--color-rose-100)] [--rdp-accent-color:var(--color-rose-700)] [--rdp-day-button-height:36px] [--rdp-day-button-width:36px] [--rdp-day-height:36px] [--rdp-day-width:36px]"
    labels={{
      labelPrevious: () => "Mes anterior",
      labelNext: () => "Mes siguiente",
    }}
  />
);
