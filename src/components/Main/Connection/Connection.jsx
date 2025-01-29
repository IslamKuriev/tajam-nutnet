import { useState } from 'react';
import './Connection.scss';

const Connection = () => {
  const [valueTel, setValueTel] = useState(null);

  const handleOnChange = (e) => {
    if (e.target.value.length < 15) {
      setValueTel(e.target.value);
    }
  };
  return (
    <div className="connection__container">
      <h2>GIVE US A GOOD NEWS</h2>
      <form>
        <input type="text" placeholder="Name" required maxLength={15} />
        <input type="email" placeholder="Email" required maxLength={30} />
        <input
          value={valueTel}
          onChange={handleOnChange}
          type="number"
          placeholder="+1 (999) 999-99-99"
          required
          maxLength={15}
        />
        <input type="text" placeholder="Subject" required maxLength={20} />
        <textarea type="text" placeholder="Your Massage" required maxLength={150} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Connection;
