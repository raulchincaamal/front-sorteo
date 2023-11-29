interface IWinningPersonProp {
  position: number;
  name: string;
  job: string;
}

const WinningPerson = ({ position, name, job }: IWinningPersonProp) => {
  return (
    <div className="flex gap-2">
      <span className="text-cyan-50 text-xl font-semibold">
        {position + 1}
      </span>
      <div className="flex flex-col">
        <span className="font-semibold text-xl capitalize text-cyan-50">{name.toLowerCase()}</span>
        <span className="text-lg font-normal text-cyan-50 capitalize">
          {job.toLowerCase()}
        </span>
      </div>
    </div>
  );
};

export default WinningPerson;
