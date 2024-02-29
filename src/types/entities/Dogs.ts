export interface DogInfo {
  id: string;
  images: { id: string; img: string; desc: string }[];
  name: string;
  breed: string;
  birthdate: Date;
  gender: "male" | "female";
  size: "small" | "medium" | "large";
  colors: string[];
  sku: string;
  location: string;
}

export interface PetKnowledge {
  id: string;
  img: string;
  title: string;
  content: string;
}
