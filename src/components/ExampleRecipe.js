import React, { useState } from 'react'

const ExampleRecipe = () => {
    let [measurementType, setMeasurementType] = useState('oz')
    let item = {
        'name':'Espresso Martini',
        'category': ['coffe', 'martini'],
        'ingredients': ['Vodka', 'Espresso', 'Coffee Liqueur', 'Simple Syrup', 'Coffee Beans'],
        'measurements': ['2 oz', '1 oz', '0.5 oz','0.25 oz', '3'],
        'method': ['Combine all the ingredients into your cocktail shaker', 'Shake with Ice', 'Strain into a chilled cocktail glass', 'Garnish with 3 coffee beans']
    }
    let [myItem, setMyItem] = useState(item)
    const handleMeasurement = () => {
        let mySwitch = document.getElementById('ozml-switch')
        if (mySwitch.checked === true){
            setMeasurementType('ml')
        }else{
            setMeasurementType('oz')
        }
    }
    if(measurementType === 'oz'){
        item.measurements.forEach((m,idx) => {
            if(m.includes('ml')){
                let mes = parseFloat(m.split(' ')[0])
                let newMes = Math.ceil(mes / 29.5735)
                myItem.measurements[idx] = `${newMes} oz`
            }else {
                myItem.measurements[idx] = m
            }
        })
    }else if(measurementType === 'ml'){
        item.measurements.forEach((m,idx) => {
            if(m.includes('oz')){
                let mes = parseFloat(m.split(' ')[0])
                let newMes = Math.ceil(mes * 29.5735)
                myItem.measurements[idx] = `${newMes} ml`
            } else {
                myItem.measurements[idx] = m
            }
        })
    }
        
      
  return (
    <div className='d-flex fd-col jc-c ai-c recipe-card'>
        <h3 className='recipe-card-heading'>Espresso Martini</h3>
        <div className='recipe-card-container'>
            <img className='recipe-image' src='https://amandascookin.com/wp-content/uploads/2022/09/Espresso-Martini-SQRC.jpg' alt='' />
            <div className='d-flex fd-col jc-c ' style={{textAlign: 'start'}}>
                <h4 className='recipe-card-heading2'>Ingredients</h4>
                <div className='center'>
                    <label className="switch">
                        <input id='ozml-switch' type="checkbox" onClick={()=> handleMeasurement()} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <ul>
                    {myItem.measurements.map((mea,idx) => {
                        return (
                            <li key={idx}>{mea} {item.ingredients[idx]}</li>
                        )
                    })}
                </ul>
                <h4 className='recipe-card-heading2'>Method</h4>
                <ol className='method-list'>
                    {item.method.map((m,idx) => {
                        return (
                            <li key={idx}>{m}</li>
                        )
                    })}
                </ol>
            </div>
        </div>
    </div>
  )
}

export default ExampleRecipe