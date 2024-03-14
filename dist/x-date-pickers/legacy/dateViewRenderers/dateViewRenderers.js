import * as React from 'react';
import { DateCalendar } from '../DateCalendar';
import { isDatePickerView } from '../internals/utils/date-utils';
import { jsx as _jsx } from "react/jsx-runtime";
export var renderDateViewCalendar = function renderDateViewCalendar(_ref) {
  var view = _ref.view,
    onViewChange = _ref.onViewChange,
    views = _ref.views,
    focusedView = _ref.focusedView,
    onFocusedViewChange = _ref.onFocusedViewChange,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    referenceDate = _ref.referenceDate,
    onChange = _ref.onChange,
    className = _ref.className,
    classes = _ref.classes,
    disableFuture = _ref.disableFuture,
    disablePast = _ref.disablePast,
    minDate = _ref.minDate,
    maxDate = _ref.maxDate,
    shouldDisableDate = _ref.shouldDisableDate,
    shouldDisableMonth = _ref.shouldDisableMonth,
    shouldDisableYear = _ref.shouldDisableYear,
    reduceAnimations = _ref.reduceAnimations,
    onMonthChange = _ref.onMonthChange,
    monthsPerRow = _ref.monthsPerRow,
    onYearChange = _ref.onYearChange,
    yearsPerRow = _ref.yearsPerRow,
    defaultCalendarMonth = _ref.defaultCalendarMonth,
    components = _ref.components,
    componentsProps = _ref.componentsProps,
    slots = _ref.slots,
    slotProps = _ref.slotProps,
    loading = _ref.loading,
    renderLoading = _ref.renderLoading,
    disableHighlightToday = _ref.disableHighlightToday,
    readOnly = _ref.readOnly,
    disabled = _ref.disabled,
    showDaysOutsideCurrentMonth = _ref.showDaysOutsideCurrentMonth,
    dayOfWeekFormatter = _ref.dayOfWeekFormatter,
    sx = _ref.sx,
    autoFocus = _ref.autoFocus,
    fixedWeekNumber = _ref.fixedWeekNumber,
    displayWeekNumber = _ref.displayWeekNumber,
    timezone = _ref.timezone;
  return /*#__PURE__*/_jsx(DateCalendar, {
    view: view,
    onViewChange: onViewChange,
    views: views.filter(isDatePickerView),
    focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
    onFocusedViewChange: onFocusedViewChange,
    value: value,
    defaultValue: defaultValue,
    referenceDate: referenceDate,
    onChange: onChange,
    className: className,
    classes: classes,
    disableFuture: disableFuture,
    disablePast: disablePast,
    minDate: minDate,
    maxDate: maxDate,
    shouldDisableDate: shouldDisableDate,
    shouldDisableMonth: shouldDisableMonth,
    shouldDisableYear: shouldDisableYear,
    reduceAnimations: reduceAnimations,
    onMonthChange: onMonthChange,
    monthsPerRow: monthsPerRow,
    onYearChange: onYearChange,
    yearsPerRow: yearsPerRow,
    defaultCalendarMonth: defaultCalendarMonth,
    components: components,
    componentsProps: componentsProps,
    slots: slots,
    slotProps: slotProps,
    loading: loading,
    renderLoading: renderLoading,
    disableHighlightToday: disableHighlightToday,
    readOnly: readOnly,
    disabled: disabled,
    showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
    dayOfWeekFormatter: dayOfWeekFormatter,
    sx: sx,
    autoFocus: autoFocus,
    fixedWeekNumber: fixedWeekNumber,
    displayWeekNumber: displayWeekNumber,
    timezone: timezone
  });
};