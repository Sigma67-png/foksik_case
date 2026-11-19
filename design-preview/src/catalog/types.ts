import type { ComponentType } from 'react';

export interface DesignCategory {
  slug: string;
  title: string;
  description: string;
}

export interface DesignSource {
  kind: 'original' | 'adapted';
  name: string;
  url: string;
  license: string;
  revision?: string;
  adaptationNote: string;
}

export interface DesignEntry {
  id: string;
  title: string;
  categorySlug: DesignCategory['slug'];
  summary: string;
  states: readonly string[];
  Preview: ComponentType;
  source: DesignSource;
}
