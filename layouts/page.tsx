import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <main className="relative flex flex-1 grow flex-col py-10 lg:py-28">
      {children}
    </main>
  );
}
