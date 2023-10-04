import { AdministrationArticleProps, AdministrationArticlesProps } from "@/types";

interface CreateArticleProps {
  data: AdministrationArticleProps
}

interface UpdateArticleProps {
  data: AdministrationArticleProps,
  id: string
}

export async function getAdministrationArticles(){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/articles/`, { cache: 'no-store' })

    const articles : AdministrationArticlesProps[] = await response.json();

    return articles;
  } catch (error) {
    throw error;
  }
}

export async function getAdministrationArticlesSearch(data: string){
  const body = {
    search_data: data
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/articles/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const articles : AdministrationArticlesProps[] = await response.json();

    return articles;
  } catch (error) {
    throw error;
  }
}

export async function getAdministrationArticleByID(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/articles/${id}`, { cache: 'no-store' })

    const article : AdministrationArticleProps = await response.json();
    
    return article;
  } catch (error) {
    throw error;
  }
}

export async function createAdministrationArticle({ data } : CreateArticleProps){
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("sub_title", data.sub_title);
    formData.append("author", data.author);
    formData.append("company", data.company);
    formData.append("issued_date", data.issued_date ? data.issued_date.toISOString() : "");
    formData.append("content", data.content);
    formData.append("imageFile", data.imageFile!);
    formData.append("bannerFile", data.bannerFile!);
    formData.append("with_sidebar", JSON.stringify(data.with_sidebar));
    formData.append("external_links", JSON.stringify(data.external_links));


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/articles`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateAdministrationArticle({ data, id } : UpdateArticleProps){
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("sub_title", data.sub_title);
    formData.append("author", data.author);
    formData.append("company", data.company);
    formData.append("issued_date", data.issued_date ? data.issued_date.toISOString() : "");
    formData.append("content", data.content);
    formData.append("imageFile", data.imageFile!);
    formData.append("bannerFile", data.bannerFile!);
    formData.append("with_sidebar", JSON.stringify(data.with_sidebar));
    formData.append("external_links", JSON.stringify(data.external_links));

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/articles/${id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteArticle(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/articles/${id}`, {
      method: 'DELETE',
      cache: "no-store"
    });

    return 1;
  } catch (error) {
    throw error;
  }
}