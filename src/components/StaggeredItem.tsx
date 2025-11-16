import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface StaggeredItemProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export const StaggeredItem = ({ children, index, className }: StaggeredItemProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const delay = index * 100; // 100ms delay between each item

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-500 ease-out',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8',
        className
      )}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};
