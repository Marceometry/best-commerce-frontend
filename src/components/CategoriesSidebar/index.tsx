import Link from 'next/link'
import { getCategories } from '@/services'

export async function CategoriesSidebar() {
  const categories = await getCategories()

  return (
    <aside className="h-full w-full sm:w-fit border-b sm:border-b-0 sm:border-r border-slate-300 py-4 px-8">
      <h3>Categories</h3>

      <ul className="text-sm mt-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/categories/${category.slug}`}
              className="hover:underline"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
