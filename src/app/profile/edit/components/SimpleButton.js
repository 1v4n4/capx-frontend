export default function SimpleButton({children, type, onClick, bg_color = "bg-capx-secondary-purple", text_color = "text-[#F6F6F6]"}) {
  return (
    <button
      type={type}
      className={"flex w-fit h-fit " + bg_color + " " + text_color + " tracking-wider text-sm px-4 sm:px-5 py-2 rounded-full"}
      onClick={onClick}
    >
      <div>{children}</div>
    </button>
  )
}