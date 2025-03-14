export default function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="group relative rounded-lg border p-6 hover:border-foreground/20 transition-colors">
      <div className="space-y-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
