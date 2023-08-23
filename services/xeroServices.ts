import { ClientInformationProps } from "@/types";

type NewClientInformationProps = {
  client_information: ClientInformationProps,
	site_address: string,
	price: number
}
  
export async function processXero({ client_information, site_address, price } : NewClientInformationProps){
	const { owners } = client_information
	
	try {
    const formData = new FormData();
    formData.append("site_address", site_address);
    formData.append("owners", JSON.stringify(owners));
    formData.append("price", price.toString());

		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/xero`, {
			method: 'POST',
      body: formData,
			cache: "no-store"
		});

		if(response.status == 200){
			return true;
		} else{
			return false;
		}
	} catch (error) {
		throw error;
	}
}