import * as React from 'react';
import { type PressableProps } from 'react-native';
export type Props = PressableProps & {
    children: React.ReactNode;
    pressColor?: string;
    pressOpacity?: number;
    href?: string;
};
/**
 * PlatformPressable provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity to handle platform differences.
 *
 * On Android, you can pass the props of TouchableNativeFeedback.
 * On other platforms, you can pass the props of TouchableOpacity.
 */
export declare function PlatformPressable({ disabled, android_ripple, pressColor, pressOpacity, style, onPress, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PlatformPressable.d.ts.map