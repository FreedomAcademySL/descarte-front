'use client';
import './session-card.styles.css';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Card } from '../card';
import { Button } from '../button';
import { HiOutlinePencil } from 'react-icons/hi';
import { MdOutlineQuiz } from 'react-icons/md';
import { PiVideoBold } from 'react-icons/pi';
import { FaLock } from 'react-icons/fa6';
import SessionDate from './session-card.date.component';
import { BadgeType, SessionBadge } from './session-badge';
import { Quiz, QuizProps } from '../quiz';
import { StepperMenu } from '@/components/stepper/';
import { useStepper } from '@/hooks/use-stepper';

const buttonClass = 'w-[2.188rem] h-[2.188rem]';
export interface SessionData {
  uuid: string;
  title?: string;
  number?: number;
  sessionDate?: string;
  homeworkUrl?: string;
  sessionUrl?: string;
  questions?: QuizProps[];
}
interface Props {
  session: SessionData;
}
interface VideoPlayerProps {
  videoOpen: boolean;
  sessionVideo: string;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoOpen,
  sessionVideo,
}): JSX.Element | null => {
  if (!videoOpen) {
    return null;
  }
  const opts = {
    height: '100%',
    width: 'auto',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const videoId = sessionVideo.split('v=')[1] || sessionVideo.split('be/')[1];
  return <YouTube videoId={videoId} opts={opts} />;
};
export const SessionCard: React.FC<Props> = ({ session }): JSX.Element => {
  const [isVideoViewed, setVideoViewed] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [isQuizOpen, toggleQuiz] = useState<boolean>(false);
  const { activeStep, handleNext, handleBack } = useStepper(0);
  const [homeworkOpen] = useState<boolean>(false);
  const type: BadgeType = isVideoViewed ? 'viewed' : 'pending';
  const isEnabled = session.sessionUrl ? true : false;
  const handleVideoOpen = () => {
    setIsVideoOpen(!isVideoOpen);
    setVideoViewed(true);
  };
  const handleQuizOpen = () => {
    console.log('quiz', session.questions);
    toggleQuiz(!isQuizOpen);
  };
  return (
    <Card>
      <>
        {!isEnabled && (
          <div className='bg-black-33 backdrop-blur-md block absolute top-0 left-0 w-full h-full rounded-xl flex flex-col items-center justify-center'>
            <FaLock className='h-12 w-12 mb-4' />
            <SessionDate sessionDate={'sessionDate'} />
          </div>
        )}
        <div className='flex flex-col gap-2'>
          {isEnabled && <SessionBadge type={type} />}
          <div className='flex mt-8 justify-between gap-2'>
            <span className=''>
              <span className='session__title text-2xl'>S{session.number}</span>
              <p className='text-balance w-auto mt-5 text-xl'>
                {session.title}
              </p>
            </span>
            <span className='flex flex-col justify-between'>
              <div className='flex gap-2'>
                <Button onClick={handleVideoOpen}>
                  <PiVideoBold className={buttonClass} />
                </Button>
                <Button>
                  <HiOutlinePencil className={buttonClass} />
                </Button>
                <Button onClick={handleQuizOpen}>
                  <MdOutlineQuiz className={buttonClass} />
                </Button>
              </div>
              <SessionDate sessionDate={'sessionDate'} />
            </span>
          </div>
          <div className='m-auto'>
            <VideoPlayer
              videoOpen={isVideoOpen}
              sessionVideo={session.sessionUrl || ''}
            />
            <VideoPlayer
              videoOpen={homeworkOpen}
              sessionVideo={session.homeworkUrl || ''}
            />
          </div>
          <div className='bg-gray-300 block rounded-xl '>
            {isQuizOpen && session.questions && (
              <StepperMenu
                activeStep={activeStep}
                handleNext={() => handleNext(session.questions.length - 1 ?? 0)}
                handleBack={handleBack}
                maxSteps={session.questions.length - 1}
              >
                {session.questions.map((question, index) => (
                  <Quiz key={question.uuid} {...question} questionNumber={index + 1} />
                ))}
              </StepperMenu>
            )}
          </div>
        </div>
      </>
    </Card>
  );
};
