import { CompanyOwnerProps } from "@/types";
import { TfiClose } from "react-icons/tfi";

interface OwnerProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleRemoveGroup: () => void,
  owner: CompanyOwnerProps
}

export default function CompanyOwner({ handleInputChange, handleRemoveGroup, owner } : OwnerProps) {
  return (
    <>
      <div className='flex justify-between w-full mb-2'>
        <h3 className='text-dark font-[900] text-[18px]'>Company Owner</h3>
        <button type="button" className='text-dark text-[17px]' onClick={handleRemoveGroup}><TfiClose /></button>
      </div>
      <div className="w-full flex flex-wrap gap-y-3">
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
          <input 
            type="text" 
            name="company_name" 
            placeholder="Company Name*" 
            value={owner.company_name}
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
            name="last_name" 
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
            placeholder="Mobile*" 
            value={owner.phone}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email*" 
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