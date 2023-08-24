import { ClientInformationProps } from "@/types";

type NewClientInformationProps = {
  client_information: ClientInformationProps,
	site_address: string,
	slug: string
}
  
export async function processXero({ client_information, site_address, slug } : NewClientInformationProps){
	const { owners } = client_information
	
	try {
    const formData = new FormData();
    formData.append("site_address", site_address);
    formData.append("slug", slug);
    formData.append("owners", JSON.stringify(owners));

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
		console.log(error)
		throw error;
	}
}