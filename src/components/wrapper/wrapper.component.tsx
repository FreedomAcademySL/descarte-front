

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps): React.ReactNode => {
  return (
    <div
      className={
        'max-w-wrapper me-auto ms-auto items-center justify-center h-screen bg-primary-50'
      }
    >
      {children}
    </div>
  );
};
