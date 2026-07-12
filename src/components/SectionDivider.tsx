interface SectionDividerProps {
  sectionNum: string;
}

export function SectionDivider({ sectionNum }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-4 mb-12 opacity-50">
      <span className="font-mono text-[10px] text-text-muted tracking-[0.3em]">{sectionNum}</span>
      <div className="flex-1 flex items-center gap-2">
        <div className="flex-1 h-px bg-gradient-to-r from-border-default to-transparent" />
        <div className="size-1 rotate-45 border border-border-default" />
      </div>
    </div>
  );
}
