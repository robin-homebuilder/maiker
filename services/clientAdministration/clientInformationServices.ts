import { ClientDocumentsProps, ClientInformationClientsProps } from "@/types";

interface AddClientDocumentProps {
  data: ClientDocumentsProps,
  clientID: string
}

interface AddClientAdditionalProps {
  data: ClientInformationClientsProps,
  clientID: string
}

export async function getClientAdditionals(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/client_information/clients/${id}`, { cache: 'no-store' })

    const result : ClientInformationClientsProps[] = await response.json();
    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addClientAdditional({ data, clientID } : AddClientAdditionalProps){
  const body = {
    clientID: clientID,
    client_name: data.client_name,
    phone: data.phone,
    email: data.email,
    mailing_address: data.mailing_address
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/client_information/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateClientAdditional({ data, clientID } : AddClientAdditionalProps){
  const body = {
    client_name: data.client_name,
    phone: data.phone,
    email: data.email,
    mailing_address: data.mailing_address
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/client_information/clients/${data._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteClientAdditional(id : string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/client_information/clients/${id}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function getClientDocuments(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/client_information/documents/${id}`, { cache: 'no-store' })

    const result : ClientDocumentsProps[] = await response.json();
    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addClientDocument({ data, clientID } : AddClientDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/client_information/documents`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateClientDocument({ data, clientID } : AddClientDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/client_information/documents/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteClientDocument(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/client_information/documents/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}