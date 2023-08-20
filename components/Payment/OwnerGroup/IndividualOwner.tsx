import { OwnerProps } from "@/types";
import { TfiClose } from "react-icons/tfi";

interface IndividualOwnerProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleRemoveGroup: () => void,
  owner: OwnerProps
}

export default function IndividualOwner({ handleInputChange, handleRemoveGroup, owner } : IndividualOwnerProps) {
  return (
    <>
      <div className='flex justify-between w-full mb-2'>
        <h3 className='text-dark font-[900] text-[18px]'>Individual Owner</h3>
        <button type="button" className='text-dark text-[17px]' onClick={handleRemoveGroup}><TfiClose /></button>
      </div>
      <div className="w-full flex flex-wrap gap-y-3">
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3 sm:gap-y-0">
          <input 
            type="text" 
            name="first_name" 
            placeholder="First Name*" 
            value={owner.first_name}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
          <input 
            type="text" 
            name="last_name" 
            placeholder="Last Name*" 
            value={owner.last_name}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"
            required
          />
        </div>
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3 sm:gap-y-0">
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