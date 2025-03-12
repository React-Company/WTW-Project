import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <img src="/img/NotFound.svg" alt="Not Found" height={700} width={700} className="object-contain" />

      <Link to="/" className="">
        123
      </Link>
    </div>
  );
}
