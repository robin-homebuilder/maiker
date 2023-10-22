import { ClientListForConsultantProps } from "@/types";

export async function getConsultantClientsList(consultantID: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/consultant_dashboard/clients/${consultantID}`, { cache: 'no-store' })

    const clients : ClientListForConsultantProps[] = await response.json();

    return clients;
  } catch (error) {
    throw error;
  }
}

export async function getConsultantClientsSearch(data: string, consultantID: string){
  const body = {
    search_data: data,
    consultantID
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/consultant_dashboard/clients/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const clients : ClientListForConsultantProps[] = await response.json();

    return clients;
  } catch (error) {
    throw error;
  }
}