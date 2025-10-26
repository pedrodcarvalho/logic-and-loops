import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import {
  atomOneDark,
  atomOneLight,
  vs2015,
  dracula,
  monokai,
  tomorrow,
  github,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useAppSelector } from '@/hooks/useRedux';

import type { ThemeMode } from '@/store/slices/themeSlice';
import type { CSSProperties, FC, ReactElement } from 'react';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('cpp', cpp);

export type CodeTheme =
  | 'atomOneDark'
  | 'atomOneLight'
  | 'vs2015'
  | 'dracula'
  | 'monokai'
  | 'tomorrow'
  | 'github';

interface CodeBlockProps {
  readonly children: string;
  readonly language?: string;
  readonly showLineNumbers?: boolean;
  readonly theme?: CodeTheme;
  readonly useSystemTheme?: boolean;
}

type ThemeMapType = Record<CodeTheme, Record<string, CSSProperties>>;

const themeMap: ThemeMapType = {
  atomOneDark,
  atomOneLight,
  vs2015,
  dracula,
  monokai,
  tomorrow,
  github,
} as const;

export const CodeBlock: FC<CodeBlockProps> = ({
  children,
  language = 'javascript',
  showLineNumbers = true,
  theme,
  useSystemTheme = true,
}): ReactElement => {
  const themeMode: ThemeMode = useAppSelector((state) => state.theme.mode);

  const effectiveTheme: CodeTheme =
    theme ||
    (useSystemTheme ? (themeMode === 'dark' ? 'atomOneDark' : 'atomOneLight') : 'atomOneDark');

  const selectedTheme: Record<string, CSSProperties> = themeMap[effectiveTheme];

  return (
    <div className="rounded-lg overflow-hidden border border-border/50 shadow-lg">
      <SyntaxHighlighter
        language={language}
        style={selectedTheme}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5',
          padding: '1rem',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
