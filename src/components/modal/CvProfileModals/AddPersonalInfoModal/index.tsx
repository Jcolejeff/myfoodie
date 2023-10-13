import { Dialog, DialogContent, DialogTrigger } from 'components/shadcn/dialog';
import { useState } from 'react';
import AddPersonalInfoForm from './addPersonlInfoForm';

interface Iprops {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const AddPersonalInfoModal = ({ trigger, triggerClassName, title }: Iprops) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className='h-screen bg-white max-w-full overflow-x-hidden md:h-5/6  sm:w-[65vw] md:!max-w-[1000px] pt-[3rem] px-6 lg:px-[2rem] overflow-auto'>
        <div className='flex flex-col w-full '>
          <h4 className='font-[500] text-sm md:text-lg leading-[28px] tracking-[0.17px] text-primary-9/[0.87] mb-[1.72rem]'>
            {title || `Add Personal Info`}
          </h4>
          <div className='flex flex-col w-full gap-[0.87rem]'>
            <AddPersonalInfoForm setModalOpen={setModalOpen} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPersonalInfoModal;
