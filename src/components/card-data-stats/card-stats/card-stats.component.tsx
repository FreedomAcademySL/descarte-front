export interface StatsInfo {
  title?: string;
  quantity?: string;
  description?: string;
  icon?: JSX.Element;
  levelUp?: JSX.Element;
  levelDown?: JSX.Element;
}

export interface CardStatsInfo {
  cardInfo: StatsInfo[];
}

export interface CardStatsProps {
  generalInfo?: StatsInfo;
  cardStats: CardStatsInfo;
}
export const CardStats = ({
  generalInfo,
  cardStats,
}: CardStatsProps): JSX.Element => {
  return (
    <div className='flex flex-col mt-4'>
      {generalInfo && (
        <div className='flex flex-col mb-3'>
          <h4 className='text-title-md font-bold text-black dark:text-white'>
            {generalInfo.quantity}
          </h4>
          <span className='text-base font-semibold'>{generalInfo.title}</span>
          {generalInfo.description && (
            <span className='text-sm'>{generalInfo.description}</span>
          )}
        </div>
      )}
      {cardStats.cardInfo.map((card, index) => {
        return (
          <div
            key={`${card.title}-${index}`}
            className='flex flex-row items-center justify-between mt-2'
          >
            <div className='flex flex-col'>
              <h4 className='text-title-md font-bold text-black dark:text-white'>
                {card.quantity}
              </h4>
              <span className='text-sm font-medium '>{card.title}</span>
            </div>
            <div className='flex overflow-hidden'>
              <span
                className={`gap-1 text-sm font-medium ${'text-meta-3'} ${card.levelDown && 'text-meta-5'} `}
              >
                {card.description}
                {card?.icon}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
