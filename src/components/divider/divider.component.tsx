interface DividerProps {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}
export const Divider = ({
  width = '1',
  height = '40',
  color = 'bg-button-color-yellow',
  className = 'ml-8',
}: DividerProps): JSX.Element => {
  return <div className={`h-${height} w-${width} ${color} ${className}`} />;
};
