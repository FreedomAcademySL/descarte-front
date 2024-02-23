import {
  SwitcherFour,
  SwitcherOne,
  SwitcherThree,
  SwitcherTwo,
} from '@/components';
import { LngParamProps, fallbackLng, languages } from '../../../i18n/settings';

export default async function Page({
  params,
}: LngParamProps): Promise<JSX.Element> {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng, TranslationFilesType.login);
  return (
    <div>
      <div className='flex flex-col align-center justify-center me-auto ms-auto'>
        <img
          className='min-w-62 min-h-72 md:min-w-62 md:min-h-72 m-auto'
          src={'/images/logo/falogoblanco.svg'} //ToDo JH: Revisar por que no carga usando @constants
          alt='freedom-logo'
          width={250}
          height={107}
        />
        <h1 className='text-center mb-10 text-5xl max-w-[550px] m-auto'>
          Monitor de Milestones e Ingeniería de Habitos
        </h1>
        <p className='max-w-[550px] m-auto text-justify'>
          Monitor para llevar registro de la implementación de Ingeniería de
          Hábitos, y algunos hitos adicionales que no tienen "carácter diario"
          (no tendría sentido anotar todos los días en la planilla de Tracking
          de Hábitos)
          <br />
          <br />
          Importante: Anotar esto es igual o más importante que lo que se anota
          en la planilla. Lo que tengas activado/desactivado debería reflejar la
          realidad actual de tu situación.
          <br />
          <br />
          O sea:
          <br />
          <b>ACTIVADO </b>
          = IMPLEMENTADO AHORA (VIGENTE)
          <br />
          <b>DESACTIVADO </b>
          =NO-IMPLEMENTADO AHORA (NO VIGENTE)
          <br />
        </p>
        <div>
          <SwitcherThree></SwitcherThree>
        </div>
      </div>
    </div>
  );
}
