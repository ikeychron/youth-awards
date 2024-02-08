import Link from 'next/link';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import FormControl from '../molecules/FormControl';

const NewVoteForm = () => {
  return (
    <section className="min-h-screen py-20 flex flex-col container mx-auto px-4">
      <Label labelTop="Nuevo" labelUnder="voto" />

      <div className="uppercase text-primaryDark text-sm mt-8">
        <p>Completa los campos</p>
      </div>

      <div className="flex flex-col gap-6 mt-10">
        <div className="flex flex-col gap-2">
          <FormControl
            label="Escribe tus nombres y apellidos:"
            inputProps={{
              id: 'fullname',
              placeholder: 'Ej: Carlos Sánchez',
              // value:name,
              // onChange: (e) => handleName(e.target.value),
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
              // value:name,
              // onChange: handleQuestions,
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
              // value:name,
              // onChange: handleQuestions,
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
              // value:name,
              // onChange: handleQuestions,
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

      <div className="flex items-center gap-3 mt-10">
        {/* <Link href="/nuevo-voto">
          <Button label="Ir a la lista de votos" variant="white" />
        </Link> */}
        <Button label="Siguiente" variant="white" />
      </div>
    </section>
  );
};

export default NewVoteForm;

