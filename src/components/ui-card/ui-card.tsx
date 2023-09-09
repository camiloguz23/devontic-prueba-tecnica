'use client';
import { type ProgramTypesEnum } from '@/types';
import style from './ui-card.module.scss';
import { useEffect, useState } from 'react';
import { styled, Modal } from '@mui/material';
import { UiText } from '@/components';

interface Prop {
  urlImg?: true | undefined;
  type?: ProgramTypesEnum;
  title: string;
  image: string;
  index: number;
  description?: string;
  year?: number;
}

const UiModal = styled(Modal)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const UiContentModal = styled('div')(() => ({
  width: 300,
  padding: 10,
  gap: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'hsla(0, 0%, 20%, 1)'
}));

function UiCard({ urlImg, type, title, image, index, description, year }: Prop): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [errorImg, setErrorImg] = useState<boolean>(false);

  const setImg = (): string => (errorImg ? '/img/withOutImage.jpeg' : image);

  useEffect(() => {
    const imgElement = document.getElementById(`image${index}`) as HTMLImageElement;

    imgElement.addEventListener('error', () => {
      setErrorImg(true);
    });
  }, []);

  return (
    <>
      <div className={style.card}>
        <div className={style.contentImg}>
          <img id={`image${index}`} className={urlImg && style.img} src={setImg()} alt={urlImg ? title : type} />
          {urlImg ?? <span className={style.nameType}>{type}</span>}
        </div>
        <p
          className={style.text}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {title} {urlImg ?? type}
        </p>
      </div>
      <UiModal
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <UiContentModal>
          <img className={style.img} src={setImg()} alt={urlImg ? title : type} />
          <span>{year}</span>
          <UiText text={title} />
          <UiText text={description ?? ''} />
        </UiContentModal>
      </UiModal>
    </>
  );
}

export default UiCard;
