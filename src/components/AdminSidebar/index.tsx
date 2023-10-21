import Link from 'next/link'

export function AdminSidebar() {
  return (
    <aside className="flex-shrink border-r border-r-slate-300 py-4 px-8">
      <ul className="text-sm mt-2">
        <li>
          <Link href="/admin" className="hover:underline">
            Products
          </Link>
        </li>
        <li>
          <Link href="/admin/company-profile" className="hover:underline">
            Company profile
          </Link>
        </li>
      </ul>
    </aside>
  )
}
