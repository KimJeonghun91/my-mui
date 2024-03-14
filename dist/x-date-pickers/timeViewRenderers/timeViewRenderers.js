import * as React from 'react';
import { TimeClock } from '../TimeClock';
import { DigitalClock } from '../DigitalClock';
import { MultiSectionDigitalClock } from '../MultiSectionDigitalClock';
import { isTimeView } from '../internals/utils/time-utils';
import { jsx as _jsx } from "react/jsx-runtime";
export const renderTimeViewClock = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  ampmInClock,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
}) => /*#__PURE__*/_jsx(TimeClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(isTimeView),
  value: value,
  defaultValue: defaultValue,
  referenceDate: referenceDate,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  shouldDisableClock: shouldDisableClock,
  minutesStep: minutesStep,
  ampm: ampm,
  ampmInClock: ampmInClock,
  components: components,
  componentsProps: componentsProps,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  showViewSwitcher: showViewSwitcher,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timezone: timezone
});
export const renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => /*#__PURE__*/_jsx(DigitalClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(isTimeView),
  value: value,
  defaultValue: defaultValue,
  referenceDate: referenceDate,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  shouldDisableClock: shouldDisableClock,
  minutesStep: minutesStep,
  ampm: ampm,
  components: components,
  componentsProps: componentsProps,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timeStep: timeSteps == null ? void 0 : timeSteps.minutes,
  skipDisabled: skipDisabled,
  timezone: timezone
});
export const renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => /*#__PURE__*/_jsx(MultiSectionDigitalClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(isTimeView),
  value: value,
  defaultValue: defaultValue,
  referenceDate: referenceDate,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  shouldDisableClock: shouldDisableClock,
  minutesStep: minutesStep,
  ampm: ampm,
  components: components,
  componentsProps: componentsProps,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timeSteps: timeSteps,
  skipDisabled: skipDisabled,
  timezone: timezone
});