import { AdministrationArticleProps, AdministrationArticlesProps } from "@/types";

export async function getAdministrationArticles(){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/articles/`, { cache: 'no-store' })

    const articles : AdministrationArticlesProps[] = await response.json();

    return articles;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function getAdministrationArticleByID(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/articles/${id}`, { cache: 'no-store' })

    const article : AdministrationArticleProps = await response.json();
    
    return article;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}