import { RotateCcw, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';

import type { FC, ReactElement } from 'react';

type Player = 'X' | 'O' | null;
type WinningLine = readonly [number, number, number] | null;
type BoardState = readonly Player[];
type AiPlayer = 'X' | 'O';

interface WinnerResult {
  readonly winner: Player;
  readonly line: WinningLine;
}

const calculateWinner = (squares: BoardState): WinnerResult => {
  const lines: readonly (readonly [number, number, number])[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ] as const;

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }

  return { winner: null, line: null };
};

const minimax = (
  board: Player[],
  depth: number,
  isMaximizing: boolean,
  aiPlayer: AiPlayer,
): number => {
  const humanPlayer: AiPlayer = aiPlayer === 'X' ? 'O' : 'X';
  const { winner }: WinnerResult = calculateWinner(board);

  if (winner === aiPlayer) return 10 - depth;
  if (winner === humanPlayer) return depth - 10;
  if (board.every(square => square !== null)) return 0;

  if (isMaximizing) {
    let bestValue: number = -Infinity;
    for (let i: number = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = aiPlayer;
        const value: number = minimax(board, depth + 1, false, aiPlayer);
        board[i] = null;
        bestValue = Math.max(bestValue, value);
      }
    }
    return bestValue;
  } else {
    let bestValue: number = Infinity;
    for (let i: number = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = humanPlayer;
        const value: number = minimax(board, depth + 1, true, aiPlayer);
        board[i] = null;
        bestValue = Math.min(bestValue, value);
      }
    }
    return bestValue;
  }
};

const findBestMove = (board: BoardState, aiPlayer: AiPlayer): number => {
  let bestValue: number = -Infinity;
  let bestMove: number = -1;

  for (let i: number = 0; i < board.length; i++) {
    if (!board[i]) {
      const boardCopy: Player[] = [...board];
      boardCopy[i] = aiPlayer;
      const moveValue: number = minimax(boardCopy, 0, false, aiPlayer);

      if (moveValue > bestValue) {
        bestValue = moveValue;
        bestMove = i;
      }
    }
  }

  return bestMove;
};

