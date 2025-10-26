import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ProjectsGrid } from '@/components/ProjectsGrid';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="flex min-h-svh flex-col items-center gap-8 p-8">
      <Navbar />

      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Programming Concepts by Projects
      </h1>

      <ProjectsGrid />

      <Footer />
    </div>
  );
};

export default App;
