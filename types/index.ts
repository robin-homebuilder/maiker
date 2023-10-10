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

export interface ExternalLink {
  title: string,
  url: string
}

export interface OtherLinks {
  title: string,
  slug: string
}

export interface ArticleProps {
  title: string,
  sub_title: string,
  author: String,
  company: string,
  content: string,
  issued_date: string,
  with_sidebar: boolean,
  external_links: [ExternalLink],
  banner: string
}

export interface ArticlesProps {
  title: String,
  sub_title: string,
  slug: string,
  image: string
}

export interface MailAddressProps {
  address: string,
  address_line_1: string,
  address_line_2: string,
  suburb: string,
  state: string,
  state_code: string,
  postcode: string
}

export interface SiteAddressProps {
  address: string,
  address_line_1: string,
  address_line_2: string,
  suburb: string,
  state: string,
  state_code: string,
  postcode: string
}

export interface ClientOwnerProps {
  type: "individual_owner" | "company_owner" | "trust_owner";
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  company_name?: string;
  abn?: string;
  trustee_name?: string;
  trust_name?: string;
}

export interface ProjectInformationOneProps {
  project_type: string,
  complete_plan: string,
  architect_name: string,
  architect_contact: string,
  project_checkbox: string[],
  files: File[]
}

export interface ProjectInformationTwoProps {
  commence: string,
  extensions: string,
  project_budget: string,
  completing_plan: string,
  builder?: string,
  quoting: string,
  proposed_works: string
}

export interface ClientBriefProps {
  brief_information: string,
  client_checkbox: string[],
  other_requirements?: string
}

export interface AdministrationArticlesProps {
  _id: string,
  title: string,
  author: string,
  issued_date: string
}

export interface AdministrationArticleProps {
  _id?: string,
  title: string,
  sub_title: string,
  author: string,
  company: string,
  content: string,
  issued_date?: Date,
  image: string,
  banner: string,
  imageFile?: File,
  bannerFile?: File,
  with_sidebar: boolean,
  external_links: ExternalLink[]
}

export interface ClientListProps {
  _id: string,
  type: string,
  first_name: string,
  last_name: string,
  company_name: string,
  trustee_name: string,
  site_address: string
}

export interface ClientDataProps {
  _id: string,
  type: string,
  abn?: string,
  first_name: string,
  last_name: string,
  company_name: string,
  trustee_name: string,
  trust_name: string,
  site_address: string,
  phone: string,
  email: string
}

export interface ConsultantListProps {
  _id: string,
  id_number: number,
  name: string,
  licence: string,
  insurance_link: string,
  insurance_expiry: string,
  email: string,
}

export interface ConsultantDataProps {
  _id?: string,
  id_number?: number,
  name: string,
  licence: string,
  insurance: string,
  insurance_expiry?: Date,
  email: string,
  insurance_file?: File
}

export interface ProjectPhotoProps {
  main_image?: File,
  other_image?: File[]
}

export interface ProjectPhotoListProps {
  _id: string,
  image_base_url: string,
  main_image: string,
  other_image:string[],
  mainImage_file?: File,
  otherImages_file?: File[],
  createdAt: string
}

export interface CredentialsProps {
  id: string,
  email: string,
  password: string
}

export interface AuthenticateLoginProps {
  email: string,
  role: number
}