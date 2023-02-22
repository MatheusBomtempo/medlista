import React from 'react';

export default function User({id_user, nome}) {
  return(
    <div className='container__user'>
      <div className='container__user__id'>ID: {id_user}</div>
      <div className='container__user__nome'>User: {nome}</div>
    </div>
  )
}