import React, { useState } from 'react'

const Counter = (props) => {
  // некий объект в который мы передаем атрибуты и наши атрибуты будут свойствами этого компонента.

  const { value } = props //исходя из соглашения название функции должно начинаться с "set...". Мы таким образом сообщаем реакту об изменениях. Юстейт это своего рода хранилище действий за пределами компанентами.

  const formatValue = () => {
    return value <= 0 ? 'empty' : value
  }

  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += value <= 0 ? 'bg-warning' : 'bg-success'
    return classes
  }

  return (
    <div>
      {<span>{props.name}</span>}
      <span className={getBageClasses()}>{formatValue()}</span>
      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-success btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div> //вешаем обработчик событий онклик на кнопку. С переданным референцом функции. Функцию при этом не вызываем.
  )
}

export default Counter
