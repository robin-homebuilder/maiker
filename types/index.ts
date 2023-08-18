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

export interface OwnerProps {
  type: String,
  first_name: string,
  last_name: string,
  phone: string,
  email: string
}

export interface CompanyOwnerProps {
  type: String,
  company_name: string,
  abn: string,
  first_name: string,
  last_name: string,
  phone: string,
  email: string
}

export interface TrusteeOwnerProps {
  type: String,
  trustee_name: string,
  trust_name: string,
  abn: string,
  first_name: string,
  last_name: string,
  phone: string,
  email: string
}

export interface ClientInformationProps {
  owners: (OwnerProps | CompanyOwnerProps | TrusteeOwnerProps)[]
}

export interface ProjectInformationProps {
  site_address: string,
  files: File[]
}

export interface NewClientInformationProps {

}