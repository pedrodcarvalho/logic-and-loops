import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Skeleton } from '@/components/ui/skeleton';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="flex min-h-svh flex-col items-center gap-8 p-8">
      <Navbar />

      <Skeleton className="h-96 w-full max-w-2xl" />

      <Footer />
    </div>
  );
};

export default App;
