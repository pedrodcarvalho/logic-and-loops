import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { FC, ReactElement } from 'react';

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

interface BackButtonProps {
  readonly size?: ButtonSize;
  readonly variant?: ButtonVariant;
  readonly className?: string;
  readonly label?: string;
}

export const BackButton: FC<BackButtonProps> = ({
  size = 'lg',
  variant = 'outline',
  className = 'w-full sm:w-auto',
  label = 'Back',
}): ReactElement => {
  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <Button size={size} variant={variant} onClick={handleClick} className={className}>
      <span className="mr-2">
        <ArrowLeft />
      </span>
      {label}
    </Button>
  );
};
