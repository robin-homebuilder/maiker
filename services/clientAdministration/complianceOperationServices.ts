import { ComplianceOperationsFileProps, ComplianceOperationsProps } from "@/types";

interface AddDocumentProps {
  data: ComplianceOperationsProps,
  id: string
}

interface UpdateSectionProps {
  data: string,
  id: string
}

interface AddSectionFileProps {
  data: ComplianceOperationsProps,
  sectionID: string,
  clientID: string
}

interface UpdateSectionFileProps {
  data: ComplianceOperationsFileProps,
  sectionID: string,
  clientID: string
}

export async function getComplianceOperations(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/compliance_operation/${id}`, { cache: 'no-store' })

    const result : ComplianceOperationsProps[] = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getComplianceOperationsSection(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/compliance_operation/section/${id}`, { cache: 'no-store' })

    const result : ComplianceOperationsProps = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateSectionName({ data, id } : UpdateSectionProps){
  const body = {
    section_name: data
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/compliance_operation/section/${id}`, {
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

export async function deleteComplianceOperationsSection(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/compliance_operation/section/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function addComplianceOperations({ data, id } : AddDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", id);
    formData.append("section_name", data.section_name);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/compliance_operation`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function addComplianceOperationsFile({ data, sectionID, clientID } : AddSectionFileProps){
  try {
    const formData = new FormData();
    formData.append("sectionID", sectionID);
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/compliance_operation/file`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateComplianceOperationsFile({ data, sectionID, clientID } : UpdateSectionFileProps){
  try {
    const formData = new FormData();
    formData.append("fileID", data._id!);
    formData.append("sectionID", sectionID);
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/compliance_operation/file`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteComplianceOperationsFile(id : string, sectionID: string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/compliance_operation/file/${id}/${sectionID}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}