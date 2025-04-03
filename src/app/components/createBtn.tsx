
interface CteateBtnProps {
  openModal: ()=> void,
}

export default function CreateBtn({openModal}: CteateBtnProps) {

const handleClick = ()=> {
  openModal()
}

  return ( 
    <button className='block pt-[2px] pb-[2px] pl-[10px] pr-[10px] mb-[15px] ml-auto border border-gray-500 rounded-[10px] cursor-pointer' onClick={handleClick}>+ Add new todo</button>
  )
}
