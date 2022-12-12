import React, { useState } from 'react'
import Counter from './counter'
const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Нужная штука' },
    { id: 1, value: 0, name: 'Прикольная штука' },
    { id: 2, value: 0, name: 'Носок Доби' },
    { id: 3, value: 0, name: 'Бред сивой кобылы' },
    { id: 4, value: 0, name: 'Макгаффин' },
  ]

  const [counters, setCounters] = useState(initialState) //Упрощаем передачу данных в Counter создавая при этом упорядоченный массив.

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id)

    setCounters(newCounters)
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (id) => {
    const Counter = counters.map((objects) => {
      if (objects.id === id) {
        objects.value++
        return objects
      } else {
        return objects
      }
    })

    setCounters(Counter)
  }

  const handleDecrement = (id) => {
    const Counter = counters.map((objects) => {
      if (objects.id === id) {
        objects.value--
        return objects
      } else {
        return objects
      }
    })

    setCounters(Counter)
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        /> //Все методы которые мы передаем внутрь компанента должны начинатья с "on..."(onDelete).
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </> //Реализация счетчика позицый товара.
  )
}
export default CountersList
