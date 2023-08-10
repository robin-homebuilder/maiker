export interface ArticleProps {
  title: String,
  description: String,
  author: String,
  imageURL: String
}

export interface UserProps {
  id: String,
  name: String,
  email: String,
  role: Number,
  phone: String,
  status: Number
}

export interface ProjectProps {
  _id: string,
  title: string,
  image_base_url: string,
  main_image: string,
  other_image: string[]
}

export interface PackageProps {
  title: string,
  slug: string,
  sub_title: string,
  short_description: string,
  price: number,
  inclusions: string[],
  note: string
}