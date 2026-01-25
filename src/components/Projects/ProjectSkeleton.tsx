const ProjectSkeleton = () => {
  return (
    <div className="animate-pulse bg-secondary border-border rounded-[14px] border overflow-hidden">
      <div className="h-48 bg-muted" />

      <div className="p-5">
        <div className="h-4 w-2/3 bg-muted rounded mb-3" />
        <div className="h-3 w-full bg-muted rounded mb-2" />
        <div className="h-3 w-5/6 bg-muted rounded" />

        <div className="flex gap-3 mt-4">
          <div className="h-8 w-20 bg-muted rounded-lg" />
          <div className="h-8 w-20 bg-muted rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
