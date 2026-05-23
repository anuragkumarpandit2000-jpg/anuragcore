import React, { useMemo, useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');
  const [transition, setTransition] = useState(inactiveTransition);

  const style = useMemo(
    () => ({
      transform,
      transition,
      willChange: 'transform' as const,
    }),
    [transform, transition],
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const xDistance = event.clientX - (bounds.left + bounds.width / 2);
    const yDistance = event.clientY - (bounds.top + bounds.height / 2);

    const isWithinPadding =
      event.clientX >= bounds.left - padding &&
      event.clientX <= bounds.right + padding &&
      event.clientY >= bounds.top - padding &&
      event.clientY <= bounds.bottom + padding;

    if (!isWithinPadding) {
      setTransition(inactiveTransition);
      setTransform('translate3d(0, 0, 0)');
      return;
    }

    setTransition(activeTransition);
    setTransform(`translate3d(${xDistance / strength}px, ${yDistance / strength}px, 0)`);
  };

  const handlePointerLeave = () => {
    setTransition(inactiveTransition);
    setTransform('translate3d(0, 0, 0)');
  };

  return (
    <div ref={ref} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} style={style}>
      {children}
    </div>
  );
}
