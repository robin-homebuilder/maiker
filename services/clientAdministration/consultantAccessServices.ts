import { ClientConsultantAccessListProps, ClientConsultantAccessProps } from "@/types";

export async function getConsultantAccess(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/consultant_access/${id}`, { cache: 'no-store' })

    const result : ClientConsultantAccessListProps[] = await response.json();
    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function searchConsultantByIDNumber(data: string, clientID: string){
  const body = {
    search_data: data
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/consultant_access/search/${clientID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const consultants : ClientConsultantAccessProps[] = await response.json();

    return consultants;
  } catch (error) {
    throw error;
  }
}

export async function addConsultantAccess(consultantID: string, clientID: string){
  const body = {
    consultantID: consultantID,
    clientID: clientID
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/consultant_access`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const consultants : ClientConsultantAccessProps[] = await response.json();

    return consultants;
  } catch (error) {
    throw error;
  }
}

export async function deleteConsultantAccess(id : string, consultantID: string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/consultant_access/${id}/${consultantID}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}