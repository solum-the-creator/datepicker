export type View = "days" | "months" | "years";

export type CalendarDisplayProps = {
  startWeekOnSunday?: boolean;
  highlightWeekends?: boolean;
  highlightHolidays?: boolean;
  holidays?: Holiday[];
  minDate?: Date;
  maxDate?: Date;
};

export type CalendarLogicProps = {
  currentMonth: number;
  currentYear: number;
  selectedDate?: Date;
  view: View;
  onMonthChange?: (month: number, year: number) => void;
  onDateSelect?: (date: Date) => void;
  onViewChange?: (view: View) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onMonthClick: () => void;
  onYearClick: () => void;
};

export type CalendarProps = CalendarDisplayProps & CalendarLogicProps;
