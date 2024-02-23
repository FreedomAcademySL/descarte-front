import { BitcoinIcon, UsdtIcon, WalletIcon } from '@/components';

export enum CellFieldType {
  Email = 'Email',
  Address = 'Address',
  Wallet = 'Wallet',
  CryptoValue = 'CryptoValue',
  Status = 'Status',
}

export enum IconValueType {
  BitcoinIcon = 'BitcoinIcon',
  UsdtIcon = 'UsdtIcon',
}

export enum CryptoValueType {
  BTC = 'BTC',
  USDT = 'USDT',
}

interface CellFieldProps {
  title?: string;
  description?: string;
  iconValue?: IconValueType;
  cryptoValue?: CryptoValueType;
  type: CellFieldType;
}

const iconMap: { [key in IconValueType]: JSX.Element } = {
  BitcoinIcon: <BitcoinIcon width={20} height={22} />,
  UsdtIcon: <UsdtIcon width={20} height={22} />,
};

export const CellField = ({
  title,
  description,
  iconValue,
  cryptoValue,
  type,
}: CellFieldProps): JSX.Element => {
  if (type === CellFieldType.Email) {
    return (
      <div className='flex flex-row'>
        <div className='mr-2'>
          <div className='w-8 h-8 rounded-3xl bg-sky-300 p-2 text-xs text-white'>
            FA
          </div>
        </div>
        <div>
          <div className='w-3/6 font-medium truncate text-ellipsis'>
            {title}
          </div>
          <div className='w-3/6 truncate text-ellipsis mt-1'>{description}</div>
        </div>
      </div>
    );
  }
  if (type === CellFieldType.Address) {
    return (
      <div>
        <div className='w-3/6 font-medium truncate text-ellipsis'>Address</div>
        <div className='w-9/12 truncate text-ellipsis mt-1'>{description}</div>
      </div>
    );
  }
  if (type === CellFieldType.CryptoValue) {
    return (
      <div className='flex flex-col'>
        <div className='flex col items-center justify-center font-medium'>
          <div className='mr-2'>{iconValue && iconMap[iconValue]}</div>
          <div>{`${title} ${cryptoValue}`}</div>
        </div>
        <div className='ml-1 mt-1'>{description}</div>
      </div>
    );
  }
  if (type === CellFieldType.Wallet) {
    return (
      <div className='flex flex-col'>
        <div className='flex w-3/6 font-medium truncate text-ellipsis'>
          <div className='mr-2 text-center'>
            <WalletIcon />
          </div>
          <div className='flex items-center justify-center'>{`${title} ${cryptoValue}`}</div>
        </div>
        <div className='w-9/12 truncate text-ellipsis mt-1 text-center'>
          {description}
        </div>
      </div>
    );
  } else return <div></div>;
};
