import { calculateTrendPercentage, cn } from "~/lib/utils"

const StatsCard = ({
    headerTitle,
    total,
    currentMonthCount,
    lastMonthCount
}: StatsCard) => {

    const { trend, percentage} = calculateTrendPercentage(currentMonthCount, lastMonthCount);
    const isDecrement = trend === 'decrement';
    const arrowIcon = isDecrement ? '/assets/icons/arrow-down-red.svg' : '/assets/icons/arrow-up-green.svg';
  return (
    <article className="stats-card">
        <h3 className="text-base font-medium">{headerTitle}</h3>
        <div className="content">
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-semibold">{total}</h2>
                <div className="flex items-center gap-4">
                    <figure className="flex items-center gap-1">
                        <img src={arrowIcon} className="size-5" alt="arrow"/>
                        <figcaption className={cn('text-sm font-medium', isDecrement ? 'text-red-500' : 'text-success-700')}>{Math.round(percentage)}%</figcaption>
                        <p className="text-sm font-medium text-gray-100 truncate">vs last month</p>
                    </figure>
                </div>
            </div>
            <img src={`/assets/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`} className="xl:w-32 w-full h-full md:h-32 xl:h-full" alt="chart graph"/>
        </div>
    </article>
  )
}

export default StatsCard