interface BreadcrumbProps {
  pageName: string;
}
export const Breadcrumb = ({ pageName }: BreadcrumbProps): JSX.Element => {
  return (
    <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
      <h2 className='text-title-md2 font-semibold text-black dark:text-white'>
        {pageName}
      </h2>
    </div>
  );
};
