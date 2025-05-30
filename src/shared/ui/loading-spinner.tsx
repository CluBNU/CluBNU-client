interface IProps {
  width?: number;
  color?: string;
}

export default function LoadingSpinner({ width = 10, color = 'primary' }: IProps) {
  return (
    <div
      className={`h-${width} w-${width} animate-spin rounded-full border-4 border-solid border-current border-t-transparent text-${color}`}
    />
  );
}
