import * as runtime from 'react/jsx-runtime';

import { MdxBasicItems } from '@/components/mdx-basic-items';

const sharedComponents = {
  ...MdxBasicItems,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: any;
}

const MDXContent = ({ code, components, ...props }: MDXProps) => {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
};

export { MDXContent };
