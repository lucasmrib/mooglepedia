import { Navbar } from '@/components/navbar'
import { ItemCard } from '@/components/item-card'
import { PrismaClient } from '@prisma/client'

export default async function Items() {

    const prisma = new PrismaClient()
    const items = await prisma.items.findMany()

    return (
        <main className="flex min-h-screen">
            <Navbar menu="items"/>
            <div className="mx-14 my-16 w-full h-fit text-white space-y-8">
                {items.map(item => <ItemCard 
                    key={item.item_id}
                    name={item.name}
                    description={item.description}
                    effect={item.effect}/>
                )}
            </div>
        </main>
    )
}
