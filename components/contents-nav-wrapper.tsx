'use client';

import { PropsWithChildren } from 'react';

const ContentsNavWrapper = ({ children }: PropsWithChildren) => {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-128px)] w-[300px] shrink-0 overflow-hidden text-sm xl:block">
      <div
        className="w-inherit overflow-hidden"
        onWheel={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </aside>
  );
};

export { ContentsNavWrapper };