import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = () => {
  return (
    <form action="" className={classes.form}>
          <Input
        // ref={amountInputRef}
        label='Amount'
        input={{
        //   id: 'amount_' + props.id,
        id:'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
