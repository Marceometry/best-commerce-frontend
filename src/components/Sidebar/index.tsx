import { getCategories } from '@/api'

export async function Sidebar() {
  const categories = await getCategories()

  return (
    <aside className="flex-shrink border-r py-4 px-8">
      <h3>Categories</h3>

      <ul className="text-sm mt-2">
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </aside>
  )
}
