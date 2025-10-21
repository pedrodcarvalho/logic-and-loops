import { Link } from 'react-router-dom';

import { useUsers, type User } from '@/api/example';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { increment, decrement } from '@/store/slices/exampleSlice';

const App: React.FC = (): React.ReactElement => {
  const count: number = useAppSelector((state) => state.exampleSlice.value);
  const dispatch = useAppDispatch();

  const {
    data: users,
    isLoading,
    error,
    refetch,
  }: {
    data: User[] | undefined;
    isLoading: boolean;
    error: Error | null;
    refetch: () => void;
  } = useUsers();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 p-8">
      <div className="absolute top-4 right-4">
        <Link to="/about">
          <Button variant="ghost">About</Button>
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-center">All Libraries Demo</h1>
        <Badge variant="secondary" className="mx-auto block w-fit">
          Redux + React Query + Axios
        </Badge>
      </div>

      <Separator className="w-full max-w-2xl" />

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Redux Counter</CardTitle>
          <CardDescription>State management with Redux Toolkit</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="text-4xl font-mono font-bold">{count}</div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => dispatch(decrement())}>
              Decrement
            </Button>
            <Button variant="default" onClick={() => dispatch(increment())}>
              Increment
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>React Query + Axios</CardTitle>
          <CardDescription>Fetching data from external API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" onClick={() => refetch()} className="w-full">
            Fetch Users
          </Button>

          {isLoading && (
            <div className="space-y-2">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error instanceof Error ? error.message : 'Failed to fetch users'}
              </AlertDescription>
            </Alert>
          )}

          {users && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="default">{users.length} users</Badge>
                <span className="text-sm text-muted-foreground">Showing first 5 results</span>
              </div>
              <Separator />
              <div className="space-y-3 max-h-96 overflow-auto">
                {users.slice(0, 5).map((user: User) => (
                  <Card key={user.id}>
                    <CardContent className="pt-6">
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-muted-foreground">
                        @{user.username} • {user.email}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
