import {useAppSelector} from '../../hooks/reduser';
import {getError} from '../../store/error-data/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  if (error) {
    return (
      <div className="error-message">
        {error}
      </div>
    );
  }

  return null;
}

export {ErrorMessage};
