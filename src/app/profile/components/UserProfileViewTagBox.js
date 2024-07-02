import Link from "next/link";

export default function UserProfileViewTagBox({ darkMode, data, endpoint }) {
  return (
    <div className={(darkMode ? "bg-capx-dark-box-bg " : "bg-capx-light-box-bg ") + "flex flex-wrap w-full place-content-center gap-y-4 gap-x-4 px-8 py-6 rounded-lg"}>
      {data?.map((item, index) => (
        <Link
          key={index} href={`/${endpoint}/${item}`}
          className="bg-capx-secondary-purple hover:bg-capx-primary-green text-[#F6F6F6] tracking-widest text-base sm:text-base px-4 sm:px-5 py-3 rounded-lg">
          {item}
        </Link>
      ))}
    </div>
  )
}