export const TicTacToe: FC = (): ReactElement => {
  const [squares, setSquares] = useState<Player[]>(Array<Player>(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [isAiMode, setIsAiMode] = useState<boolean>(false);
  const [isAiThinking, setIsAiThinking] = useState<boolean>(false);
  const [aiPlayer, sitAiPlayer] = useState<AiPlayer>('X');

  const { winner, line: winningLine }: WinnerResult = calculateWinner(squares);
  const isBoardFull: boolean = squares.every((square: Player): boolean => square !== null);
  const isDraw: boolean = !winner && isBoardFull;

  const playerSymbol: AiPlayer = aiPlayer === 'X' ? 'O' : 'X';
  const isAiTurn: boolean =
    isAiMode && ((isXNext && aiPlayer === 'X') || (!isXNext && aiPlayer === 'O'));

  useEffect((): void => {
    if (isAiTurn && !winner && !isDraw && !isAiThinking) {
      setIsAiThinking(true);
      setTimeout((): void => {
        const bestMove: number = findBestMove(squares, aiPlayer);
        if (bestMove !== -1) {
          const newSquares: Player[] = squares.slice();
          newSquares[bestMove] = aiPlayer;
          setSquares(newSquares);
          setIsXNext(!isXNext);
        }
        setIsAiThinking(false);
      }, 500);
    }
  }, [isAiTurn, winner, isDraw, squares, isAiThinking, aiPlayer, isXNext]);

  const handleClick = (index: number): void => {
    if (squares[index] || winner || isAiThinking) {
      return;
    }

    if (isAiMode && isAiTurn) {
      return;
    }

    const newSquares: Player[] = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const resetGame = (): void => {
    setSquares(Array<Player>(9).fill(null));
    const randomStart: boolean = Math.random() < 0.5;
    setIsXNext(randomStart);
    setIsAiThinking(false);

    if (isAiMode) {
      const randomPlayer: AiPlayer = Math.random() < 0.5 ? 'X' : 'O';
      sitAiPlayer(randomPlayer);
    }
  };

  const handleToggleAi = (pressed: boolean): void => {
    setIsAiMode(pressed);
    if (pressed) {
      const randomPlayer: AiPlayer = Math.random() < 0.5 ? 'X' : 'O';
      sitAiPlayer(randomPlayer);
    }
    setSquares(Array<Player>(9).fill(null));
    const randomStart: boolean = Math.random() < 0.5;
    setIsXNext(randomStart);
    setIsAiThinking(false);
  };

  const getStatusMessage = (): string => {
    if (winner) {
      if (isAiMode) {
        return winner === aiPlayer ? 'Ai Wins!' : 'You Win!';
      }
      return `Winner: ${winner}`;
    }
    if (isDraw) {
      return "It's a Draw!";
    }
    if (isAiMode) {
      if (isAiThinking) {
        return 'AI is thinking...';
      }
      return isAiTurn ? `AI is playing (${aiPlayer})` : `Your turn (${playerSymbol})`;
    }
    return `Next player: ${isXNext ? 'X' : 'O'}`;
  };

  const getSquareColor = (value: Player): string => {
    if (value === 'X') return 'text-blue-400';
    if (value === 'O') return 'text-red-400';
    return '';
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <div className="text-center flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <h2 className="text-xl sm:text-2xl font-bold flex-1 min-w-0">
                  {getStatusMessage()}
                </h2>
                <Toggle
                  aria-label="Toggle AI opponent"
                  size="lg"
                  variant="outline"
                  className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-400 shrink-0"
                  pressed={isAiMode}
                  onPressedChange={handleToggleAi}
                >
                  <Bot />
                  AI Opponent
                </Toggle>
              </div>
              {winner && (
                <p className="text-muted-foreground mt-3 text-center text-sm sm:text-base px-2">
                  {isAiMode
                    ? winner === aiPlayer
                      ? '🤖 The AI won this time!'
                      : '🎉 Congratulations! You beat the AI!'
                    : `🎉 Congratulations! Player ${winner} wins!`}
                </p>
              )}
              {isDraw && (
                <p className="text-muted-foreground mt-3 text-center text-sm sm:text-base px-2">
                  🤝 {isAiMode ? "Well played! It's a draw!" : 'Well played by both players!'}
                </p>
              )}
            </div>

            <div className="relative grid grid-cols-3 gap-2 aspect-square max-w-sm mx-auto">
              {squares.map((value, index) => {
                const isWinningSquare = winningLine?.includes(index);
                return (
                  <button
                    key={index}
                    onClick={() => handleClick(index)}
                    disabled={!!value || !!winner || isAiThinking || isAiTurn}
                    className={`
                    aspect-square border-2 rounded-lg text-4xl font-bold
                    transition-all duration-200
                    ${value ? 'border-primary' : 'border-muted-foreground/20'}
                    ${!value && !winner && !isAiTurn && !isAiThinking ? 'hover:border-primary hover:bg-primary/5' : ''}
                    ${value ? 'cursor-default' : winner || isAiThinking || isAiTurn ? 'cursor-not-allowed' : 'cursor-pointer'}
                    ${getSquareColor(value)}
                    ${isAiThinking && !value ? 'opacity-50' : ''}
                    ${isWinningSquare ? 'bg-primary/10' : ''}
                    disabled:opacity-50
                  `}
                  >
                    {value}
                  </button>
                );
              })}

              {winningLine && (
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                    <line
                      x1={`${(winningLine[0] % 3) * 33.33 + 16.665}%`}
                      y1={`${Math.floor(winningLine[0] / 3) * 33.33 + 16.665}%`}
                      x2={`${(winningLine[2] % 3) * 33.33 + 16.665}%`}
                      y2={`${Math.floor(winningLine[2] / 3) * 33.33 + 16.665}%`}
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="text-yellow-400 animate-in fade-in zoom-in duration-500"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <Button onClick={resetGame} variant="outline" size="lg" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                New Game
              </Button>
            </div>

            <div className="text-center text-xs sm:text-sm text-muted-foreground space-y-1 px-2">
              {isAiMode ? (
                <>
                  <p>
                    You are player {playerSymbol} - AI is player {aiPlayer}
                  </p>
                  <p>The AI uses the minimax algorithm (unbeatable!)</p>
                </>
              ) : (
                <>
                  <p>Click on any empty square to make your move</p>
                  <p>Player {isXNext ? 'X' : 'O'} goes first</p>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
