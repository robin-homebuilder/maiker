import { ContractDocumentProps, ContractSumProps, EditPracticalCompletionProps, ExtensionTimeProps, PracticalCompletionProps, VariationProps } from "@/types";

interface UpdateContractSumProps {
  data: ContractSumProps
}

interface UpdatePracticalCompletionProps {
  data: EditPracticalCompletionProps
}

interface AddContractDocumentProps {
  data: ContractDocumentProps,
  clientID: string
}

interface AddExtensionTimeProps {
  data: ExtensionTimeProps,
  clientID: string
}

interface AddVariationProps {
  data: VariationProps,
  clientID: string
}

export async function getContractAndCompletion(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/contract_completion/${id}`, { cache: 'no-store' })

    const contractAdministration = await response.json();
    
    const contractSum : ContractSumProps = contractAdministration.contractSum;

    const practicalCompletion : PracticalCompletionProps = contractAdministration.practicalCompletion;

    const practicalCompletionEditData : EditPracticalCompletionProps = contractAdministration.practicalCompletion;
    
    return { contractSum, practicalCompletion, practicalCompletionEditData };
  } catch (error) {
    throw error;
  }
}

export async function getContractSum(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/contract_sum/${id}`, { cache: 'no-store' })

    const contractSum : ContractSumProps = await response.json();
    
    return contractSum;
  } catch (error) {
    throw error;
  }
}

export async function getPracticalCompletion(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/practical_completion/${id}`, { cache: 'no-store' })

    const result = await response.json();
    
    const practicalCompletion : PracticalCompletionProps = result;
    
    const practicalCompletionEditData : EditPracticalCompletionProps = result;
    
    return { practicalCompletion, practicalCompletionEditData };
  } catch (error) {
    throw error;
  }
}

export async function updateContractSum({ data } : UpdateContractSumProps){
  const body = {
    original_contract_sum: data.original_contract_sum,
    variation: data.variation,
    revised_contract_sum: data.revised_contract_sum
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/contract_sum/${data._id}`, {
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

export async function updatePracticalCompletion({ data } : UpdatePracticalCompletionProps){
  const body = {
    original_practical_completion: data.original_practical_completion,
    approved_extension_of_time: data.approved_extension_of_time,
    revised_practical_completion: data.revised_practical_completion
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/practical_completion/${data._id}`, {
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

export async function getContractDocuments(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/contract_document/${id}`, { cache: 'no-store' })

    const result : ContractDocumentProps[] = await response.json();
    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addContractDocument({ data, clientID } : AddContractDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/contract_document`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateContractDocument({ data, clientID } : AddContractDocumentProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/contract_document/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteContractDocument(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/contract_document/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function getExtensionTime(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/extension_time/${id}`, { cache: 'no-store' })

    const result : ExtensionTimeProps[] = await response.json();
    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addExtensionTime({ data, clientID } : AddExtensionTimeProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("days_submitted", data.days_submitted);
    formData.append("status", data.status);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/extension_time`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateExtensionTime({ data, clientID } : AddExtensionTimeProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("days_submitted", data.days_submitted);
    formData.append("status", data.status);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/extension_time/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteExtensionTime(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/extension_time/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function getVariations(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/variation/${id}`, { cache: 'no-store' })

    const result : VariationProps[] = await response.json();
    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addVariation({ data, clientID } : AddVariationProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("amount_submitted", data.amount_submitted);
    formData.append("status", data.status);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/variation`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function updateVariation({ data, clientID } : AddVariationProps){
  try {
    const formData = new FormData();
    formData.append("clientID", clientID);
    formData.append("name", data.name);
    formData.append("document_date", data.document_date ? data.document_date.toISOString() : "");
    formData.append("amount_submitted", data.amount_submitted);
    formData.append("status", data.status);
    formData.append("documentFile", data.document_file!);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/variation/${data._id}`, {
      method: 'PATCH',
      body: formData,
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    throw error;
  }
}

export async function deleteVariation(id : string, clientID: string){
  try {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/client_administration/contract_administration/variation/${id}/${clientID}`, {
      method: 'DELETE',
      cache: "no-store"
    });
    
    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}