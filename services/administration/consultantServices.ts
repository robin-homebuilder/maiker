import { ConsultantDataProps, ConsultantListProps } from "@/types";

interface AddConsultantProps {
  data: ConsultantDataProps
}


export async function getConsultantList(){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/consultants/`, { cache: 'no-store' })

    const consultants : ConsultantListProps[] = await response.json();

    return consultants;
  } catch (error) {
    throw error;
  }
}

export async function getConsultantByID(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/consultants/${id}`, { cache: 'no-store' })

    const clients : ConsultantDataProps = await response.json();

    return clients;
  } catch (error) {
    throw error;
  }
}

export async function getConsultantSearch(data: string){
  const body = {
    search_data: data
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/consultants/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const consultants : ConsultantListProps[] = await response.json();

    return consultants;
  } catch (error) {
    throw error;
  }
}

export async function createConsultant( { data }  : AddConsultantProps){
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("licence", data.licence);
    formData.append("insurance", data.insurance);
    formData.append("insurance_expiry", data.insurance_expiry ? data.insurance_expiry.toISOString() : "");
    formData.append("email", data.email);
    formData.append("insuranceFile", data.insurance_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/consultants`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateConsultant( { data }  : AddConsultantProps){
  
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("licence", data.licence);
    formData.append("insurance", data.insurance);
    formData.append("insurance_expiry", data.insurance_expiry ? data.insurance_expiry.toISOString() : "");
    formData.append("email", data.email);
    formData.append("insuranceFile", data.insurance_file!);
    formData.append("id_number", JSON.stringify(data.id_number));

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/administration/consultants/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}