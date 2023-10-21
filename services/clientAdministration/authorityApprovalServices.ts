import { AuthorityApprovalFileProps, AuthorityApprovalProps } from "@/types";

interface AddDocumentProps {
  data: AuthorityApprovalProps,
  id: string
}

interface UpdateSectionProps {
  data: string,
  id: string
}

interface AddSectionFileProps {
  data: AuthorityApprovalProps,
  sectionID: string,
  clientID: string
}

interface UpdateSectionFileProps {
  data: AuthorityApprovalFileProps,
  sectionID: string,
  clientID: string
}

export async function getAuthorityApprovals(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/authority_approval/${id}`, { cache: 'no-store' })

    const result : AuthorityApprovalProps[] = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAuthorityApprovalsSection(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/authority_approval/section/${id}`, { cache: 'no-store' })

    const result : AuthorityApprovalProps = await response.json();

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/drawings_reports/section/${id}`, {
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

export async function deleteAuthorityApprovalsSection(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/authority_approval/section/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function addAuthorityApprovals({ data, id } : AddDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", id);
    formData.append("section_name", data.section_name);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("amendment", data.amendment);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/authority_approval`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function addAuthorityApprovalsFile({ data, sectionID, clientID } : AddSectionFileProps){
  try {
    const formData = new FormData();
    formData.append("sectionID", sectionID);
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("amendment", data.amendment);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/authority_approval/file`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateAuthorityApprovalsFile({ data, sectionID, clientID } : UpdateSectionFileProps){
  try {
    const formData = new FormData();
    formData.append("fileID", data._id!);
    formData.append("sectionID", sectionID);
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("amendment", data.amendment);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/authority_approval/file`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteAuthorityApprovalsFile(id : string, sectionID: string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/authority_approval/file/${id}/${sectionID}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}