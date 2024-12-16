import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { testimonials } from '@/data/testimonials'

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full bg-transparent md:w-calc"
    >
      <CarouselContent>
        {testimonials.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/1 mb-5 ml-4 rounded-md md:basis-1/2 lg:basis-1/3"
          >
            <Card className="w-full border-b-0 border-violet-500 shadow-[1px_10px_12px_2px_rgba(0,0,0,0.69)] md:w-[600px]">
              <CardContent className="flex h-[300px] flex-col items-start justify-between overflow-x-hidden overflow-y-hidden p-8 text-zinc-800 dark:text-zinc-400">
                <div className="flex flex-col items-start gap-3">
                  <span className="mb-10 block h-1.5 w-8 rounded-sm bg-violet-500"></span>
                  <span className="w-full text-start">{item.text}</span>
                  <div className="flex w-full flex-col space-y-5">
                    <Separator />
                    <span className="font-bold">{item.name}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
