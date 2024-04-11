import Link from "next/link";

export default function Footer({ darkMode }) {
  return (
    <section className={(darkMode ? "bg-capx-dark-box-bg " : "bg-capx-light-box-bg ") + "w-full h-16"}>
      <div className="">
        <div className="">
          <Link
            href="/"
            target="_blank"
            className={(darkMode ? "text-capx-dark-link border-capx-dark-link " : "text-capx-light-link border-capx-light-link ")}>
            Documentation
          </Link>
        </div>
        <div className="">
          <Link
            href="https://github.com/WikiMovimentoBrasil"
            target="_blank"
            className={(darkMode ? "text-capx-dark-link border-capx-dark-link " : "text-capx-light-link border-capx-light-link ")}>
            GitHub
          </Link>
        </div>
        <div className="">
          <Link
            href="https://meta.wikimedia.org/wiki/Capacity_Exchange"
            target="_blank"
            className={(darkMode ? "text-capx-dark-link border-capx-dark-link " : "text-capx-light-link border-capx-light-link ")}>
            Meta-wikimedia
          </Link>
        </div>
      </div>
      <div className="">
        <p className="">For and by the Wikimedia Movement</p>
      </div>
    </section>
  )
}