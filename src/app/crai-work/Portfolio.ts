export interface Portfolio {
  id: string,
  createdTime: string,
  fields: Fields
}

export interface Media {
  id: string,
  createdTime: string,
  fields: mediaFields
}

export interface Fields {
  title: string,
  subtitle: string,
  location: string,
  client: string[],
  project: string,
  sf: number,
  projectRole: string[],
  projectType: string,
  writeUp: string,
  active: boolean,
  constructionStatus: boolean,
  clientName: string,
  thumb: Thumb
}

export interface mediaFields {
  name: string,
  description: string,
  project: string[],
  downloadable: boolean,
  mediaType: string,
  link: string,
  attachement: Thumb
}

export interface Thumb {
  id: string,
  url: string,
  filename: string,
  size: number,
  type: string
}

//public IList < Thumb > thumb { get; set; }
