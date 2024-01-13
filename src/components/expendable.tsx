'use client';

import { useState } from 'react';

export const Expendable: React.FC<{
  alwaysVisible: React.ReactNode;
  children: React.ReactNode;
}> = ({ alwaysVisible, children }) => {
  const [isExpended, setIsExpended] = useState(false);

  return (
    <div className="flex flex-col gap-2 hyphens-auto">
      {alwaysVisible}
      {isExpended && children}

      <button
        className="w-fit font-bold transition-opacity hover:opacity-65"
        onClick={() => setIsExpended((value) => !value)}
      >
        <span>{isExpended ? 'Kevesebb' : 'Több...'}</span>
      </button>
    </div>
  );
};
