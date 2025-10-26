import { Brain, Gamepad2, Lightbulb, Target, TrendingUp, Trophy } from 'lucide-react';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { TicTacToe } from '@/components/projects/TicTacToe';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BackButton } from '@/components/ui/back-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';
import { Math } from '@/components/ui/math';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MinimaxProject: React.FC = (): React.ReactElement => {
  return (
    <div className="flex min-h-svh flex-col items-center gap-8 p-8">
      <Navbar />

      <div className="w-full max-w-6xl space-y-6">
        <BackButton />

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Brain className="h-10 w-10 text-primary" />
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight hover:underline hover:decoration-yellow-400">
              Minimax Algorithm: The Unbeatable AI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            A comprehensive guide to the minimax decision rule used in AI, game theory, and optimal
            decision-making
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">
              <Gamepad2 className="h-3 w-3 mr-1" />
              Game Theory
            </Badge>
            <Badge variant="secondary">
              <Brain className="h-3 w-3 mr-1" />
              Artificial Intelligence
            </Badge>
            <Badge variant="secondary">
              <TrendingUp className="h-3 w-3 mr-1" />
              Decision Theory
            </Badge>
            <Badge variant="secondary">
              <Trophy className="h-3 w-3 mr-1" />
              Optimal Strategy
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="theory">Game Theory</TabsTrigger>
            <TabsTrigger value="algorithm">Algorithm</TabsTrigger>
            <TabsTrigger value="demo">Interactive Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  What is Minimax?
                </CardTitle>
                <CardDescription>
                  Understanding the core concept behind optimal decision-making
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-7">
                  <strong>Minimax</strong> (sometimes called <em>Minmax</em>, MM, or{' '}
                  <em>saddle point</em>) is a decision rule used in artificial intelligence,
                  decision theory, combinatorial game theory, statistics, and philosophy for{' '}
                  <strong>
                    minimizing the possible loss for a worst case (maximum loss) scenario
                  </strong>
                  .
                </p>

                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium mb-2">Key Principle:</p>
                  <p className="text-sm leading-relaxed">
                    When dealing with gains, minimax is referred to as <strong>"maximin"</strong> –
                    to maximize the minimum gain. The player assumes the opponent will make the best
                    possible moves to minimize the player's gain.
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Applications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <Gamepad2 className="h-4 w-4 text-primary" />
                        Game Playing
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Chess, checkers, tic-tac-toe, and other two-player zero-sum games
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <Brain className="h-4 w-4 text-primary" />
                        Decision Theory
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Risk assessment, strategic planning, and optimal decision-making under
                        uncertainty
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Economics
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Market strategy, negotiation theory, and competitive analysis
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        AI Systems
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Autonomous agents, robot planning, and adversarial search problems
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Historical Context</h4>
                  <p className="leading-7 text-muted-foreground">
                    Originally formulated for several-player zero-sum game theory, covering both
                    cases where players take alternate moves and those where they make simultaneous
                    moves, it has been extended to more complex games and general decision-making in
                    the presence of uncertainty.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="theory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Game Theory Foundations</CardTitle>
                <CardDescription>
                  Mathematical formulation of minimax in game theory
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Maximin Value</h4>
                  <p className="leading-7 text-muted-foreground">
                    The <strong>maximin value</strong> is the highest value that a player can be
                    sure to get without knowing the actions of the other players. Its formal
                    definition is:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg text-center overflow-x-auto">
                    <Math block>
                      {'\\underline{v_i} = \\max_{a_i} \\min_{a_{-i}} v_i(a_i, a_{-i})'}
                    </Math>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Where:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4">
                      <li>
                        <Math>i</Math> is the index of the player of interest
                      </li>
                      <li>
                        <Math>{'-i'}</Math> denotes all other players except player <Math>i</Math>
                      </li>
                      <li>
                        <Math>{'a_i'}</Math> is the action taken by player <Math>i</Math>
                      </li>
                      <li>
                        <Math>{'a_{-i}'}</Math> denotes the actions taken by all other players
                      </li>
                      <li>
                        <Math>{'v_i'}</Math> is the value function of player <Math>i</Math>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Minimax Value</h4>
                  <p className="leading-7 text-muted-foreground">
                    The <strong>minimax value</strong> is the smallest value that the other players
                    can force the player to receive, without knowing the player's actions. Its
                    formal definition is:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg text-center overflow-x-auto">
                    <Math block>
                      {'\\overline{v_i} = \\min_{a_{-i}} \\max_{a_i} v_i(a_i, a_{-i})'}
                    </Math>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium mb-2">Important Relationship:</p>
                    <p className="text-sm leading-relaxed mb-3">
                      For every player <Math>i</Math>, the maximin is at most the minimax:
                    </p>
                    <div className="text-center">
                      <Math>{'\\underline{v_i} \\leq \\overline{v_i}'}</Math>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Example: Two-Player Game</h4>
                  <p className="leading-7 text-muted-foreground">
                    Consider the following payoff matrix for two players (row player and column
                    player):
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3"></th>
                          <th className="border border-border p-3 font-semibold">L</th>
                          <th className="border border-border p-3 font-semibold">R</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 font-semibold bg-muted">T</td>
                          <td className="border border-border p-3 text-center">3, 1</td>
                          <td className="border border-border p-3 text-center">2, -20</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-semibold bg-muted">M</td>
                          <td className="border border-border p-3 text-center">5, 0</td>
                          <td className="border border-border p-3 text-center">-10, 1</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-semibold bg-muted">B</td>
                          <td className="border border-border p-3 text-center">-100, 2</td>
                          <td className="border border-border p-3 text-center">4, 4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="analysis">
                      <AccordionTrigger>View Detailed Analysis</AccordionTrigger>
                      <AccordionContent className="space-y-4 pt-4">
                        <div className="space-y-3">
                          <div className="p-4 border rounded-lg bg-card">
                            <h5 className="font-semibold mb-2">Row Player Analysis:</h5>
                            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                              <li>Playing T guarantees a payoff of at least 2 (min of 3 and 2)</li>
                              <li>Playing M risks a payoff of -10 (min of 5 and -10)</li>
                              <li>Playing B risks a payoff of -100 (min of -100 and 4)</li>
                              <li className="font-semibold text-foreground">
                                Maximin strategy: Play T with{' '}
                                <Math>{'\\underline{v_{row}} = 2'}</Math>
                              </li>
                            </ul>
                          </div>

                          <div className="p-4 border rounded-lg bg-card">
                            <h5 className="font-semibold mb-2">Column Player Analysis:</h5>
                            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                              <li>
                                Playing L guarantees a payoff of at least 0 (min of 1, 0, and 2)
                              </li>
                              <li>Playing R risks a payoff of -20 (min of -20, 1, and 4)</li>
                              <li className="font-semibold text-foreground">
                                Maximin strategy: Play L with{' '}
                                <Math>{'\\underline{v_{col}} = 0'}</Math>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                            <p className="text-sm font-medium">
                              If both players play their maximin strategies (T, L), the resulting
                              payoff is (3, 1).
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Zero-Sum Games</h4>
                  <p className="leading-7 text-muted-foreground">
                    In two-player zero-sum games, the minimax solution is the same as the{' '}
                    <strong>Nash equilibrium</strong>. The minimax theorem states:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg space-y-3">
                    <p className="text-sm font-medium">
                      For every two-person zero-sum game with finitely many strategies, there exists
                      a value V and a mixed strategy for each player, such that:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-4">
                      <li>Given Player 2's strategy, the best payoff possible for Player 1 is V</li>
                      <li>
                        Given Player 1's strategy, the best payoff possible for Player 2 is −V
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    The name "minimax" arises because each player minimizes the maximum payoff
                    possible for the other – since the game is zero-sum, they also minimize their
                    own maximum loss (i.e., maximize their minimum payoff).
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="algorithm" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Minimax Algorithm Implementation</CardTitle>
                <CardDescription>How minimax works in practice for game-playing AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Algorithm Overview</h4>
                  <p className="leading-7 text-muted-foreground">
                    The minimax algorithm is a <strong>recursive algorithm</strong> for choosing the
                    next move in an n-player game, usually a two-player game. It works by:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground pl-4">
                    <li>Simulating all possible moves from the current game state</li>
                    <li>
                      Recursively evaluating positions until reaching terminal states or depth limit
                    </li>
                    <li>Assigning values to positions (win/loss/draw or heuristic evaluation)</li>
                    <li>
                      Propagating values back up the tree, alternating between maximizing and
                      minimizing
                    </li>
                    <li>Selecting the move that leads to the best guaranteed outcome</li>
                  </ol>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Pseudocode</h4>
                  <CodeBlock language="python">
                    {`function minimax(node, depth, maximizingPlayer) is
    if depth = 0 or node is a terminal node then
        return the heuristic value of node

    if maximizingPlayer then
        value := −∞
        for each child of node do
            value := max(value, minimax(child, depth − 1, FALSE))
        return value
    else (* minimizing player *)
        value := +∞
        for each child of node do
            value := min(value, minimax(child, depth − 1, TRUE))
        return value

(* Initial call *)
minimax(origin, depth, TRUE)`}
                  </CodeBlock>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">How It Works</h4>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="maximizing">
                      <AccordionTrigger>Maximizing Player</AccordionTrigger>
                      <AccordionContent className="space-y-3 pt-4">
                        <p className="text-sm leading-7 text-muted-foreground">
                          The maximizing player tries to get the highest possible score. At each
                          maximizing node:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-4">
                          <li>
                            Evaluate all possible moves by recursively calling minimax for each
                            child
                          </li>
                          <li>Each child is evaluated from the minimizing player's perspective</li>
                          <li>Select the maximum value among all children</li>
                          <li>This ensures the best possible outcome for the maximizing player</li>
                        </ul>
                        <div className="bg-primary/10 p-3 rounded text-sm">
                          <strong>Example:</strong> In tic-tac-toe, if you're X and it's your turn,
                          you want to maximize your chances of winning.
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="minimizing">
                      <AccordionTrigger>Minimizing Player</AccordionTrigger>
                      <AccordionContent className="space-y-3 pt-4">
                        <p className="text-sm leading-7 text-muted-foreground">
                          The minimizing player tries to minimize the maximizing player's score. At
                          each minimizing node:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-4">
                          <li>
                            Evaluate all possible moves by recursively calling minimax for each
                            child
                          </li>
                          <li>Each child is evaluated from the maximizing player's perspective</li>
                          <li>Select the minimum value among all children</li>
                          <li>This ensures the worst possible outcome for the maximizing player</li>
                        </ul>
                        <div className="bg-primary/10 p-3 rounded text-sm">
                          <strong>Example:</strong> In tic-tac-toe, if you're O and it's your turn,
                          you want to minimize X's chances of winning (maximize your own).
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="terminal">
                      <AccordionTrigger>Terminal States & Heuristics</AccordionTrigger>
                      <AccordionContent className="space-y-3 pt-4">
                        <div className="space-y-3">
                          <div className="p-4 border rounded-lg bg-card">
                            <h5 className="font-semibold mb-2">Terminal States:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              <li>
                                <strong>Win:</strong> +∞ or +1 (maximizing player wins)
                              </li>
                              <li>
                                <strong>Loss:</strong> −∞ or −1 (minimizing player wins)
                              </li>
                              <li>
                                <strong>Draw:</strong> 0 (neither player wins)
                              </li>
                            </ul>
                          </div>

                          <div className="p-4 border rounded-lg bg-card">
                            <h5 className="font-semibold mb-2">Heuristic Evaluation:</h5>
                            <p className="text-sm text-muted-foreground mb-2">
                              For complex games where computing all moves to the end is infeasible:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Limit search depth to a fixed number of "plies" (moves)</li>
                              <li>Use an evaluation function to estimate position value</li>
                              <li>
                                Example: In chess, count material, position, king safety, etc.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="optimization">
                      <AccordionTrigger>Optimization: Alpha-Beta Pruning</AccordionTrigger>
                      <AccordionContent className="space-y-3 pt-4">
                        <p className="text-sm leading-7 text-muted-foreground">
                          The performance of minimax can be dramatically improved using{' '}
                          <strong>alpha-beta pruning</strong>:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-4">
                          <li>
                            <strong>Alpha:</strong> The best value the maximizing player can
                            guarantee
                          </li>
                          <li>
                            <strong>Beta:</strong> The best value the minimizing player can
                            guarantee
                          </li>
                          <li>If alpha ≥ beta, we can prune (skip) remaining branches</li>
                          <li>
                            Can reduce the number of nodes evaluated from <Math>{'O(b^d)'}</Math> to{' '}
                            <Math>{'O(b^{d/2})'}</Math>
                          </li>
                        </ul>
                        <div className="bg-primary/10 p-3 rounded text-sm">
                          <strong>Impact:</strong> Alpha-beta pruning allows searching twice as deep
                          in the same amount of time, without affecting the result!
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Complexity Analysis</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-3">Time Complexity</h5>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong>Without pruning:</strong>
                        </p>
                        <div className="text-center py-2">
                          <Math>{'O(b^d)'}</Math>
                        </div>
                        <p className="text-muted-foreground">
                          <strong>With alpha-beta pruning:</strong>
                        </p>
                        <div className="text-center py-2">
                          <Math>{'O(b^{d/2})'}</Math>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Where <Math>b</Math> is the branching factor and <Math>d</Math> is the
                          depth
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-3">Space Complexity</h5>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong>Recursive implementation:</strong>
                        </p>
                        <div className="text-center py-2">
                          <Math>{'O(d)'}</Math>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                          Space is proportional to the maximum depth of the recursion tree, as only
                          one path is stored at a time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Real-World Examples</h4>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-2">Tic-Tac-Toe</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Branching factor:</strong> ~5 (average legal moves)
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Depth:</strong> ~9 (maximum moves in a game)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Result:</strong> Easily solvable - perfect play always results in a
                        draw
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-2">Chess</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Branching factor:</strong> ~35 (average legal moves)
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Depth:</strong> Varies (typically 12-20 plies for strong engines)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Example:</strong> Deep Blue looked ahead at least 12 plies with
                        heuristic evaluation
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-card">
                      <h5 className="font-semibold mb-2">Go</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Branching factor:</strong> ~250 (average legal moves)
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Depth:</strong> ~150 (typical game length)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> Too complex for traditional minimax; modern AI uses
                        Monte Carlo Tree Search + neural networks
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Tic-Tac-Toe Demo</CardTitle>
                <CardDescription>
                  Play against an unbeatable AI powered by the minimax algorithm
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium mb-2">Challenge the AI:</p>
                  <p className="text-sm leading-relaxed">
                    Try to beat the AI! The minimax algorithm ensures the AI will never lose. The
                    best you can achieve is a draw if you play perfectly. Notice how the AI always
                    makes the optimal move by considering all possible future game states.
                  </p>
                </div>

                <div className="border rounded-lg p-6 bg-linear-to-br from-background to-muted">
                  <TicTacToe />
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="how-it-works">
                    <AccordionTrigger>How the AI Makes Decisions</AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <h5 className="font-semibold">Behind the Scenes:</h5>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                          <li className="pl-2">
                            <strong className="text-foreground">Simulate All Moves:</strong> For
                            each empty cell, the AI simulates placing its piece there
                          </li>
                          <li className="pl-2">
                            <strong className="text-foreground">Recursive Evaluation:</strong> For
                            each simulated move, the AI recursively evaluates all possible responses
                            from the opponent
                          </li>
                          <li className="pl-2">
                            <strong className="text-foreground">Score Assignment:</strong>
                            <ul className="list-disc list-inside pl-6 mt-1 space-y-1">
                              <li>AI wins: +10</li>
                              <li>Opponent wins: -10</li>
                              <li>Draw: 0</li>
                            </ul>
                          </li>
                          <li className="pl-2">
                            <strong className="text-foreground">Value Propagation:</strong> Scores
                            propagate back up the tree, with the AI maximizing and the opponent
                            minimizing
                          </li>
                          <li className="pl-2">
                            <strong className="text-foreground">Best Move Selection:</strong> The AI
                            chooses the move with the highest guaranteed score
                          </li>
                        </ol>

                        <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mt-4">
                          <p className="text-sm font-medium mb-2">Why It's Unbeatable:</p>
                          <p className="text-sm">
                            In tic-tac-toe, the game tree is small enough to explore completely. The
                            AI evaluates every possible game path to the end, ensuring it always
                            makes the mathematically optimal move. This guarantees it will never
                            lose when playing perfectly.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="implementation">
                    <AccordionTrigger>Implementation Concepts</AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <h5 className="font-semibold">Key Programming Concepts:</h5>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="p-3 border rounded-lg bg-card">
                            <h6 className="font-semibold text-sm mb-1">Game State Management</h6>
                            <p className="text-xs text-muted-foreground">
                              Representing the board as a 2D array and tracking whose turn it is
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg bg-card">
                            <h6 className="font-semibold text-sm mb-1">Recursion</h6>
                            <p className="text-xs text-muted-foreground">
                              The minimax function calls itself to explore the game tree
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg bg-card">
                            <h6 className="font-semibold text-sm mb-1">Win Condition Detection</h6>
                            <p className="text-xs text-muted-foreground">
                              Checking rows, columns, and diagonals for three in a row
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg bg-card">
                            <h6 className="font-semibold text-sm mb-1">Move Generation</h6>
                            <p className="text-xs text-muted-foreground">
                              Finding all legal moves (empty cells) for the current state
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg bg-card">
                            <h6 className="font-semibold text-sm mb-1">State Copying</h6>
                            <p className="text-xs text-muted-foreground">
                              Creating copies of the board to simulate moves without affecting the
                              actual game
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beyond Tic-Tac-Toe</CardTitle>
                <CardDescription>Extending minimax to more complex games</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-7 text-muted-foreground">
                  While tic-tac-toe is simple enough to solve completely, minimax principles apply
                  to much more complex games:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-card space-y-2">
                    <h5 className="font-semibold">Connect Four</h5>
                    <p className="text-sm text-muted-foreground">
                      7×6 grid with ~10^13 positions - solvable with minimax + alpha-beta pruning
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg bg-card space-y-2">
                    <h5 className="font-semibold">Checkers</h5>
                    <p className="text-sm text-muted-foreground">
                      Completely solved in 2007 using minimax with extensive databases
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg bg-card space-y-2">
                    <h5 className="font-semibold">Othello/Reversi</h5>
                    <p className="text-sm text-muted-foreground">
                      Strong engines use minimax with sophisticated position evaluation
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg bg-card space-y-2">
                    <h5 className="font-semibold">Chess</h5>
                    <p className="text-sm text-muted-foreground">
                      Modern engines combine minimax with databases, heuristics, and deep search
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="text-sm font-medium mb-2">The Future of Game AI:</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    While minimax remains fundamental, modern game AI often combines it with machine
                    learning (neural networks for position evaluation), Monte Carlo methods (for
                    games with huge branching factors like Go), and massive parallel computation.
                    AlphaGo, AlphaZero, and similar systems represent the cutting edge of this
                    evolution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Key Takeaways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="font-semibold text-sm">Core Principles:</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Assumes optimal play from both players</li>
                  <li>Minimizes maximum possible loss</li>
                  <li>Guarantees best possible outcome</li>
                  <li>Works through recursive tree search</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-sm">Practical Applications:</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Perfect play in small game spaces</li>
                  <li>Combines with heuristics for complex games</li>
                  <li>Foundation for modern game AI</li>
                  <li>Applicable beyond games to decision theory</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default MinimaxProject;
