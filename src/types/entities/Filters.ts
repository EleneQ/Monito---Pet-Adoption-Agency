export interface FilterOptions {
  genders: ["male", "female"];
  colors: {
    apricot: string;
    black: string;
    tricolor: string;
    silver: string;
    tan: string;
  };
  sizes: ["small", "medium", "large"];
}

export interface Filters {
  gender: string;
  colors: string[];
  size: string;
  sort: string;
}
