export interface ProductInfo {
  id: string;
  img: string;
  name: string;
  categories: string[];
  size: "small" | "medium" | "large";
  cost: number;
  madeIn: string;
  views: number;
}
