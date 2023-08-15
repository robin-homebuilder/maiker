type LeadProps = {
  first_name: string,
  last_name: string,
  email: string,
  phone: string
}

export async function createLead({ first_name, last_name, email, phone } : LeadProps){
  const data = {
    first_name, 
    last_name, 
    email, 
    phone
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/zoho`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: "no-store"
    });

    if(response.status == 200){
      return true;
    } else{
      return false;
    }
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}