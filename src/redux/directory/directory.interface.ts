export interface Section {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}

export interface State {
  directory: {
    sections: Section[];
  };
}
