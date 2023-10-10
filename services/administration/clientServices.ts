import { ClientDataProps, ClientListProps, CredentialsProps } from "@/types";

interface UpdateClientProps {
  data: ClientDataProps
}

interface SaveClientCredentialProps {
  data: CredentialsProps
}

export async function getClientsList(){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/clients/`, { cache: 'no-store' })

    const clients : ClientListProps[] = await response.json();

    return clients;
  } catch (error) {
    throw error;
  }
}

export async function getClientsSearch(data: string){
  const body = {
    search_data: data
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/clients/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const clients : ClientListProps[] = await response.json();

    return clients;
  } catch (error) {
    throw error;
  }
}

export async function getClientByID(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/clients/${id}`, { cache: 'no-store' })

    const clients : ClientDataProps = await response.json();

    return clients;
  } catch (error) {
    throw error;
  }
}

export async function getClientCredentialByID(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/clients/credential/${id}`, { cache: 'no-store' })

    const credential : CredentialsProps = await response.json();

    return credential;
  } catch (error) {
    throw error;
  }
}

export async function saveClientCredential({ data } : SaveClientCredentialProps){
  const body = {
    id: data.id,
    email: data.email,
    password: data.password
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/clients/credential`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const credential : CredentialsProps = await response.json();

    return credential;
  } catch (error) {
    throw error;
  }
}

export async function createClient({ data } : UpdateClientProps){
  const body = {
    type: data.type,
    phone: data.phone,
    email: data.email,
    site_address: data.site_address,
    first_name: data.first_name,
    last_name: data.last_name,
    company_name: data.company_name,
    trustee_name: data.trustee_name,
    trust_name: data.trust_name,
    abn: data.abn
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    return 1;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export async function updateClient({ data } : UpdateClientProps){
  const body = {
    type: data.type,
    phone: data.phone,
    email: data.email,
    site_address: data.site_address,
    first_name: data.first_name,
    last_name: data.last_name,
    company_name: data.company_name,
    trustee_name: data.trustee_name,
    trust_name: data.trust_name,
    abn: data.abn
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/clients/${data._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const clients : ClientListProps[] = await response.json();

    return clients;
  } catch (error) {
    throw error;
  }
}