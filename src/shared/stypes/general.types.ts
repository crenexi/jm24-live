// ## Router

export type Path = {
  pathname: string;
  search: string;
  hash: string;
};

export type To = string | Partial<Path>;

// ## Text

export type TextPreset = 'display' | 'headline' | 'title' | 'body' | 'label';
export type TextSize = 'sm' | 'md' | 'lg';

// ## Buttons

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'ghost' | 'primary' | 'secondary' | 'text' | 'white' | 'danger' | 'success' // prettier-ignore
