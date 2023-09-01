import { ClientInformationProps, ProjectInformationProps } from "@/types";

type NewClientInformationProps = {
  client_information: ClientInformationProps,
  project_information: ProjectInformationProps
}

export async function createNewClient({ client_information, project_information } : NewClientInformationProps){
  const { owners } = client_information
  const { site_address, files } = project_information
  
  try {
    const formData = new FormData();
    formData.append("site_address", site_address);
    formData.append("owners", JSON.stringify(owners));

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      formData.append(`files`, file);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });

    const data = await response.json();
    
    return data.project_id;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}