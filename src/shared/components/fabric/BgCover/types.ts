export type BgCoverProps = {
  children: React.ReactNode;
  url: string;
  imagePosition?: string;
  blanketColor?: string;
  blend?: {
    color: string;
    mode: string;
  } | null;
};

export const bgCoverDefaults: Partial<BgCoverProps> = {
  imagePosition: 'center center',
  blanketColor: 'rgba(0, 0, 0, .2)',
  blend: null,
};
