import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0) //исходя из соглашения название функции должно начинаться с "set...". Мы таким образом сообщаем реакту об изменениях. Юстейт это своего рода хранилище действий за пределами компанентами.
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

  const formatCount = () => {
    return count === 0 ? 'empty' : count
  }

  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += count === 0 ? 'bg-warning' : 'bg-success'
    return classes
  }

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  } // называются согласно конвенции "Хэндлеры" обработчики событий. Обязательно начинаются с "handle..."

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1)
  }

  const handleTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id)) //получаем массив и с помощью фильтра остаются только те tag на который мы не нажимали.
  }

  const renderTags = () => {
    return (
      tags.length !== 0 &&
      tags.map((tag) => (
        <li
          key={tag}
          className="btn btn-success btn-sm m-2"
          onClick={() => handleTagChange(tag)}
        >
          {tag}
        </li>
      ))
    )
  }
  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>
  }

  return (
    <>
      <ul>{renderTags()}</ul>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-success btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-success btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </> //вешаем обработчик событий онклик на кнопку. С переданным референцом функции. Функцию при этом не вызываем.
  )
}

export default Counter
