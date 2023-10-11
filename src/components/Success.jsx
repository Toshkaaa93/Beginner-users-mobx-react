import { observer } from 'mobx-react-lite';
import React from 'react';
import usersStore from '../store/users-store';

export const Success = observer(() => {
  let count = usersStore.invites.length

  if (count === 1) {
    return (
      <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Одному пользователю отправлено приглашение.</p>
      <button onClick={()=>window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
    )
  } else if (count === 6) {
    return (
      <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем пользователям отправлено приглашение.</p>
      <button onClick={()=>window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
   )
  } else {
    return (
      <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>{count} пользователям отправлено приглашение.</p>
      <button onClick={()=>window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
    )
  }
  
  // return (
  //   <div className="success-block">
  //     <img src="/assets/success.svg" alt="Success" />
  //     <h3>Успешно!</h3>
  //     <p>Всем {count} пользователям отправлено приглашение.</p>
  //     <button onClick={()=>window.location.reload()} className="send-invite-btn">Назад</button>
  //   </div>
  // );
});

