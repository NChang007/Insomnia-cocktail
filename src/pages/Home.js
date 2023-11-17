import React, { useContext, useEffect } from 'react'
// import Sidebar from '../components/Sidebar'
import ExampleRecipe from '../components/ExampleRecipe'
import { Context } from '../store/appContext'
import Navbar from '../components/Navbar'

const Home = () => {
    const {store, actions} = useContext(Context)
    console.log(store.msg);
  return (
    <div>
        <div className='home-container'>
            <img 
                className='w-100' 
                style={{height: '98vh', objectFit: 'cover'}} 
                src='https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                alt='Cocktail bar'/>
            <p id='welcometext'>Refreshing <span style={{color:'gold'}}>Cocktails</span><br/> a click away</p>
        </div>
        <div className='d-flex fd-col jc-c ai-c' >
            <h2>Simple to read recepies</h2>
            <ExampleRecipe/>
        </div>
        <div className='ingredient-card-container' >
            <div className='ingredient-card-div-red'>
                <h2>You don't know some of the ingredients <br/> no problem here at Imsomnia <br/>we show you everything you need to know</h2>
                <button className='ingredient-btn'>See Our Syrubs + Mixers</button>
            </div>
            <div className='ingredient-card-example'>
                <h3>SIMPLE SYRUP</h3>
                <span>(1:1 BY WEIGHT)</span>
                <p>The most basic yet essention sweetner. Use superfine sugar which has small granules and can be easily dissolved with or without heat. Simple syrup has a 1:1 ratio of sugar to water by weight. This syrope is more forgiving when measurung that a rick syrup, which has a 2:1 ration of sugar to water</p>
                <p>Keep refrigerated and use within 2 weeks</p>
                <p><strong>Makes:</strong> 1 2/3 cups</p>
                <div>
                    <ul>
                        <li>9 oz (250g) <strong> superfine Sugar</strong></li>
                        <li>9 oz (250g) <strong> Water</strong></li>
                    </ul>
                    <ol>
                        <li>Combine sugar and water.</li>
                        <li>Stir until the sugar is dissolved or shake it in a bottle.</li>
                        <li>(optionaly) If you dont have superfine sugar you can add the ingredients to a pot and stir at low to medium heat until the sugar desolves.</li>
                    </ol>
                </div>
            </div>
            <div className='ingredient-card-div-red'></div>
            <div className='ingredient-card-example'>
                <h3>RASPBERRY SYRUP</h3>
                <p>Raspberry syrup is an essential ingredient to make a classic Clover Club. It's also a good base recipe to follow when making your own fruit flavoured syrups that can be used as a dlavour modufiers in cocktails.</p>
                <p>Keep refrigerated and use within 1 month</p>
                <p><strong>Makes:</strong> 1 cup</p>
                <div>
                    <ul>
                        <li>1/2 cub fresh <strong> Raspberries</strong></li>
                        <li>1 cup <strong>Sugar</strong></li>
                        <li>1/2 cup <strong>Water</strong></li>
                    </ul>
                    <ol>
                        <li>Muddle the rasberries and cover with sugar to macerate for 30 minutes.</li>
                        <li>Heat the water (don't boil) and add the raspberry mixture.</li>
                        <li>Stir until the sugar has dissolved.</li>
                        <li>Strain the mixture and let cool before bottling.</li>
                    </ol>
                </div>
            </div>
            <div className='ingredient-card-div-red'></div>
        </div>


    </div>
  )
}

export default Home