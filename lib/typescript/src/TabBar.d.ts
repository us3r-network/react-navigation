import * as React from 'react';
import { type PressableAndroidRippleConfig, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { type Props as IndicatorProps } from './TabBarIndicator';
import { type Props as TabBarItemProps } from './TabBarItem';
import type { Event, LocaleDirection, NavigationState, Route, Scene, SceneRendererProps, TabDescriptor } from './types';
export type Props<T extends Route> = SceneRendererProps & {
    navigationState: NavigationState<T>;
    scrollEnabled?: boolean;
    bounces?: boolean;
    activeColor?: string;
    inactiveColor?: string;
    pressColor?: string;
    pressOpacity?: number;
    options?: Record<string, TabDescriptor<T>>;
    commonOptions?: TabDescriptor<T>;
    renderIndicator?: (props: IndicatorProps<T>) => React.ReactNode;
    renderTabBarItem?: (props: TabBarItemProps<T> & {
        key: string;
    }) => React.ReactElement;
    onTabPress?: (scene: Scene<T> & Event) => void;
    onTabLongPress?: (scene: Scene<T>) => void;
    tabStyle?: StyleProp<ViewStyle>;
    indicatorStyle?: StyleProp<ViewStyle>;
    indicatorContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    direction?: LocaleDirection;
    gap?: number;
    testID?: string;
    android_ripple?: PressableAndroidRippleConfig;
};
export declare function TabBar<T extends Route>({ renderIndicator, gap, scrollEnabled, jumpTo, navigationState, position, activeColor, bounces, contentContainerStyle, inactiveColor, indicatorContainerStyle, indicatorStyle, labelStyle, onTabLongPress, onTabPress, pressColor, pressOpacity, direction, renderTabBarItem, style, tabStyle, layout: propLayout, testID, android_ripple, options, commonOptions, }: Props<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TabBar.d.ts.map