import { ClientDataForClientPageProps, ClientDataProps, ClientListProps, CredentialsProps, SiteDetailsProps, SiteDocumentProps, SiteInformationID } from "@/types";

interface UpdateProps {
  data: SiteDetailsProps,
  id: string
}

interface UpdateDocumentProps {
  data: SiteDocumentProps,
  id: string
}

export async function getSiteInformation(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/site_information/${id}`, { cache: 'no-store' })

    const siteInformation = await response.json();

    const siteID : SiteInformationID = siteInformation.siteInformationID;

    const siteDetails : SiteDetailsProps = siteInformation.siteDetails;

    const siteDocuments : SiteDocumentProps[] = siteInformation.siteDocuments

    return { siteID, siteDetails, siteDocuments};
  } catch (error) {
    throw error;
  }
}

export async function getSiteInformationDocuments(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/site_information/document/${id}`, { cache: 'no-store' })

    const documents : SiteDocumentProps[] = await response.json();

    return documents;
  } catch (error) {
    throw error;
  }
}

export async function saveSiteInformation({ data, id } : UpdateProps){
  const body = {
    site_address: data.site_address,
    description: data.description,
    site_area: data.site_area,
    local_government: data.local_government
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/site_information/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function addDocument({ data, id } : UpdateDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", id);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/site_information/document`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function updateDocument({ data, id } : UpdateDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", id);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/site_information/document/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function deleteDocument(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/site_information/document/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}