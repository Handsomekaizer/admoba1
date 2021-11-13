import React from 'react'

import {View,Text,StyleSheet}  from 'react-native'
import {InterstitialAd}  from '@react-native-firebase/admob'

const Home=()=>{


    const intertitialAd=InterstitialAd.createForAdRequest(Constants.intertitialId)
    intertitialAd.onAdEvent((type,error)=>{
        
    })
    return(
        <View style={styles.main}>
            <Text>HOME</Text>
        </View>
    )
}


export default Home


const styles=StyleSheet({
    main:{

    }
})

