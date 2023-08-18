import { TrusteeOwnerProps } from "@/types";
import { TfiClose } from "react-icons/tfi";

interface OwnerProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleRemoveGroup: () => void,
  owner: TrusteeOwnerProps
}

export default function TrustOwner({ handleInputChange, handleRemoveGroup, owner } : OwnerProps) {
  return (
    <>
      <div className='flex justify-between w-full mb-2'>
        <h3 className='text-dark font-[900] text-[18px]'>Trust Owner</h3>
        <button type="button" className='text-dark text-[17px]' onClick={handleRemoveGroup}><TfiClose /></button>
      </div>
      <div className="w-full flex flex-wrap gap-y-3 gap-x-4">
        <input 
          type="text" 
          name="trustee_name" 
          placeholder="Trustee Name*" 
          value={owner.trustee_name}
          onChange={handleInputChange}
          className="border border-tertiary rounded-[20px] h-[42px] w-full"
        />
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
          <input 
            type="text" 
            name="trust_name" 
            placeholder="Trust Name*" 
            value={owner.trust_name}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
          <input 
            type="text" 
            name="abn" 
            placeholder="ABN*" 
            value={owner.abn}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
        </div>
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
          <input 
            type="text" 
            name="first_name" 
            placeholder="Contact First Name*" 
            value={owner.first_name}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
          <input 
            type="text" 
            name="tr_lalast_namest_name" 
            placeholder="Contact Last Name*" 
            value={owner.last_name}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
        </div>
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
          <input 
            type="text" 
            name="phone" 
            placeholder="Contact Mobile*" 
            value={owner.phone}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Contact Email*" 
            value={owner.email}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
        </div>
      </div>
    </>
  );
};