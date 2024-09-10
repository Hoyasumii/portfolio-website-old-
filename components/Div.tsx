interface DivProps {
  children: React.ReactNode;
  className?: string;
  [args: string]: any;
}

export const Div = ({
  children,
  className,
  ...args
}: DivProps): React.ReactElement<DivProps> => (
  <div className={className} {...args}>{children}</div>
);
