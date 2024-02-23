import { LngParamProps, fallbackLng, languages } from '../../../i18n/settings';
import { Wrapper } from '@/components/wrapper';
import { SessionCard } from '@/components/session-card';
import { JSX } from 'react/jsx-runtime';
import { QuizProps } from '@/components/quiz';
import { useFetch } from '@/hooks/';
import { SessionData } from '@/components/session-card';

const sessionData: SessionData[] = [
  {
    uuid: '0910ad27-5ed6-4954-81a5-6fa7ad17f8b5',
    title: 'Fundamentos Básicos I: Energía',
    number: 1,
    sessionDate: '2024-1-1',
    homeworkUrl: 'https://www.youtube.com/watch?v=Z4KuV9pQxU8',
    sessionUrl: 'https://youtu.be/Us9gamEdnPY?si=rO6FOMKBs5t1DCs2',
    questions: [
      {
        uuid: 'ee885db0-5847-4e41-a4bb-c6da7d23ac4c',
        question: '¿Cuales son las 3 dimensiones del "Cubo de ENERGIA"?',
        answers: [
          {
            uuid: '3fa390f0-2c62-4db4-b3af-9927277d2d17',
            answer: 'Energia Corporal, Recursos ($$$), Inteligencia (g)',
          },
          {
            uuid: '15d25a5b-d70d-4714-b1b6-2b949013aede',
            answer: 'Recursos ($$$), Sensacion de Bienestar, Energia',
          },
          {
            uuid: '8d73200a-7b01-4ea1-9bce-30281a5732ab',
            answer: 'Energia Corporal, Energia Cognitiva, Felicidad',
          },
          {
            uuid: 'cec70919-94db-412c-bc07-f53dc9f16e07',
            answer: 'Energia Cognitiva, Recursos, Felicidad',
          },
        ],
      },
      {
        uuid: '6f40b4db-aebb-4aa0-bc8f-8f3aef721027',
        question: 'La Libertad depende...',
        answers: [
          {
            uuid: '37f5d365-ea9a-466f-89b2-5ddde093cf2b',
            answer:
              'Negativamente de la Entropia y positivamente de la Energia',
          },
          {
            uuid: '4dbe29e5-1ec7-4258-a690-fe293f999d50',
            answer:
              'Positivamente de la Entropia y negativamente de la Energia',
          },
          {
            uuid: 'af3f3d75-a2f6-499d-946a-45b85775001d',
            answer:
              'Positivamente de la Entropia y negativamente de la Energia',
          },
          {
            uuid: 'a9c03834-ab3e-44f6-abf0-b4d93be6938a',
            answer:
              'Negativamente de la Entropía y negativamente de la Energía',
          },
        ],
      },
      {
        uuid: '3ad05d30-3c8f-4a3a-a18b-e3e3c942cbdf',
        question: '¿Cual es el objetivo de Freedom Academy?',
        answers: [
          {
            uuid: '3dfe418e-e30f-4b10-a7f5-6802ac5d1ed0',
            answer: 'Ordenarme',
          },
          {
            uuid: '8fb6f064-5bb5-46a8-b8a7-69f00a016ddc',
            answer: 'Escalar energia',
          },
          {
            uuid: 'b4419017-7bf7-43dc-ab2c-f81a30208690',
            answer: 'Todas las anteriores',
          },
          {
            uuid: '4c1d2b2f-2e68-425e-b5c8-cca22928853d',
            answer: 'Mejorar capacidad fisica y cognitiva',
          },
        ],
      },
      {
        uuid: '2548ae03-87c9-431a-b9ad-6f240292c44a',
        question:
          '¿Que pasa cuando sube la cantidad de "Parasitos" o "Adicciones"?',
        answers: [
          {
            uuid: '0061949a-ec53-4bff-a2cc-4d60d20435bc',
            answer: 'Sube la Energia',
          },
          {
            uuid: 'bac6ce48-7fb4-4a8f-9301-ed22da5519c0',
            answer: 'Sube la Entropia',
          },
          {
            uuid: '3fdf905f-ebb4-4640-a704-05a3c1dc5bf2',
            answer: 'Cae la Energia y la Felicidad',
          },
          {
            uuid: '01624114-c823-4efc-913a-d865c1c1974d',
            answer: 'B y C son correctas',
          },
        ],
      },
      {
        uuid: 'a9fcf891-b278-4903-bca5-068847f03cda',
        question: '¿Que son los "leaks" de ENERGIA?',
        answers: [
          {
            uuid: '59ffdf72-9f3e-422e-8f65-0a58463d97e5',
            answer: 'Actividades espurias que aceleran nuestra Entropia',
          },
          {
            uuid: '0c8180a5-2d23-4ee4-87f9-f4f9a4d0343a',
            answer: 'Tiempo que destinamos a cosas que bajan la Entropia',
          },
          {
            uuid: 'a244e3a5-855c-4fff-933f-72f191a87722',
            answer: 'Lugar por donde mejoramos nuestra Energia',
          },
          {
            uuid: '0cbc0515-b336-44d6-ace5-e614436fe268',
            answer: 'Actividades espurias que desaceleran nuestra Entropia',
          },
        ],
      },
    ],
  },
  {
    uuid: '0910ad27-5ed6-4954-81a5-6fa7ad17f8b5',
    title: 'Fundamentos Básicos II: Energía',
    number:2,
    sessionDate: '2024-1-2',
    homeworkUrl: 'https://www.youtube.com/watch?v=Z4KuV9pQxU8',
    sessionUrl: 'https://youtu.be/Us9gamEdnPY?si=rO6FOMKBs5t1DCs2',
    questions: [
      {
        uuid: 'ee885db0-5847-4e41-a4bb-c6da7d23ac4c',
        question: '¿Cuales son las 3 dimensiones del "Cubo de ENERGIA"?',
        answers: [
          {
            uuid: '3fa390f0-2c62-4db4-b3af-9927277d2d17',
            answer: 'Energia Corporal, Recursos ($$$), Inteligencia (g)',
          },
          {
            uuid: '15d25a5b-d70d-4714-b1b6-2b949013aede',
            answer: 'Recursos ($$$), Sensacion de Bienestar, Energia',
          },
          {
            uuid: '8d73200a-7b01-4ea1-9bce-30281a5732ab',
            answer: 'Energia Corporal, Energia Cognitiva, Felicidad',
          },
          {
            uuid: 'cec70919-94db-412c-bc07-f53dc9f16e07',
            answer: 'Energia Cognitiva, Recursos, Felicidad',
          },
        ],
      },
      {
        uuid: '6f40b4db-aebb-4aa0-bc8f-8f3aef721027',
        question: 'La Libertad depende...',
        answers: [
          {
            uuid: '37f5d365-ea9a-466f-89b2-5ddde093cf2b',
            answer:
              'Negativamente de la Entropia y positivamente de la Energia',
          },
          {
            uuid: '4dbe29e5-1ec7-4258-a690-fe293f999d50',
            answer:
              'Positivamente de la Entropia y negativamente de la Energia',
          },
          {
            uuid: 'af3f3d75-a2f6-499d-946a-45b85775001d',
            answer:
              'Positivamente de la Entropia y negativamente de la Energia',
          },
          {
            uuid: 'a9c03834-ab3e-44f6-abf0-b4d93be6938a',
            answer:
              'Negativamente de la Entropía y negativamente de la Energía',
          },
        ],
      },
      {
        uuid: '3ad05d30-3c8f-4a3a-a18b-e3e3c942cbdf',
        question: '¿Cual es el objetivo de Freedom Academy?',
        answers: [
          {
            uuid: '3dfe418e-e30f-4b10-a7f5-6802ac5d1ed0',
            answer: 'Ordenarme',
          },
          {
            uuid: '8fb6f064-5bb5-46a8-b8a7-69f00a016ddc',
            answer: 'Escalar energia',
          },
          {
            uuid: 'b4419017-7bf7-43dc-ab2c-f81a30208690',
            answer: 'Todas las anteriores',
          },
          {
            uuid: '4c1d2b2f-2e68-425e-b5c8-cca22928853d',
            answer: 'Mejorar capacidad fisica y cognitiva',
          },
        ],
      },
      {
        uuid: '2548ae03-87c9-431a-b9ad-6f240292c44a',
        question:
          '¿Que pasa cuando sube la cantidad de "Parasitos" o "Adicciones"?',
        answers: [
          {
            uuid: '0061949a-ec53-4bff-a2cc-4d60d20435bc',
            answer: 'Sube la Energia',
          },
          {
            uuid: 'bac6ce48-7fb4-4a8f-9301-ed22da5519c0',
            answer: 'Sube la Entropia',
          },
          {
            uuid: '3fdf905f-ebb4-4640-a704-05a3c1dc5bf2',
            answer: 'Cae la Energia y la Felicidad',
          },
          {
            uuid: '01624114-c823-4efc-913a-d865c1c1974d',
            answer: 'B y C son correctas',
          },
        ],
      },
      {
        uuid: 'a9fcf891-b278-4903-bca5-068847f03cda',
        question: '¿Que son los "leaks" de ENERGIA?',
        answers: [
          {
            uuid: '59ffdf72-9f3e-422e-8f65-0a58463d97e5',
            answer: 'Actividades espurias que aceleran nuestra Entropia',
          },
          {
            uuid: '0c8180a5-2d23-4ee4-87f9-f4f9a4d0343a',
            answer: 'Tiempo que destinamos a cosas que bajan la Entropia',
          },
          {
            uuid: 'a244e3a5-855c-4fff-933f-72f191a87722',
            answer: 'Lugar por donde mejoramos nuestra Energia',
          },
          {
            uuid: '0cbc0515-b336-44d6-ace5-e614436fe268',
            answer: 'Actividades espurias que desaceleran nuestra Entropia',
          },
        ],
      },
    ],
  },
  {
    uuid: '0910ad27-5ed6-4954-81a5-6fa7ad17f8b5',
    title: 'Fundamentos Básicos III: Energía',
    number:3 ,
    sessionDate: '2024-1-3',
    homeworkUrl: 'https://www.youtube.com/watch?v=Z4KuV9pQxU8',
    sessionUrl: 'https://youtu.be/Us9gamEdnPY?si=rO6FOMKBs5t1DCs2',
    questions: [
      {
        uuid: 'ee885db0-5847-4e41-a4bb-c6da7d23ac4c',
        question: '¿Cuales son las 3 dimensiones del "Cubo de ENERGIA"?',
        answers: [
          {
            uuid: '3fa390f0-2c62-4db4-b3af-9927277d2d17',
            answer: 'Energia Corporal, Recursos ($$$), Inteligencia (g)',
          },
          {
            uuid: '15d25a5b-d70d-4714-b1b6-2b949013aede',
            answer: 'Recursos ($$$), Sensacion de Bienestar, Energia',
          },
          {
            uuid: '8d73200a-7b01-4ea1-9bce-30281a5732ab',
            answer: 'Energia Corporal, Energia Cognitiva, Felicidad',
          },
          {
            uuid: 'cec70919-94db-412c-bc07-f53dc9f16e07',
            answer: 'Energia Cognitiva, Recursos, Felicidad',
          },
        ],
      },
      {
        uuid: '6f40b4db-aebb-4aa0-bc8f-8f3aef721027',
        question: 'La Libertad depende...',
        answers: [
          {
            uuid: '37f5d365-ea9a-466f-89b2-5ddde093cf2b',
            answer:
              'Negativamente de la Entropia y positivamente de la Energia',
          },
          {
            uuid: '4dbe29e5-1ec7-4258-a690-fe293f999d50',
            answer:
              'Positivamente de la Entropia y negativamente de la Energia',
          },
          {
            uuid: 'af3f3d75-a2f6-499d-946a-45b85775001d',
            answer:
              'Positivamente de la Entropia y negativamente de la Energia',
          },
          {
            uuid: 'a9c03834-ab3e-44f6-abf0-b4d93be6938a',
            answer:
              'Negativamente de la Entropía y negativamente de la Energía',
          },
        ],
      },
      {
        uuid: '3ad05d30-3c8f-4a3a-a18b-e3e3c942cbdf',
        question: '¿Cual es el objetivo de Freedom Academy?',
        answers: [
          {
            uuid: '3dfe418e-e30f-4b10-a7f5-6802ac5d1ed0',
            answer: 'Ordenarme',
          },
          {
            uuid: '8fb6f064-5bb5-46a8-b8a7-69f00a016ddc',
            answer: 'Escalar energia',
          },
          {
            uuid: 'b4419017-7bf7-43dc-ab2c-f81a30208690',
            answer: 'Todas las anteriores',
          },
          {
            uuid: '4c1d2b2f-2e68-425e-b5c8-cca22928853d',
            answer: 'Mejorar capacidad fisica y cognitiva',
          },
        ],
      },
      {
        uuid: '2548ae03-87c9-431a-b9ad-6f240292c44a',
        question:
          '¿Que pasa cuando sube la cantidad de "Parasitos" o "Adicciones"?',
        answers: [
          {
            uuid: '0061949a-ec53-4bff-a2cc-4d60d20435bc',
            answer: 'Sube la Energia',
          },
          {
            uuid: 'bac6ce48-7fb4-4a8f-9301-ed22da5519c0',
            answer: 'Sube la Entropia',
          },
          {
            uuid: '3fdf905f-ebb4-4640-a704-05a3c1dc5bf2',
            answer: 'Cae la Energia y la Felicidad',
          },
          {
            uuid: '01624114-c823-4efc-913a-d865c1c1974d',
            answer: 'B y C son correctas',
          },
        ],
      },
      {
        uuid: 'a9fcf891-b278-4903-bca5-068847f03cda',
        question: '¿Que son los "leaks" de ENERGIA?',
        answers: [
          {
            uuid: '59ffdf72-9f3e-422e-8f65-0a58463d97e5',
            answer: 'Actividades espurias que aceleran nuestra Entropia',
          },
          {
            uuid: '0c8180a5-2d23-4ee4-87f9-f4f9a4d0343a',
            answer: 'Tiempo que destinamos a cosas que bajan la Entropia',
          },
          {
            uuid: 'a244e3a5-855c-4fff-933f-72f191a87722',
            answer: 'Lugar por donde mejoramos nuestra Energia',
          },
          {
            uuid: '0cbc0515-b336-44d6-ace5-e614436fe268',
            answer: 'Actividades espurias que desaceleran nuestra Entropia',
          },
        ],
      },
    ],
  },
];
export default async function Page({
  params,
}: LngParamProps): Promise<JSX.Element> {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng, TranslationFilesType.login);

  return (
    <Wrapper>
      <>
        <div className='flex flex-col align-center justify-center me-auto ms-auto m-0 max-w-72'>
          <img
            className='m-auto mb-5'
            src={'/images/logo/falogoblanco.svg'} //ToDo JH: Revisar por que no carga usando @constants
            alt='freedom-logo'
            width={145}
            height={145}
          />
          <h1 className='text-center mb-15 text-5xl'>Stage I</h1>
          {/* Sugerencia, colocar una pequeña descripcion de que se aprende en el stage 1 */}
        </div>

        <div className='flex flex-col gap-15'>
          {sessionData.map((session, index) => (
            <SessionCard
              key={index}
              session={session}
            />
          ))}
        </div>
      </>
    </Wrapper>
  );
}
