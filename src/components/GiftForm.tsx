import { useMutation } from "react-query";
import { FormEvent, useState } from "react";
import { IGiftForm } from "../interfaces";
import coco05 from "../assets/img/coco_05.png";
import "./GiftForm.css";
import { generateWins } from "../api/raffleAPI";
import { useNavigate } from "react-router-dom";

export const GiftForm = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const generateWinsMutation = useMutation({
    mutationFn: generateWins,
    onSuccess: ({ data}) => {
      localStorage.setItem("winning-people", JSON.stringify(data.data));
      navigate("/winning-people");
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisabled(true)
    setTimeout(() => setDisabled(false), 2000);

    const formData = new FormData(event.target as any);
    const { name, giftsAvailable } = Object.fromEntries(formData) as unknown as IGiftForm;
    if (name.trim() && giftsAvailable) {
      localStorage.setItem("gift-name", name.trim());
      generateWinsMutation.mutate({ name: name.trim(), giftsAvailable });
  
      const inputName = document.getElementById("name") as HTMLInputElement;
      const inputGiftsAvailable = document.getElementById("giftsAvailable") as HTMLInputElement;
      inputName.value = "";
      inputGiftsAvailable.value = "";
    }
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
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              placeholder="Bocinas..."
            />
          </div>
          <div className="group-input">
            <label className="form-label" htmlFor="giftsAvailable">
              Número de ganadores
            </label>
            <input
              type="number"
              name="giftsAvailable"
              id="giftsAvailable"
              className="form-input"
              placeholder="4"
            />
          </div>
          <button className="btn-primary" disabled={disabled}>Iniciar</button>
        </div>
      </div>
    </form>
  );
};
