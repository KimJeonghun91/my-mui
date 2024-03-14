import { unstable_generateUtilityClass as generateUtilityClass, unstable_generateUtilityClasses as generateUtilityClasses } from '@mui/utils';
export const getDayCalendarUtilityClass = slot => generateUtilityClass('MuiDayCalendar', slot);
export const dayPickerClasses = generateUtilityClasses('MuiDayCalendar', ['root', 'header', 'weekDayLabel', 'loadingContainer', 'slideTransition', 'monthContainer', 'weekContainer', 'weekNumberLabel', 'weekNumber']);