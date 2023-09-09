import { ArticleProps, ArticlesProps, OtherLinks } from "@/types";

type Slug = {
  slug: string
}

export async function getArticleBySlug({ slug } : Slug){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/${slug}`, { cache: 'no-store' })

    const responseJson = await response.json();

    const articleData : ArticleProps = responseJson.article;

    const otherLinks: OtherLinks[] = responseJson.otherSlug;

    return { articleData, otherLinks };
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function getArticles(){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/articles/`, { cache: 'no-store' })

    const articles : ArticlesProps[] = await response.json();

    return articles;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}