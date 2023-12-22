export default function AnchorLink(props) {

  const getIndex = (id) => { return "EPISODE " + (id.toString().length === 1 ? ("0" + id) : id) + ":"; };
  
  return (
    <a className="max-w-max group text-4xl hover:text-[#aaaaaa] ease-in-out duration-150 mt-2" href={props.link}>
      {getIndex(props.id) + props.text}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
    </a>
  )
}