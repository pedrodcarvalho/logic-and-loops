import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseTypewriterOptions {
  text?: string;
  words?: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  deleteDelay?: number;
  loop?: boolean;
  onComplete?: () => void;
}

export interface UseTypewriterReturn {
  displayText: string;
  isComplete: boolean;
  isDeleting: boolean;
  currentWord: string;
}

export const useTypewriter = ({
  text,
  words,
  speed = 100,
  deleteSpeed = 50,
  delay = 0,
  deleteDelay = 2000,
  loop = false,
  onComplete,
}: UseTypewriterOptions): UseTypewriterReturn => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<string>('');

  const wordIndexRef = useRef<number>(0);
  const charIndexRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speedRef = useRef<number>(speed);
  const deleteSpeedRef = useRef<number>(deleteSpeed);
  const delayRef = useRef<number>(delay);
  const deleteDelayRef = useRef<number>(deleteDelay);
  const loopRef = useRef<boolean>(loop);
  const onCompleteRef = useRef<(() => void) | undefined>(onComplete);

  const wordList = useRef<string[]>(words && words.length > 0 ? words : text ? [text] : []).current;

  useEffect((): void => {
    speedRef.current = speed;
    deleteSpeedRef.current = deleteSpeed;
    delayRef.current = delay;
    deleteDelayRef.current = deleteDelay;
    loopRef.current = loop;
    onCompleteRef.current = onComplete;
  }, [speed, deleteSpeed, delay, deleteDelay, loop, onComplete]);

  const getNextWord = useCallback((): string => {
    if (wordList.length === 0) return '';
    if (wordList.length === 1) return wordList[0];

    let nextIndex: number;
    do {
      nextIndex = Math.floor(Math.random() * wordList.length);
    } while (nextIndex === wordIndexRef.current && wordList.length > 1);

    wordIndexRef.current = nextIndex;
    return wordList[nextIndex];
  }, [wordList]);

  useEffect((): (() => void) | undefined => {
    if (wordList.length === 0) return;

    if (!currentWord) {
      const firstWord: string = wordList[Math.floor(Math.random() * wordList.length)];
      setCurrentWord(firstWord);
      return;
    }

    const runTypewriter = (): void => {
      if (!isDeleting && charIndexRef.current <= currentWord.length) {
        if (charIndexRef.current === 0) {
          timeoutRef.current = setTimeout((): void => {
            charIndexRef.current++;
            runTypewriter();
          }, delayRef.current);
        } else if (charIndexRef.current <= currentWord.length) {
          setDisplayText(currentWord.slice(0, charIndexRef.current));

          if (charIndexRef.current === currentWord.length) {
            setIsComplete(true);
            onCompleteRef.current?.();

            if (loopRef.current) {
              timeoutRef.current = setTimeout((): void => {
                setIsDeleting(true);
                runTypewriter();
              }, deleteDelayRef.current);
            }
          } else {
            charIndexRef.current++;
            timeoutRef.current = setTimeout(runTypewriter, speedRef.current);
          }
        }
      } else if (isDeleting && charIndexRef.current >= 0) {
        setDisplayText(currentWord.slice(0, charIndexRef.current));

        if (charIndexRef.current === 0) {
          setIsDeleting(false);
          setIsComplete(false);
          const nextWord: string = getNextWord();
          setCurrentWord(nextWord);
          charIndexRef.current = 0;
        } else {
          charIndexRef.current--;
          timeoutRef.current = setTimeout(runTypewriter, deleteSpeedRef.current);
        }
      }
    };

    runTypewriter();

    return (): void => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentWord, isDeleting, getNextWord, wordList]);

  return { displayText, isComplete, isDeleting, currentWord };
};
