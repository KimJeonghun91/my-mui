import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { textFieldClasses } from '@mui/material/TextField';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var getChildTypeFromChildName = function getChildTypeFromChildName(childName) {
  if (childName.match(/^([A-Za-z]+)Range(Calendar|Clock)$/)) {
    return 'multi-panel-UI-view';
  }
  if (childName.match(/^([A-Za-z]*)(DigitalClock)$/)) {
    return 'Tall-UI-view';
  }
  if (childName.match(/^Static([A-Za-z]+)/) || childName.match(/^([A-Za-z]+)(Calendar|Clock)$/)) {
    return 'UI-view';
  }
  if (childName.match(/^MultiInput([A-Za-z]+)RangeField$/) || childName.match(/^([A-Za-z]+)RangePicker$/)) {
    return 'multi-input-range-field';
  }
  if (childName.match(/^SingleInput([A-Za-z]+)RangeField$/)) {
    return 'single-input-range-field';
  }
  return 'single-input-field';
};
var getSupportedSectionFromChildName = function getSupportedSectionFromChildName(childName) {
  if (childName.includes('DateTime')) {
    return 'date-time';
  }
  if (childName.includes('Date')) {
    return 'date';
  }
  return 'time';
};
/**
 * WARNING: This is an internal component used in documentation to achieve a desired layout.
 * Please do not use it in your application.
 */
export function DemoItem(props) {
  var label = props.label,
    children = props.children,
    component = props.component;
  var spacing;
  var sx;
  if (component && getChildTypeFromChildName(component) === 'multi-input-range-field') {
    spacing = 1.5;
    sx = _defineProperty({}, "& .".concat(textFieldClasses.root), {
      flexGrow: 1
    });
  } else {
    spacing = 1;
    sx = undefined;
  }
  return /*#__PURE__*/_jsxs(Stack, {
    direction: "column",
    alignItems: "stretch",
    spacing: spacing,
    sx: sx,
    children: [label && /*#__PURE__*/_jsx(Typography, {
      variant: "body2",
      children: label
    }), children]
  });
}

/**
 * WARNING: This is an internal component used in documentation to achieve a desired layout.
 * Please do not use it in your application.
 */
export function DemoContainer(props) {
  var children = props.children,
    components = props.components,
    sxProp = props.sx;
  var childrenTypes = new Set();
  var childrenSupportedSections = new Set();
  components.forEach(function (childName) {
    childrenTypes.add(getChildTypeFromChildName(childName));
    childrenSupportedSections.add(getSupportedSectionFromChildName(childName));
  });
  var getSpacing = function getSpacing(direction) {
    if (direction === 'row') {
      return childrenTypes.has('UI-view') || childrenTypes.has('Tall-UI-view') ? 3 : 2;
    }
    return childrenTypes.has('UI-view') ? 4 : 3;
  };
  var direction;
  var spacing;
  var sx = _extends({
    overflow: 'auto',
    // Add padding as overflow can hide the outline text field label.
    pt: 1
  }, sxProp);
  if (components.length > 2 || childrenTypes.has('multi-input-range-field') || childrenTypes.has('single-input-range-field') || childrenTypes.has('multi-panel-UI-view') || childrenTypes.has('UI-view') || childrenSupportedSections.has('date-time')) {
    direction = 'column';
    spacing = getSpacing('column');
  } else {
    direction = {
      xs: 'column',
      lg: 'row'
    };
    spacing = {
      xs: getSpacing('column'),
      lg: getSpacing('row')
    };
  }
  if (childrenTypes.has('UI-view')) {
    // noop
  } else if (childrenTypes.has('single-input-range-field')) {
    if (!childrenSupportedSections.has('date-time')) {
      sx = _extends({}, sx, _defineProperty({}, "& > .".concat(textFieldClasses.root), {
        minWidth: 300
      }));
    } else {
      sx = _extends({}, sx, _defineProperty({}, "& > .".concat(textFieldClasses.root), {
        minWidth: {
          xs: 300,
          md: 400
        }
      }));
    }
  } else if (childrenSupportedSections.has('date-time')) {
    sx = _extends({}, sx, _defineProperty({}, "& > .".concat(textFieldClasses.root), {
      minWidth: 270
    }));
  } else {
    sx = _extends({}, sx, _defineProperty({}, "& > .".concat(textFieldClasses.root), {
      minWidth: 200
    }));
  }
  return /*#__PURE__*/_jsx(Stack, {
    direction: direction,
    spacing: spacing,
    sx: sx,
    children: children
  });
}