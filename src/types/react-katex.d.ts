declare module 'react-katex' {
  import type { ComponentType, JSX } from 'react';

  export interface MathComponentProps {
    readonly math: string;
    readonly block?: boolean;
    readonly errorColor?: string;
    readonly renderError?: (error: Error | TypeError) => JSX.Element;
  }

  export const InlineMath: ComponentType<MathComponentProps>;
  export const BlockMath: ComponentType<MathComponentProps>;
}
