import { DrawingAndReportFileProps, DrawingsAndReportProps } from "@/types";

interface AddDocumentProps {
  data: DrawingsAndReportProps,
  id: string
}

interface UpdateSectionProps {
  data: string,
  id: string
}

interface AddSectionFileProps {
  data: DrawingsAndReportProps,
  sectionID: string,
  clientID: string
}

interface UpdateSectionFileProps {
  data: DrawingAndReportFileProps,
  sectionID: string,
  clientID: string
}

export async function getDrawingsAndReports(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/drawings_reports/${id}`, { cache: 'no-store' })

    const result : DrawingsAndReportProps[] = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getDrawingsAndReportsSection(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/drawings_reports/section/${id}`, { cache: 'no-store' })

    const result : DrawingsAndReportProps = await response.json();

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

export async function deleteDrawingsAndReportsSection(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/drawings_reports/section/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function addDrawingsReports({ data, id } : AddDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", id);
    formData.append("section_name", data.section_name);
    formData.append("name", data.name);
    formData.append("amendment", data.amendment);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/drawings_reports`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function addDrawingsReportsFile({ data, sectionID, clientID } : AddSectionFileProps){
  try {
    const formData = new FormData();
    formData.append("sectionID", sectionID);
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("amendment", data.amendment);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/drawings_reports/file`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateDrawingsReportsFile({ data, sectionID, clientID } : UpdateSectionFileProps){
  try {
    const formData = new FormData();
    formData.append("sectionID", sectionID);
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("amendment", data.amendment);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/drawings_reports/file/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteDrawingsReportsFile(id : string, sectionID: string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/drawings_reports/file/${id}/${sectionID}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}