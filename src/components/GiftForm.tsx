import { useMutation, useQuery } from 'react-query';
import { FormEvent, useState } from 'react';
import { IGift } from '../interfaces';
import coco05 from '../assets/img/coco_05.png';
import './GiftForm.css';
import { generateWins, getGifts } from '../api/raffleAPI';
import { useNavigate } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';

export const GiftForm = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [selectedGift, setSelectedGift] = useState<IGift | null>(null);

  const { data: gifts } = useQuery({
    queryKey: 'getGifts',
    queryFn: getGifts,
  });

  const generateWinsMutation = useMutation({
    mutationFn: generateWins,
    onSuccess: ({ data }) => {
      localStorage.setItem('winning-people', JSON.stringify(data.data));
      navigate('/winning-people');
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedGift) {
      localStorage.setItem('gift-name', selectedGift.nombre);
      generateWinsMutation.mutate(selectedGift);
      setSelectedGift(null);
      setDisabled(true);
    }
  };

  const handleChangeGift = (
    event: SingleValue<{
      value: number;
      label: string;
    } | null>
  ) => {
    const isSelectedValue = event === null;
    setDisabled(isSelectedValue);
    const giftFound = gifts?.find((gift) => gift.id_regalo === event?.value);
    setSelectedGift(giftFound ?? null);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="relative">
        <img className="coco-img" src={coco05} alt="coco" />
        <div className="card-form">
          <div className="group-input">
            <label className="form-label" htmlFor="name">
              Nombre del regalo
            </label>
            <Select
              className="w-full rounded"
              options={gifts?.map((gift) => ({
                value: gift.id_regalo,
                label: gift.nombre,
              }))}
              onChange={handleChangeGift}
              placeholder="Selecciona un regalo"
              classNames={{
                control: (state) =>
                  `h-12 ${
                    state.isFocused
                      ? 'border-primary-macro'
                      : 'border-gray-macro'
                  }`,
              }}
            />
          </div>
          <div className="group-input">
            <label className="form-label" htmlFor="giftsAvailable">
              Número de ganadores
            </label>
            <span className="w-full h-12 p-3 bg-gray-400-macro border border-solid text-midnight-macro border-gray-macro rounded flex items-center select-none">
              {selectedGift?.cantidad ?? 0}
            </span>
          </div>
          <button className="btn-primary" disabled={disabled}>
            Iniciar
          </button>
        </div>
      </div>
    </form>
  );
};
