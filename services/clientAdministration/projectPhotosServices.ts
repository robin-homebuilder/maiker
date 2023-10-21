import { ClientProjectPhotosProps } from "@/types";

interface AddProjectPhotoProps {
  data: ClientProjectPhotosProps,
  clientID: string
}

export async function getClientProjectPhotos(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/project_photos/${id}`, { cache: 'no-store' })

    const projectPhotos = await response.json();

    const result : ClientProjectPhotosProps[] = projectPhotos.data;

    const projectNumber : string = projectPhotos.project_number;
    
    return { result, projectNumber };
  } catch (error) {
    throw error;
  }
}

export async function addProjectPhoto({ data, clientID } : AddProjectPhotoProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/project_photos`, {
      method: 'post',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteProjectPhoto(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/project_photos/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}