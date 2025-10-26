import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

import type { FC, ReactElement } from 'react';

interface MathProps {
  readonly children: string;
  readonly block?: boolean;
}

export const Math: FC<MathProps> = ({ children, block = false }): ReactElement => {
  if (block) {
    return <BlockMath math={children} />;
  }
  return <InlineMath math={children} />;
};
