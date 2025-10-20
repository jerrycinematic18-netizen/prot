export interface Service {
  id: string;
  name: string;
  icon: string;
  selected?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'short-form' | 'ads' | 'music-videos' | 'cinematic';
  thumbnail: string;
  videoUrl?: string;
}
