type SourceOption = { minWidth: string; vw: number };
type SourceAttributes = { src: string; srcset: string; sizes: string };

type SourceAttributesFn = (opts: {
  sources: string[];
  breakpoints: SourceOption[];
}) => Partial<SourceAttributes>;

const sourceAttributes: SourceAttributesFn = ({ sources, breakpoints }) => {
  // prettier-ignore
  if (!sources || !breakpoints || sources.length === 0 || breakpoints.length === 0) {
    return {};
  }

  const src = sources[sources.length - 1].split(' ')[0];
  const srcset = sources.join(', ');

  const bpToSize = ({ minWidth, vw }: SourceOption): string => {
    return `(min-width: ${minWidth}) ${vw}vw`;
  };

  const sizes = `${breakpoints.map(bpToSize).join(', ')}, 95vw`;

  return { src, srcset, sizes };
};

export default sourceAttributes;
