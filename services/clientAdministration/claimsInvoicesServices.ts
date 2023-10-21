import { InvoiceProps, ProgressClaimsProps } from "@/types";

interface AddProgressClaimsProps {
  data: ProgressClaimsProps,
  clientID: string
}

interface AddInvoiceProps {
  data: InvoiceProps,
  clientID: string
}

export async function getProgressClaims(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/progress_claims/${id}`, { cache: 'no-store' })

    const result : ProgressClaimsProps[] = await response.json();
    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addProgressClaims({ data, clientID } : AddProgressClaimsProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("claim_amount", data.claim_amount);
    formData.append("status", data.status);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/progress_claims`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateProgressClaims({ data, clientID } : AddProgressClaimsProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("claim_amount", data.claim_amount);
    formData.append("status", data.status);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/progress_claims/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteProgressClaims(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/progress_claims/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function getInvoices(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/invoices/${id}`, { cache: 'no-store' })

    const result : InvoiceProps[] = await response.json();
    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addInvoice({ data, clientID } : AddInvoiceProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("invoice_amount", data.invoice_amount);
    formData.append("status", data.status);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/invoices`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateInvoice({ data, clientID } : AddInvoiceProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("invoice_amount", data.invoice_amount);
    formData.append("status", data.status);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/invoices/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteInvoice(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/invoices/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}