import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { jsx as _jsx } from "react/jsx-runtime";
export const TabBarItemLabel = /*#__PURE__*/React.memo(({
  color,
  label,
  labelStyle,
  icon
}) => {
  if (!label) {
    return null;
  }
  return /*#__PURE__*/_jsx(Animated.Text, {
    style: [styles.label, icon ? {
      marginTop: 0
    } : null, labelStyle, {
      color: color
    }],
    children: label
  });
});
const styles = StyleSheet.create({
  label: {
    margin: 4,
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: 'transparent'
  }
});
//# sourceMappingURL=TabBarItemLabel.js.map