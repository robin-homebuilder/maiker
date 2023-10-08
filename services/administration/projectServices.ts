import { ProjectPhotoListProps, ProjectPhotoProps } from "@/types";

interface CreateProjectProps {
  data: ProjectPhotoProps
}

interface UpdateProjectProps {
  data: ProjectPhotoProps,
  id: string,
  requiredMain: boolean,
  requiredOther: boolean,
  otherImageList: string[]
}

export async function getCompleteProjectPhotos(){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/projectphoto/`, { cache: 'no-store' })

    const articles : ProjectPhotoListProps[] = await response.json();

    return articles;
  } catch (error) {
    throw error;
  }
}

export async function createCompletedProject( { data }  : CreateProjectProps){
  try {
    const formData = new FormData();
    formData.append("main_image", data.main_image!);

    if(data.other_image){
      for (let i = 0; i < data.other_image.length; i++) {
        const file = data.other_image[i];
        formData.append(`other_image`, file);
      }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/projectphoto`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function UpdateCompletedProject( { data, id, requiredMain, requiredOther, otherImageList }  : UpdateProjectProps){
  try {
    const formData = new FormData();
    formData.append("main_image", data.main_image!);
    formData.append("otherImageList", JSON.stringify(otherImageList));

    if(data.other_image){
      for (let i = 0; i < data.other_image.length; i++) {
        const file = data.other_image[i];
        formData.append(`other_image`, file);
      }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/projectphoto/${id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteProject(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/projectphoto/${id}`, {
      method: 'DELETE',
      cache: "no-store"
    });

    return 1;
  } catch (error) {
    throw error;
  }
}