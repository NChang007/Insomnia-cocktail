import React from 'react'
import ExampleRecipe from '../components/ExampleRecipe'
import Modal from '../components/Modal'

const Cocktails = () => {
  let recipies = [
    {
      'name':'Espresso Martini',
      'category': ['coffee', 'martini'],
      'details': [
        {'ingredient':'vodka','measurement':'2 oz'}, 
        {'ingredient':'Espresso','measurement':'1 oz'}, 
        {'ingredient':'Coffee Liqueur','measurement':'0.5 oz'}, 
        {'ingredient':'Simple Syrup','measurement':'0.25 oz'},
        {'ingredient':'Coffee Beans','measurement':'3'}
      ],
      'method': ['Combine all the ingredients into your cocktail shaker', 'Shake with Ice', 'Strain into a chilled cocktail glass', 'Garnish with 3 coffee beans'],
      'image':''
    },
    {
      'name':''
    }
  ]

  return (
    <div className='cocktail-page'>
      <h2 className='cocktail-page-title'>Cocktail Recepies</h2>
      <div>
        {
          recipies.map((recipe,idx) => {
            return (
              <Modal />
            )
          })
        }
      </div>
    </div>
  )
}

export default Cocktails