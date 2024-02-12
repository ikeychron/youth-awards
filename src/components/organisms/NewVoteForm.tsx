'use client';
import { useAppSelector } from '@/lib/hooks';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import FormControl from '../molecules/FormControl';
import { useState } from 'react';

const STEPS_LABEL = ['Completa los campos', 'Vota por tus preferidos'];

const NewVoteForm = () => {
  const [step, setStep] = useState(1);
  const [fullname, setFullname] = useState('');
  const [howDefine, setHowDefine] = useState('');
  const [forMeIs, setForMeIs] = useState('');
  const [forThisYear, setForThisYear] = useState('');

  const handleNext = () => {
    if (step === 0) {
      setStep(1);
    }
  };

  const checkDisabled = () => {
    if (step === 0) {
      return (
        fullname.length < 12 ||
        howDefine.length < 12 ||
        forMeIs.length < 12 ||
        forThisYear.length < 12
      );
    }
  };

  const categories = useAppSelector((state) => state.nominateds.categories);

  return (
    <section className="min-h-screen py-20 flex flex-col container mx-auto px-4">
      <Label labelTop="Nuevo" labelUnder="voto" />

      <div className="uppercase text-primaryDark text-sm mt-8">
        <p>{STEPS_LABEL[step]}</p>
      </div>

      {step === 0 && (
        <div className="flex flex-col gap-6 mt-10">
          <div className="flex flex-col gap-2">
            <FormControl
              label="Escribe tus nombres y apellidos:"
              inputProps={{
                id: 'fullname',
                placeholder: 'Ej: Carlos Sánchez',
                value: fullname,
                onChange: (e) => setFullname(e.target.value),
                required: true,
              }}
              labelProps={{
                htmlFor: 'fullname',
              }}
            />
            <p className="text-sm text-primary">
              Pedimos tu nombre para saber que si ya votaste no repetir. Si no
              eres de la misión 63 no puedes participar.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <FormControl
              label="¿Cómo defines la juventud de nuestra iglesia?"
              inputProps={{
                id: 'question1',
                placeholder: 'La defino como...',
                value: howDefine,
                onChange: (e) => setHowDefine(e.target.value),
                required: true,
                minLength: 12,
              }}
              labelProps={{
                htmlFor: 'question1',
              }}
            />
            <p className="text-sm text-primary">
              Debes escribir mínimo 12 cáracteres
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <FormControl
              label="¿Qué es para ti ser joven cristiano?"
              inputProps={{
                id: 'question2',
                placeholder: 'Para mí es...',
                value: forMeIs,
                onChange: (e) => setForMeIs(e.target.value),
                required: true,
                minLength: 12,
              }}
              labelProps={{
                htmlFor: 'question2',
              }}
            />
            <p className="text-sm text-primary">
              Debes escribir mínimo 12 cáracteres
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <FormControl
              label="¿Qué aspiras para este 2024?"
              inputProps={{
                id: 'question3',
                placeholder: 'Para este 2024 aspiro...',
                value: forThisYear,
                onChange: (e) => setForThisYear(e.target.value),
                required: true,
                minLength: 12,
              }}
              labelProps={{
                htmlFor: 'question3',
              }}
            />
            <p className="text-sm text-primary">
              Debes escribir mínimo 12 cáracteres
            </p>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-6">
          <p className="text-sm text-primary">
            Solo puedes votar por un nominado por categoría.
          </p>

          <h2 className="capitalize font-bold text-xl">
            Nominados a {categories[0].name}
          </h2>
        </div>
      )}

      <div className="flex items-center gap-3 mt-10">
        {/* <Link href="/nuevo-voto">
          <Button label="Ir a la lista de votos" variant="white" />
        </Link> */}
        <Button
          label="Siguiente"
          variant="white"
          onClick={handleNext}
          disabled={checkDisabled()}
        />
      </div>
    </section>
  );
};

export default NewVoteForm;

