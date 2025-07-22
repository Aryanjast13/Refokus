
const Stripe = ({val}) => {
  return (
    <div className='stripes flex  items-center justify-between  px-5 py-4 border-y-[1px] border-r-[1px] border-zinc-700 '>
      <img src={val.url}  alt={ val.name} />
      <span className='font-semibold'>{ val.number}</span>
    </div>
  )
}

export default Stripe